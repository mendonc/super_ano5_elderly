##from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import UserSchema
from google.cloud.firestore import DocumentReference

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from backend.auth import authenticate_user, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES

from backend.schemas import UserCreateSchema, hash_password 

from fastapi.responses import JSONResponse

#from utils.access_control import hash_password  # Supondo que você tenha uma função para criptografar senhas
from backend.utils.security import hash_password  # Agora estamos usando o Argon2

router = APIRouter()

@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):

     # Logs para depuração
    print("📥 Dados recebidos no back-end:")
    print("Username:", form_data.username)
    print("Password:", form_data.password)
    
    """Realiza login e retorna o token JWT"""
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    token = create_access_token({"sub": user["user_id"], "role": user["role"]}, access_token_expires)

    #token = create_access_token({"sub": user.user_id, "role": user.role}, access_token_expires)
    
    print("✅ Token gerado:", token)  # Log do token gerado
    return {"access_token": token, "token_type": "bearer"}


@router.post("/")
def create_user(user_data: UserCreateSchema):
    """Cria um novo usuário com senha criptografada"""
    user_ref = db.collection("users").document(user_data.cpf)  # CPF como ID do documento
    existing_user = user_ref.get()

    if existing_user.exists:
        return JSONResponse(content={"error": "Usuário com este CPF já está cadastrado!"}, status_code=400)

    hashed_password = hash_password(user_data.password)  # Criptografa a senha

    user_ref.set({
        "user_id": user_data.cpf,
        "username": user_data.username,
        "password": hashed_password,
        "cpf": user_data.cpf,
        "role": user_data.role,
        "linked_user_id": user_data.linked_user_id or None
    })

    return {"message": "Usuário criado com sucesso!"}


@router.get("/{cpf}")
def get_user(cpf: str):
    """Busca informações de um usuário pelo CPF."""
    user_ref = db.collection("users").document(cpf).get()
    if not user_ref.exists:
        raise HTTPException(status_code=404, detail="Usuário não encontrado.")
    return user_ref.to_dict()

# Atualizar usuário

@router.put("/{user_id}")
async def update_user(user_id: str, user: UserSchema):
    """Atualiza os dados do usuário e modifica o CPF caso necessário, mantendo a senha criptografada"""
    user_ref = db.collection("users").document(user_id)
    user_data = user_ref.get()

    if not user_data.exists:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    # Pega os dados antigos do usuário
    user_db = user_data.to_dict()

    # Mantém a senha antiga caso o usuário não envie um novo password
    password = user_db.get("password")  # Senha existente criptografada
    if hasattr(user, "password") and user.password:  # Se um novo password for enviado
        password = hash_password(user.password)  # Criptografa a nova senha

    # Se o CPF foi alterado, cria um novo documento e exclui o antigo
    if user.cpf != user_id:
        new_user_ref = db.collection("users").document(user.cpf)
        if new_user_ref.get().exists:
            raise HTTPException(status_code=400, detail="CPF já cadastrado para outro usuário")

        # Cria um novo documento com o novo CPF como ID
        new_user_ref.set({
            "user_id": user.cpf,  # Atualiza o user_id com o novo CPF
            "username": user.username,
            "password": password,  # Mantém ou atualiza a senha criptografada
            "cpf": user.cpf,
            "role": user.role,
            "linked_user_id": user.linked_user_id or None
        })

        # Deleta o documento antigo
        user_ref.delete()

        return {"message": "CPF alterado, documento recriado com sucesso"}

    # Atualiza os dados no mesmo documento (se o CPF não foi alterado)
    user_data_dict = user.dict(exclude_unset=True)  # Exclui valores não enviados na requisição
    user_data_dict["password"] = password  # Mantém a senha antiga ou atualiza se enviada

    user_ref.update(user_data_dict)
    return {"message": "Usuário atualizado com sucesso"}


# Deletar usuário
@router.delete("/{user_id}")
async def delete_user(user_id: str):
    user_ref: DocumentReference = db.collection("users").document(user_id)
    user_data = user_ref.get()
    if not user_data.exists:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    user_ref.delete()
    return {"message": "Usuário deletado com sucesso"}
