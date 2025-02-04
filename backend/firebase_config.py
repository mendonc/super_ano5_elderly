import firebase_admin
from firebase_admin import credentials, firestore

# Inicializa o Firebase
cred = credentials.Certificate("C:/Users/pltmt/OneDrive/Documentos/APP/health_app_02/backend/firebase-key.json")

firebase_admin.initialize_app(cred)

# Instância do Firestore
db = firestore.client()