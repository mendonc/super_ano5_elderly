from backend.database import db

def check_access(user_id: str, target_user_id: str):
    """Verifica se o usuário tem permissão para acessar os dados de outro usuário."""
    user_ref = db.collection("users").document(user_id).get()
    if not user_ref.exists:
        return False
    user_data = user_ref.to_dict()
    if user_data["role"] == "doctor" or user_data["role"] == "guardian":
        return user_data["linked_user_id"] == target_user_id
    return user_id == target_user_id
