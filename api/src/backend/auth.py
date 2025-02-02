from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
from backend.schemas import UserSchema
from backend.database import get_user_by_username, get_user_by_id  # Supondo que existam essas funções
from passlib.context import CryptContext

# Configurações do JWT
SECRET_KEY = "sua-chave-secreta"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Configuração para hash de senha
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Definição do OAuth2
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(plain_password, hashed_password):
    """Verifica se a senha digitada bate com a armazenada"""
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    """Criptografa a senha antes de salvar"""
    return pwd_context.hash(password)


def authenticate_user(username: str, password: str):
    """Verifica se o usuário existe e se a senha está correta"""
    user = get_user_by_username(username)
    if not user or not verify_password(password, user.password):
        return None
    return user


def create_access_token(data: dict, expires_delta: timedelta = None):
    """Gera um token JWT válido"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def get_current_user(token: str = Depends(oauth2_scheme)):
    """Decodifica e valida o token JWT"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Token inválido")
        return get_user_by_id(user_id)
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido")
