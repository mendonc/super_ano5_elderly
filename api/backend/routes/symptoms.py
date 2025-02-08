from fastapi import APIRouter, HTTPException
from backend.database import db
##from backend.schemas import SymptomSchema
from google.cloud.firestore import DocumentReference
from firebase_admin import firestore
from backend.schemas import SymptomSchema
from backend.schemas import SymptomUpdateSchema  # Importação correta

router = APIRouter()
db = firestore.client()

@router.post("/")
async def create_symptom(symptom: SymptomSchema):
    # Verificar se o user_id existe na coleção "users"
    user_ref = db.collection("users").document(symptom.user_id)
    if not user_ref.get().exists:
        raise HTTPException(status_code=400, detail="Usuário não encontrado")

    # Evitar duplicação de sintomas para o mesmo usuário
    symptoms_ref = db.collection("symptoms")
    existing_symptoms = symptoms_ref \
        .where("user_id", "==", symptom.user_id) \
        .where("symptom_type", "==", symptom.symptom_type) \
        .get()

    if len(existing_symptoms) > 0:  # Agora a condição está correta
        raise HTTPException(status_code=400, detail="Sintoma já cadastrado para este usuário")

    # Criar o sintoma
    new_symptom_ref = symptoms_ref.document()

    # Compatibilidade entre Pydantic v1 e v2
    try:
        symptom_data = symptom.model_dump()  # Pydantic v2
    except AttributeError:
        symptom_data = symptom.dict()  # Pydantic v1

    new_symptom_ref.set(symptom_data)

    return {"message": "Sintoma adicionado com sucesso", "id": new_symptom_ref.id}


@router.get("/{user_id}")
def get_symptoms(user_id: str):
    """Lista os sintomas de um paciente."""
    symptoms_ref = db.collection("symptoms").where("user_id", "==", user_id).stream()
    symptoms = [symptom.to_dict() for symptom in symptoms_ref]
    if not symptoms:
        raise HTTPException(status_code=404, detail="Nenhum sintoma encontrado.")
    return symptoms

# Atualizar sintoma
@router.put("/symptoms/{symptom_id}")
async def update_symptom(symptom_id: str, symptom_data: SymptomUpdateSchema):
    symptom_ref = db.collection("symptoms").document(symptom_id)
    symptom_snapshot = symptom_ref.get()

    # Verifica se o sintoma existe
    if not symptom_snapshot.exists:
        raise HTTPException(status_code=404, detail="Sintoma não encontrado")

    existing_data = symptom_snapshot.to_dict()
    updated_data = symptom_data.dict(exclude_unset=True)

    # Se estiver tentando alterar o symptom_type, verificar duplicação
    if "symptom_type" in updated_data:
        user_id = existing_data["user_id"]  # Obtém o user_id do sintoma original
        new_symptom_type = updated_data["symptom_type"]

        # Verifica se já existe outro sintoma com o mesmo nome e user_id
        duplicate_query = (
            db.collection("symptoms")
            .where("user_id", "==", user_id)
            .where("symptom_type", "==", new_symptom_type)
            .stream()
        )

        for doc in duplicate_query:
            if doc.id != symptom_id:  # Garante que não é o próprio sintoma sendo editado
                raise HTTPException(status_code=400, detail="Já existe um sintoma com esse nome para esse usuário")

    # Atualiza apenas os campos fornecidos
    symptom_ref.update(updated_data)

    return {"message": "Sintoma atualizado com sucesso", "id": symptom_id}

# Deletar sintoma
@router.delete("/{symptom_id}")
async def delete_symptom(symptom_id: str):
    symptom_ref: DocumentReference = db.collection("symptoms").document(symptom_id)
    symptom_data = symptom_ref.get()
    if not symptom_data.exists:
        raise HTTPException(status_code=404, detail="Sintoma não encontrado")
    symptom_ref.delete()
    return {"message": "Sintoma deletado com sucesso"}