from fastapi import FastAPI
from backend.routes import users, medications, symptoms
from fastapi.middleware.cors import CORSMiddleware  # Importe o middleware CORS

# Criar a instância do FastAPI
app = FastAPI()

# Adicionar o middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens (em produção, substitua "*" pelo endereço do front-end)
    #allow_origins=origins,  # Permite apenas os endereços especificados
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Registra as rotas
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(medications.router, prefix="/medications", tags=["Medications"])
app.include_router(symptoms.router, prefix="/symptoms", tags=["Symptoms"])

@app.get("/")
def root():
    return {"message": "Health Assistant API is running!"}
