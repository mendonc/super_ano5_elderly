from fastapi import Depends, HTTPException, status
from jose import JWTError, jwt
from datetime import datetime, timedelta
from backend.schemas import UserSchema
from backend.database import get_user_by_username, get_user_by_id  # Supondo que existam essas funções
from argon2 import PasswordHasher
from fastapi.security import OAuth2PasswordBearer

from backend.firebase_config import db 

# Configurações do JWT
SECRET_KEY = "sua-chave-secreta"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Inicializa o PasswordHasher
ph = PasswordHasher()

# Definição do OAuth2
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifica se a senha fornecida corresponde ao hash armazenado"""
    try:
        return ph.verify(hashed_password, plain_password)
    except:
        return False

def get_password_hash(password: str) -> str:
    """Criptografa a senha antes de salvar"""
    return ph.hash(password)


#################################################


def authenticate_user(username: str, password: str):
    user_ref = db.collection("users").where("username", "==", username).limit(1).stream()

    for doc in user_ref:
        user = doc.to_dict()
        if verify_password(password, user["password"]):  # Compara senha digitada com hash
            return user
    return None

def create_access_token(data: dict, expires_delta: timedelta = None):
    """Gera um token JWT válido"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None
    

# Exemplo de uso da função authenticate_user
def example_usage():
    user = authenticate_user("example_username", "example_password")
    if user:
        print(f"User ID: {user.get('user_id')}")
    else:
        print("Authentication failed")
    

# Chamada para testar a função example_usage
if __name__ == "__main__":
    example_usage()