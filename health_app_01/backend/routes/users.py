
##from backend.models import User

from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import UserSchema

router = APIRouter()

@router.post("/")
def create_user(user: UserSchema):
    """Cria um usuário no banco."""
    user_data = user.dict()
    user_ref = db.collection("users").document(user.cpf)
    if user_ref.get().exists:
        raise HTTPException(status_code=400, detail="Usuário já existe.")
    user_ref.set(user_data)
    return {"message": "Usuário criado com sucesso!", "cpf": user.cpf}

@router.get("/{cpf}")
def get_user(cpf: str):
    """Busca informações de um usuário pelo CPF."""
    user_ref = db.collection("users").document(cpf).get()
    if not user_ref.exists:
        raise HTTPException(status_code=404, detail="Usuário não encontrado.")
    return user_ref.to_dict()
