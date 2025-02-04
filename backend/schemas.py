from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum
from backend.permissions import Profile  # Importamos a classe Profile

from argon2 import PasswordHasher

# Inicializa o PasswordHasher
ph = PasswordHasher()

class UserCreateSchema(BaseModel):
    username: str
    password: str  # Apenas para entrada, não será retornado
    cpf: str = Field(..., pattern=r"^\d{11}$")
    role: str  # 'elderly', 'doctor', 'guardian'
    linked_user_id: Optional[str] = None  # Agora está corretamente definido

def hash_password(password: str) -> str:
    """Gera um hash seguro para a senha usando argon2"""
    return ph.hash(password)

class UserSchema(BaseModel):
    user_id: str
    username: str
    cpf: str = Field(..., pattern=r"^\d{11}$")  # Valida CPF com 11 dígitos
    role: str  # 'elderly', 'doctor', 'guardian'
    linked_user_id: Optional[str] = None

    @property
    def profile(self):
        return Profile(self.role)  # Retorna o perfil do usuário


class FrequencyEnum(str, Enum):
    once_a_day = "1x ao dia"
    twice_a_day = "2x ao dia"
    three_times_a_day = "3x ao dia"

class MedicationSchema(BaseModel):
    name: str
    dosage: str
    frequency: FrequencyEnum  # Usa Enum para evitar valores inválidos
    user_id: str  # ID do paciente

class MedicationUpdateSchema(BaseModel):
    name: Optional[str] = None  # Pode ser atualizado ou não
    dosage: Optional[str] = None
    frequency: Optional[FrequencyEnum] = None

class SymptomSchema(BaseModel):
    symptom_type: str  # Nome do sintoma
    severity: int = Field(..., ge=1, le=10)  # Garante valores de 1 a 10
    user_id: str  # ID do paciente

class SymptomUpdateSchema(BaseModel):
    symptom_type: Optional[str] = None
    severity: Optional[int] = Field(None, ge=1, le=10)



