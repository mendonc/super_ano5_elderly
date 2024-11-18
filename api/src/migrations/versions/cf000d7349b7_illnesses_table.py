"""illnesses_table

Revision ID: cf000d7349b7
Revises: a48a01beb6e9
Create Date: 2024-11-18 09:46:22.266251

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf000d7349b7'
down_revision = 'a48a01beb6e9'
branch_labels = None
depends_on = None

table_name = 'illnesses_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=255), nullable=False),
        sa.Column('descricao', sa.Text(), nullable=False),
        sa.Column('causas', sa.Text()),
        sa.Column('sintomas', sa.Text()),
        sa.Column('diagnostico', sa.Text()),
        sa.Column('tratamento', sa.Text()),
        sa.Column('prevencao', sa.Text()),
        sa.Column('gravidade', sa.String(length=50)),  # Ex.: leve, moderada, severa
        sa.Column('complicacoes', sa.Text()),  # Possíveis complicações
        sa.Column('grupo_risco', sa.Text()),  # Grupos mais vulneráveis
        sa.Column('prognostico', sa.Text()),  # Expectativa de recuperação
        sa.Column('tempo_recuperacao', sa.String(length=100)),  # Tempo típico de recuperação
        sa.Column('observacoes', sa.Text()),  # Outras informações relevantes
    )

def downgrade() -> None:
    pass
