"""Create user_teste

Revision ID: 707b5681f592
Revises: 
Create Date: 2024-10-06 22:28:50.840887

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '707b5681f592'
down_revision = None
branch_labels = None
depends_on = None


table_name = 'user_teste'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('nome', sa.String(length=45), nullable=False),
        sa.Column('sobrenome', sa.String(length=45), nullable=False),
    )

def downgrade() -> None:
    op.drop_table(table_name)