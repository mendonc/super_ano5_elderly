##from backend.database import db  # Certifique-se de importar o Firestore client corretamente
from backend.firebase_config import db  # Agora pega db sem conflitos

def get_user_by_username(username: str):
    """Busca um usuário pelo nome de usuário no Firebase Firestore"""
    users_ref = db.collection("users")  # Acessa a coleção "users"
    query = users_ref.where("username", "==", username).limit(1).stream()

    for doc in query:  
        return doc.to_dict()  # Retorna os dados do usuário como um dicionário

    return None  # Retorna None se o usuário não for encontrado


def get_user_by_id(user_id: str):
    """Busca um usuário pelo ID no Firebase Firestore"""
    user_ref = db.collection("users").document(user_id).get()

    if user_ref.exists:
        return user_ref.to_dict()  # Retorna os dados do usuário como um dicionário

    return None  # Retorna None se o usuário não for encontrado


