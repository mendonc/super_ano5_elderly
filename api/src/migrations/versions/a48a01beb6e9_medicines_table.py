"""medicines_table

Revision ID: a48a01beb6e9
Revises: 452c809bfa9c
Create Date: 2024-11-18 09:35:24.426965

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a48a01beb6e9'
down_revision = '452c809bfa9c'
branch_labels = None
depends_on = None

table_name = 'medicines_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=255), nullable=False),
        sa.Column('nome_generico', sa.String(length=255)),
        sa.Column('dosagem', sa.String(length=50)),
        sa.Column('data_validade', sa.Date()),
        sa.Column('indicacoes', sa.Text()),
        sa.Column('contraindicacoes', sa.Text()),
        sa.Column('efeitos_colaterais', sa.Text()),
        sa.Column('precaucoes', sa.Text()),
        sa.Column('receita_necessaria', sa.Boolean(), default=False),
        sa.Column('observacoes', sa.Text()),
    )

def downgrade() -> None:
    pass

