from pydantic import BaseModel
from typing import List, Optional

class Medication(BaseModel):
    name: str
    dosage: str
    frequency: str
    times: List[str]

class Symptom(BaseModel):
    name: str
    severity: int
    date: str

class User(BaseModel):
    username: str
    role: str  # "elderly", "guardian", or "doctor"
    linked_user_id: Optional[str] = None
