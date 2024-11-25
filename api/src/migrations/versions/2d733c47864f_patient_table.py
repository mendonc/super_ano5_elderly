"""patient_table

Revision ID: 2d733c47864f
Revises: 575feebcbdee
Create Date: 2024-11-25 13:44:35.966601

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2d733c47864f'
down_revision = '575feebcbdee'
branch_labels = None
depends_on = None

table_name = 'patient_table'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('medicamentos', sa.String(length=200), nullable=False),
        sa.Column('sintomas', sa.String(length=200), nullable=False),
    )

def downgrade() -> None:
    pass
