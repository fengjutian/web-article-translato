from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from utils.translator import translate_article

app = FastAPI()

# 允许跨域
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/translate")
async def translate(data: dict = Body(...)):
    url = data.get("url")
    result = translate_article(url)
    return {"translation": result}
