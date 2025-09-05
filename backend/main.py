from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from utils.translator import translate_article

app = FastAPI()

# Enhanced CORS configuration
origins = [  # Change 'oorigins' to 'origins' to match the usage below
    "http://localhost:5173",  # Explicitly include your frontend URL
    "http://127.0.0.1:5173",  # Also include the IP address version
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/translate")
async def translate(data: dict = Body(...)):
    url = data.get("url")
    result = translate_article(url)
    return {"translation": result}

@app.get("/")
async def root():
    return {"message": "Hello World"}
