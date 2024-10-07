from pydantic import BaseModel
from typing import Optional

class UserResponse(BaseModel):
    id: int
    nome: Optional[str]
    sobrenome: Optional[str]