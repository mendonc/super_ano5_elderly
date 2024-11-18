"""user_has_medicines

Revision ID: bb925b82995b
Revises: 1021e6a7ac0d
Create Date: 2024-11-18 09:59:58.803383

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb925b82995b'
down_revision = '1021e6a7ac0d'
branch_labels = None
depends_on = None

table_name = 'usuario_has_medicines'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('usuario_table_id', sa.Integer(), sa.ForeignKey('usuario_table.id'), primary_key=True),
        sa.Column('medicines_table_id', sa.Integer(), sa.ForeignKey('medicines_table.id'), primary_key=True),
    )

def downgrade() -> None:
    pass
