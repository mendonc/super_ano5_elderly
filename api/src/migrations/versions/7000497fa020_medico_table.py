"""mensagem da nova version , tipo create_medico_table

Revision ID: 7000497fa020
Revises: d42eb5a47305
Create Date: 2024-10-24 12:30:43.165370

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7000497fa020'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'medico_table'

def upgrade() -> None:
    op.create_table(
        table_name,,
        sa.Column('pacientes', sa.String(length=200), nullable=False),
    )


def downgrade() -> None:
    pass
