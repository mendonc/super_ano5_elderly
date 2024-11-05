"""mensagem da nova version , tipo create_guardian_table

Revision ID: d42eb5a47305
Revises: adc93f6c99a8
Create Date: 2024-10-24 12:28:20.664767

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd42eb5a47305'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'guardiao_table'

def upgrade() -> None:
    op.create_table(
        table_name,,
        sa.Column('IdososMonitorados', sa.String(length=200), nullable=False),
    )


def downgrade() -> None:
    pass
