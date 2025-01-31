import firebase_admin
from firebase_admin import credentials, firestore

# Inicializa o Firebase
cred = credentials.Certificate("C:/Users/acsas/super/projeto/aplicativo-v1/health_app_01/backend/firebase-key.json")

firebase_admin.initialize_app(cred)

# Instância do Firestore
db = firestore.client()

