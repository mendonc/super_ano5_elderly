"""mensagem da nova version , tipo create_profile_table

Revision ID: adc93f6c99a8
Revises: 47df0f44f923
Create Date: 2024-10-24 12:22:19.517236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'adc93f6c99a8'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'profile_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=100), nullable=False),
        sa.Column('data_nascimento', sa.Date(), nullable=False),
        sa.Column('sexo', sa.String(length=10)),
        sa.Column('telefone', sa.String(length=15)),
        sa.Column('email', sa.String(length=100), unique=True),
        sa.Column('endereco', sa.String(length=200)),
        sa.Column('cidade', sa.String(length=100)),
        sa.Column('estado', sa.String(length=100)),
        sa.Column('cep', sa.String(length=20)),  
    )


def downgrade() -> None:
    pass
