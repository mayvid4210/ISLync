from fastapi import FastAPI, WebSocket
from nlp import process_tokens
from tts import text_to_speech

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    while True:
        data = await websocket.receive_json()
        tokens = data.get("tokens", [])
        
        print("Received tokens:", tokens)

        sentence = process_tokens(tokens)
        audio = text_to_speech(sentence)
        
        await websocket.send_json({
            "text": sentence,
            "audio": audio
        })