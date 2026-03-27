import joblib
import numpy as np

model = joblib.load("model.pkl")
le = joblib.load("label_encoder.pkl")

def predict_gesture(features):
    features = np.array(features).reshape(1, -1)

    pred = model.predict(features)
    label = le.inverse_transform(pred)

    return label[0]