import datetime as _dt

import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

from database import Base

class User(Base):
    __tablename__ = "users"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    username = _sql.Column(_sql.String,unique=True, index=True)
    hashed_password = _sql.Column(_sql.String)

    def verify_password(self, password):
        return _hash.bcrypt.verify(password, self.hashed_password)

