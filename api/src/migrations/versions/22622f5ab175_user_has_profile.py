"""user_has_profile

Revision ID: 22622f5ab175
Revises: 2d733c47864f
Create Date: 2024-11-25 14:38:45.911716

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '22622f5ab175'
down_revision = '2d733c47864f'
branch_labels = None
depends_on = None

table_name = 'user_has_profile'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('user_table_id', sa.Integer(), sa.ForeignKey('user_table.id'), primary_key=True),
        sa.Column('profile_table_id', sa.Integer(), sa.ForeignKey('profile_table.id'), primary_key=True),
    )

def downgrade() -> None:
    pass
