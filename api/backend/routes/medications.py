from fastapi import APIRouter, HTTPException
from backend.database import db
from backend.schemas import MedicationSchema
from google.cloud.firestore import DocumentReference
from firebase_admin import firestore
from backend.schemas import MedicationUpdateSchema  # Importação correta

router = APIRouter()
db = firestore.client()

@router.post("/medications/")
async def create_medication(medication_data: MedicationSchema):
    user_id = medication_data.user_id
    medication_name = medication_data.name.strip().lower()  # Normaliza o nome

    # Verifica se já existe um medicamento com o mesmo nome para esse usuário
    existing_medications = (
        db.collection("medications")
        .where("user_id", "==", user_id)
        .where("name", "==", medication_name)
        .stream()
    )

    if any(existing_medications):  
        raise HTTPException(status_code=400, detail="Esse medicamento já foi cadastrado para esse usuário")

    # Salva no Firestore
    new_medication_ref = db.collection("medications").document()
    new_medication_ref.set(medication_data.dict())

    return {"message": "Medicamento cadastrado com sucesso", "id": new_medication_ref.id}


@router.get("/medications/{user_id}")
def get_medications(user_id: str):
    """Lista os medicamentos de um paciente com os IDs incluídos."""
    meds_ref = db.collection("medications").where("user_id", "==", user_id).stream()
    medications = [{"id": med.id, **med.to_dict()} for med in meds_ref]  # Adiciona o ID ao JSON

    if not medications:
        raise HTTPException(status_code=404, detail="Nenhum medicamento encontrado.")

    return medications


# Atualizar medicamento
@router.put("/medications/{medication_id}")
async def update_medication(medication_id: str, medication_data: MedicationUpdateSchema):
    medication_ref = db.collection("medications").document(medication_id)
    medication_snapshot = medication_ref.get()

    # Verifica se o medicamento existe
    if not medication_snapshot.exists:
        raise HTTPException(status_code=404, detail="Medicamento não encontrado")

    existing_data = medication_snapshot.to_dict()
    updated_data = medication_data.dict(exclude_unset=True)

    # Se estiver tentando alterar o name, verificar duplicação
    if "name" in updated_data:
        user_id = existing_data["user_id"]
        new_name = updated_data["name"].strip().lower()

        # Verifica se já existe outro medicamento com o mesmo nome e user_id
        duplicate_query = (
            db.collection("medications")
            .where("user_id", "==", user_id)
            .where("name", "==", new_name)
            .stream()
        )

        for doc in duplicate_query:
            if doc.id != medication_id:  # Evita que bloqueie a própria edição
                raise HTTPException(status_code=400, detail="Já existe um medicamento com esse nome para esse usuário")

    # Atualiza apenas os campos fornecidos
    medication_ref.update(updated_data)

    return {"message": "Medicamento atualizado com sucesso", "id": medication_id}


# Deletar medicamento
@router.delete("/{medication_id}")
async def delete_medication(medication_id: str):
    medication_ref: DocumentReference = db.collection("medications").document(medication_id)
    medication_data = medication_ref.get()
    if not medication_data.exists:
        raise HTTPException(status_code=404, detail="Medicamento não encontrado")
    medication_ref.delete()
    return {"message": "Medicamento deletado com sucesso"}