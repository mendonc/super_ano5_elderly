"""skills_table

Revision ID: d04d2a1fccd3
Revises: cf000d7349b7
Create Date: 2024-11-18 09:52:19.885353

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd04d2a1fccd3'
down_revision = 'cf000d7349b7'
branch_labels = None
depends_on = None

table_name = 'skills_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=100), nullable=False),  # Nome da funcionalidade
        sa.Column('descricao', sa.Text()),  # Descrição da funcionalidade
        sa.Column('ativa', sa.Boolean(), default=True),  # Status se a funcionalidade está ativa ou não
        sa.Column('categoria', sa.String(length=100)),  # Categoria ou tipo da funcionalidade
    )

def downgrade() -> None:
    pass
