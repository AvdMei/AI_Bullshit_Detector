import os
import requests
from fastapi import FastAPI
from pydantic import BaseModel

HF_TOKEN = os.environ["HF_TOKEN"]
MODEL_ID = "your-model-name"  # e.g. meta-llama/Llama-2-7b-chat-hf

app = FastAPI()

class Req(BaseModel):
    prompt: str

@app.post("/score")
def score(req: Req):
    response = requests.post(
        f"https://api-inference.huggingface.co/models/{MODEL_ID}",
        headers={
            "Authorization": f"Bearer {HF_TOKEN}",
            "Content-Type": "application/json",
        },
        json={"inputs": req.prompt},
        timeout=60,
    )

    return {
        "output": response.json()
    }
