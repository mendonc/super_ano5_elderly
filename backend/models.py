from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date

class Medication(BaseModel):
    user_id: str  # Agora o medicamento pertence a um usuário
    name: str
    dosage: str
    frequency: int = Field(..., gt=0, description="Número de vezes por dia")  # Garante que seja um número positivo
    times: List[str]

class Symptom(BaseModel):
    user_id: str  # Agora o sintoma pertence a um usuário
    symptom_type: str  # Adicionando o campo faltante
    severity: int = Field(..., ge=1, le=10, description="Severidade de 1 a 10")  # Validação da severidade
    date: date  # Agora usa um formato de data válido

class User(BaseModel):
    user_id: str  # Substituí username por user_id para evitar duplicações
    role: str  # "elderly", "guardian", or "doctor"
    linked_user_id: Optional[str] = None

