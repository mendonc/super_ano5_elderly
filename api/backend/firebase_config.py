import firebase_admin
from firebase_admin import credentials, firestore
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Obtém o diretório do script atual
cred = credentials.Certificate(os.path.join(BASE_DIR, "firebase-key.json"))  # Usa o caminho correto


firebase_admin.initialize_app(cred)

# Instância do Firestore
db = firestore.client()

