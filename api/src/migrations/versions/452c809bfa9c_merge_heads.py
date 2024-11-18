"""Merge heads

Revision ID: 452c809bfa9c
Revises: 47df0f44f923, 7000497fa020, adc93f6c99a8, d42eb5a47305
Create Date: 2024-11-18 09:26:29.781763

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '452c809bfa9c'
down_revision = ('47df0f44f923', '7000497fa020', 'adc93f6c99a8', 'd42eb5a47305')
branch_labels = None
depends_on = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
