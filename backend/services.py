import jwt as _jwt
import database as _database
import sqlalchemy.orm as _orm
import database as _database, models as _models, schemas as _schemas
import passlib.hash as _hash
import fastapi as _fastapi
import fastapi.security as _security

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")

SECRET_KEY = "secret"

def create_database():
    _database.Base.metadata.create_all(bind=_database.engine)

def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_user_by_username(db: _orm.Session, username: str):
    return db.query(_models.User).filter(_models.User.username == username).first()

async def create_user(user: _schemas.UserCreate, db = _orm.session):
    user_obj = _models.User(username=user.username, hashed_password=_hash.bcrypt.hash(user.hashed_password))
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj

async def authenticate_user(username: str, password: str, db: _orm.Session):
    user = await get_user_by_username(db, username)

    if not user:
        return False
    
    if not user.verify_password(password):
        return False
    
    return user

async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)

    token = _jwt.encode(user_obj.dict(), SECRET_KEY)

    return dict(access_token=token, token_type="bearer")

async def get_current_user(db: _orm.Session = _fastapi.Depends(get_db),token: str = _fastapi.Depends(oauth2schema)):
    try:
        payload = _jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])

    except:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid username or password")
    
    return _schemas.User.from_orm(user)