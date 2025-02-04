##from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import UserSchema
from google.cloud.firestore import DocumentReference

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from backend.auth import authenticate_user, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES

from backend.schemas import UserCreateSchema, hash_password 

router = APIRouter()

@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    """Realiza login e retorna o token JWT"""
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    token = create_access_token({"sub": user.user_id, "role": user.role}, access_token_expires)
    
    return {"access_token": token, "token_type": "bearer"}

@router.post("/")
def create_user(user_data: UserCreateSchema):
    """Cria um novo usuário com senha criptografada"""
    hashed_password = hash_password(user_data.password)  # Criptografa a senha

    user_ref = db.collection("users").document()
    user_ref.set({
        "user_id": user_ref.id,
        "username": user_data.username,
        "password": hashed_password,  # Salva a senha criptografada
        "cpf": user_data.cpf,
        "role": user_data.role,
        "linked_user_id": user_data.linked_user_id or None  # Certifica-se de que é None se não for enviado
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
########################################################

@router.put("/{user_id}")
async def update_user(user_id: str, user: UserSchema):
    user_ref = db.collection("users").document(user_id)
    user_data = user_ref.get()
    
    if not user_data.exists:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")

    # Verifica se o CPF foi alterado
    if user.cpf != user_id:
        # Cria um novo documento com o novo CPF como ID
        new_user_ref = db.collection("users").document(user.cpf)
        new_user_ref.set(user.dict())

        # Deleta o documento antigo
        user_ref.delete()

        return {"message": "CPF alterado, documento recriado com sucesso"}

    # Atualiza os dados no mesmo documento (se o CPF não foi alterado)
    user_ref.update(user.dict())
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
