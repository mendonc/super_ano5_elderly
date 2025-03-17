from fastapi import Depends, HTTPException, status
from jose import JWTError, jwt
from datetime import datetime, timedelta
from backend.schemas import UserSchema
from backend.database import get_user_by_username, get_user_by_id  # Supondo que existam essas funções
from fastapi.security import OAuth2PasswordBearer
from backend.firebase_config import db 
from backend.utils.security import verify_password, hash_password  # Importa corretamente!

# Configurações do JWT
SECRET_KEY = "sua-chave-secreta"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Definição do OAuth2
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def authenticate_user(username: str, password: str):
    """Autentica o usuário comparando a senha digitada com o hash salvo no banco."""
    
    print(f"🔍 Buscando usuário com CPF: {username}")

    # Busca o usuário pelo CPF no Firestore
    user_query = db.collection("users").where("cpf", "==", username).limit(1).stream()
    
    user_data = None
    for doc in user_query:
        user_data = doc.to_dict()

    if not user_data:
        print("❌ Erro: Usuário não encontrado no banco!")
        return None  # Usuário não existe

    stored_hashed_password = user_data.get("password")
    
    if not stored_hashed_password:
        print("❌ Erro: Senha não encontrada no banco!")
        return None  # Usuário sem senha registrada

    print(f"🔐 Senha fornecida pelo usuário: {password}")
    print(f"🔐 Hash armazenado no banco: {stored_hashed_password}")

    # Verifica se a senha informada corresponde ao hash
    if verify_password(password, stored_hashed_password):  
        print("✅ Senha verificada com sucesso!")
        return user_data  # Retorna os dados do usuário autenticado

    print("❌ Erro: Senha inválida!")
    return None  # Senha incorreta

def create_access_token(data: dict, expires_delta: timedelta = None):
    """Gera um token JWT válido"""
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta if expires_delta else timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
def decode_access_token(token: str):
    """Decodifica o token JWT"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None
