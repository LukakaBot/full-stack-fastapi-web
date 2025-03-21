import fastapi
from fastapi import APIRouter

router = APIRouter(tags=["login"])

class UserFormData:
    username: str
    password: str


@router.post("/login/access-token")
def get_access_token(form_data: UserFormData):
    if form_data.username != "admin" or form_data.password != "123":
        raise fastapi.HTTPException(status_code=500, detail="用户名或密码错误")
    return {
        "username": "zs",
        "realName": "张三",
        "phone": "13800000001",
        "age": 29,
    }
