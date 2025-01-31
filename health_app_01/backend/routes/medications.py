##from backend.models import Medication

from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import MedicationSchema

router = APIRouter()

@router.post("/")
def add_medication(medication: MedicationSchema):
    """Adiciona um medicamento para um paciente."""
    medication_data = medication.dict()
    db.collection("medications").add(medication_data)
    return {"message": "Medicamento adicionado com sucesso!"}

@router.get("/{user_id}")
def get_medications(user_id: str):
    """Lista os medicamentos de um paciente."""
    meds_ref = db.collection("medications").where("user_id", "==", user_id).stream()
    medications = [med.to_dict() for med in meds_ref]
    if not medications:
        raise HTTPException(status_code=404, detail="Nenhum medicamento encontrado.")
    return medications
