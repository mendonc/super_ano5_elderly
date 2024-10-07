from fastapi import APIRouter, Depends
from ..middleware.utils_db import get_session
from sqlalchemy.ext.asyncio import AsyncSession
from ..schemas import user_teste_schema
from ..controllers import user_controller

router = APIRouter(tags=["teste"], prefix="/teste")

@router.get("/get_all_user_teste", response_model=list[user_teste_schema.UserResponse])
async def get_all_users(db: AsyncSession = Depends(get_session)):
    """
    Get all users from the database
    """
    return await user_controller.get_all_users(db)