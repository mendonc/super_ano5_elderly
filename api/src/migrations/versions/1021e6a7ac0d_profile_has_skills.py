"""profile_has_skills

Revision ID: 1021e6a7ac0d
Revises: d04d2a1fccd3
Create Date: 2024-11-18 09:55:16.569350

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1021e6a7ac0d'
down_revision = 'd04d2a1fccd3'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'profile_has_skills',
        sa.Column('profile_table_id', sa.Integer(), sa.ForeignKey('profile_table.id'), primary_key=True),
        sa.Column('skills_table_id', sa.Integer(), sa.ForeignKey('skills_table.id'), primary_key=True),
    )

def downgrade() -> None:
    pass
