from fastapi import FastAPI
from backend.routes import users, medications, symptoms

app = FastAPI()

# Registra as rotas
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(medications.router, prefix="/medications", tags=["Medications"])
app.include_router(symptoms.router, prefix="/symptoms", tags=["Symptoms"])

@app.get("/")
def root():
    return {"message": "Health Assistant API is running!"}