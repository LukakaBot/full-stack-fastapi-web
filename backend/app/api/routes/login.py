import fastapi
from fastapi import APIRouter
from pydantic import BaseModel
from faker import Faker


router = APIRouter(tags=["login"])


fake = Faker()


class UserFormData(BaseModel):
    username: str
    password: str


@router.post("/user/account/token")
def get_access_token(form_data: UserFormData):
    # if form_data.username != "admin" or form_data.password != "123":
    #     raise fastapi.HTTPException(status_code=500, detail="用户名或密码错误")

    return {
        "username": form_data.username,
        "realName": fake.name(),
        "phone": fake.phone_number(),
        "age": fake.random_int(min=18, max=60),
        "sex": fake.random_element(elements=("男", "女")),
        "token": fake.uuid4(),
    }
