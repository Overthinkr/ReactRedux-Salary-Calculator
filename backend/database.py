import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import sqlalchemy.ext.declarative as _declarative

DATABASE_URL = "sqlite:///./database.db"

engine = _sql.create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = _declarative.declarative_base()