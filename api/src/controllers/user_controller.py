from ..repository import user_repository
from sqlalchemy.ext.asyncio import AsyncSession



async def get_all_users(db: AsyncSession):
    try:
        return await user_repository.get_all_users(db)
    except Exception as ex:
        raise ex