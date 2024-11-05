"""mensagem da nova version , tipo create_user_table

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

table_name = 'usuario_table'

def upgrade() -> None:
    op.create_table(
        table_name,,
        sa.Column('medicamentos', sa.String(length=200), nullable=False),
        sa.Column('sintomas', sa.String(length=200), nullable=False),
    )


def downgrade() -> None:
    pass
