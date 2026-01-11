from fastapi import APIRouter

router = APIRouter(prefix="/predict")

@router.post("")
def predict(payload: dict):
    return {
        "received": payload,
        "result": "backend working"
    }
