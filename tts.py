from gtts import gTTS
import base64
from io import BytesIO

def text_to_speech(text):
    tts = gTTS(text=text, lang='en')
    audio_fp = BytesIO()
    tts.write_to_fp(audio_fp)
    audio_fp.seek(0)
    
    return base64.b64encode(audio_fp.read()).decode("utf-8")