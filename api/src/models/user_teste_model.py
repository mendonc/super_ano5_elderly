from sqlalchemy import Column, Integer, String
from src.config.config_db import Base  # Certifique-se de importar corretamente o Base

class User(Base):
    __tablename__ = "user_teste"

    id = Column(Integer, primary_key=True, autoincrement=True)  # Definindo a chave primária
    nome = Column(String(45), nullable=False)
    sobrenome = Column(String(45), nullable=False)
