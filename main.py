from fastapi import FastAPI, WebSocket
from nlp import process_tokens
from tts import text_to_speech
from predict import predict_gesture

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    
    while True:
        data = await websocket.receive_json()
        
        features = data.get("features", [])
        
        if not features:
            continue
            
        gesture = predict_gesture(features)
        
        print("Predicted:", gesture)

        sentence = process_tokens(tokens)
        audio = text_to_speech(sentence)
        
        await websocket.send_json({
            "text": sentence,
            "audio": audio
        })
