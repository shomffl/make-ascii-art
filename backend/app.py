import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/home')
def home():
    return {'time': time.time()}

if __name__ == '__main__':
    uvicorn.run(app)
