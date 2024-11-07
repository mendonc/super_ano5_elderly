"""mensagem da nova version , tipo create_profile_table

Revision ID: 47df0f44f923
Revises: 707b5681f592
Create Date: 2024-10-24 11:08:00.605724

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47df0f44f923'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'profile_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=45), nullable=False),
        sa.Column('idade', sa.Integer(), nullable=False),
        sa.Column('email', sa.String(length=100), nullable=False),
        sa.Column('senha', sa.String(length=100), nullable=False),
    )


def downgrade() -> None:
    pass
