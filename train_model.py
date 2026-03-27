import json
import os
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib

# -------- Load dataset --------

DATASET_PATH = r"D:\College\HAckathons\ISLynk\dataset"
X = []
y = []

for file in os.listdir(DATASET_PATH):
    if file.endswith(".json"):
        path = os.path.join(DATASET_PATH, file)

        with open(path, "r") as f:
            data = json.load(f)

            for item in data:
                X.append(item["features"])
                y.append(item["label"])

X = np.array(X)
y = np.array(y)

print("Data shape:", X.shape)
print("Labels:", set(y))

# -------- Encode labels --------

le = LabelEncoder()
y_encoded = le.fit_transform(y)

# -------- Train model --------

model = RandomForestClassifier(n_estimators=100)
model.fit(X, y_encoded)

# -------- Save model --------

joblib.dump(model, "model.pkl")
joblib.dump(le, "label_encoder.pkl")

print("Model trained and saved!")