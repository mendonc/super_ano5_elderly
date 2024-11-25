"""profile_has_illnesses

Revision ID: 575feebcbdee
Revises: bb925b82995b
Create Date: 2024-11-18 10:04:29.442493

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '575feebcbdee'
down_revision = 'bb925b82995b'
branch_labels = None
depends_on = None

table_name = 'profile_has_illnesses'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('profile_table_id', sa.Integer(), sa.ForeignKey('profile_table.id'), primary_key=True),
        sa.Column('illnesses_table_id', sa.Integer(), sa.ForeignKey('illnesses_table.id'), primary_key=True),
    )

def downgrade() -> None:
    pass
