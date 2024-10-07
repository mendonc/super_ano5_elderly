from sqlalchemy import select
from ..models import user_teste_model
from sqlalchemy.ext.asyncio import AsyncSession

model = user_teste_model.User

async def get_all_users(db: AsyncSession):
    response = await db.execute(select(model))
    return response.scalars().all()