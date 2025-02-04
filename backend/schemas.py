from pydantic import BaseModel
from typing import List, Optional

class UserSchema(BaseModel):
    username: str
    cpf: str
    role: str  # 'elderly', 'doctor', 'guardian'
    linked_user_id: Optional[str] = None

class MedicationSchema(BaseModel):
    name: str
    dosage: str
    frequency: str
    user_id: str  # ID do paciente

class SymptomSchema(BaseModel):
    description: str
    severity: str
    user_id: str  # ID do paciente
