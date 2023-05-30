from datetime import timedelta, datetime
from fastapi import Depends, FastAPI, HTTPException,status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from typing import Union

from pydantic import BaseModel

from dotenv import load_dotenv
from os import getenv

load_dotenv()
app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

fake_users_db = {"admin": {"username": "admin", "password": "Admin&8181"}}
fake_sessions={}
SECRET_KEY = getenv("SECRET_KEY")
ALGORITHM = getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))


class User(BaseModel):
    username: str


class UserInDB(User):
    password: str


@app.get("/hello")
def hello_world():
    return "Hello World"


@app.post("/sortnum", response_model=list[int])
def sort_num(nums: list[int]):
    return sorted(nums)


def fake_hash_password(password: str):
    return password


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encode_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encode_jwt


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    if not hashed_password == user.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    response=JSONResponse(content={"access_token": access_token, "token_type": "bearer"})

    payload=jwt.decode(access_token,SECRET_KEY,algorithms=ALGORITHM)
    exp=payload.get("exp")

    fake_sessions.update({access_token:exp})
    return response


@app.get("/is_auth")
def is_auth(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        fake_sessions.get(token)
        jwt.decode(token,SECRET_KEY,algorithms=ALGORITHM)
    except:
        raise credentials_exception
    return True
    
