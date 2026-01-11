from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScoreRequest(BaseModel):
    prompt: str
    model: str

@app.post("/score")
def score(req: ScoreRequest):
    # ADD SCORE CALCULATION AND PROMPT OUTPUT HERE
    score = 0.42
    output = f"Processed with {req.model}"

    return {
        "score": score,
        "output": output,
    }
