##from backend.models import Symptom

from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import SymptomSchema

router = APIRouter()

@router.post("/")
def add_symptom(symptom: SymptomSchema):
    """Adiciona um sintoma para um paciente."""
    symptom_data = symptom.dict()
    db.collection("symptoms").add(symptom_data)
    return {"message": "Sintoma adicionado com sucesso!"}

@router.get("/{user_id}")
def get_symptoms(user_id: str):
    """Lista os sintomas de um paciente."""
    symptoms_ref = db.collection("symptoms").where("user_id", "==", user_id).stream()
    symptoms = [symptom.to_dict() for symptom in symptoms_ref]
    if not symptoms:
        raise HTTPException(status_code=404, detail="Nenhum sintoma encontrado.")
    return symptoms
