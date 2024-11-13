from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict
import random
from responses import bot_responses

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/chat")
async def chat(message: Message):
    response = random.choice(bot_responses)
    return {"response": response}