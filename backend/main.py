import fastapi as _fastapi
import fastapi.security as _security

import sqlalchemy.orm as _orm

import services as _services, schemas as _schemas, models
from database import engine

models.Base.metadata.create_all(bind=engine)

app = _fastapi.FastAPI()

@app.post("/api/users")
async def create_user(user: _schemas.UserCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    db_user = await _services.get_user_by_username(db, username=user.username)

    if db_user:
        raise _fastapi.HTTPException(status_code=400, detail="Username already exists")
    
   
    user = await _services.create_user(user, db)

    return await _services.create_token(user)

@app.post("/api/token")
async def generate_token(form_data: _security.OAuth2PasswordRequestForm = _fastapi.Depends(), db: _orm.Session = _fastapi.Depends(_services.get_db)):
    user = await _services.authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise _fastapi.HTTPException(status_code=401, detail="Invalid username or password")
    
    return await _services.create_token(user)

@app.get("/api/users/me", response_model=_schemas.User)
async def get_user(user: _schemas.User = _fastapi.Depends(_services.get_current_user)):
    return user

@app.get("/api")
async def root():
    return {"message": "Hello Auth"}