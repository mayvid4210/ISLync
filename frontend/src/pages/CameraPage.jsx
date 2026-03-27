// src/pages/CameraPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, Video, VideoOff, Volume2, Camera } from "lucide-react";

const CameraPage = ({ setCurrentPage }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [detectedText, setDetectedText] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);

  const gestures = [
    { text: "Hello! How are you?", confidence: 0.95 },
    { text: "Thank you very much", confidence: 0.92 },
    { text: "I need help please", confidence: 0.88 },
    { text: "Yes, I understand", confidence: 0.91 },
    { text: "Nice to meet you", confidence: 0.89 },
    { text: "Good morning", confidence: 0.93 },
    { text: "What is your name?", confidence: 0.87 },
  ];

  const startCamera = async () => {
    setCameraError("");
    try {
      // Request camera with specific constraints
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
        },
      });

      if (videoRef.current) {
        // Important: Set srcObject before playing
        videoRef.current.srcObject = stream;
        streamRef.current = stream;

        // Wait for video to be ready
        const startCamera = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: true,
            });

            videoRef.current.srcObject = stream;
            streamRef.current = stream;

            await videoRef.current.play();

            setIsCameraActive(true);
            startGestureDetection();
          } catch (err) {
            console.error(err);
            setCameraError("Unable to access camera");
          }
        };
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      if (err.name === "NotAllowedError") {
        setCameraError("Camera access denied. Please allow camera access.");
      } else if (err.name === "NotFoundError") {
        setCameraError("No camera found on your device.");
      } else {
        setCameraError("Unable to access camera. Please check permissions.");
      }
    }
  };

  const stopCamera = () => {
    // Clear detection interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Stop all camera tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
    }

    // Clear video element
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsCameraActive(false);
    setDetectedText("");
    setConfidence(0);
    setIsDetecting(false);
    setCameraError("");
  };

  const startGestureDetection = () => {
    setIsDetecting(true);
    let index = 0;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!streamRef.current) {
        clearInterval(intervalRef.current);
        return;
      }

      const gesture = gestures[index % gestures.length];
      setDetectedText(gesture.text);
      setConfidence(gesture.confidence * 100);

      // Speak the detected text
      const utterance = new SpeechSynthesisUtterance(gesture.text);
      utterance.lang = "en-IN";
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);

      index++;
    }, 5000);
  };

  const speakText = () => {
    if (detectedText) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(detectedText);
      utterance.lang = "en-IN";
      speechSynthesis.speak(utterance);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      // Cancel any ongoing speech
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <button
          onClick={() => setCurrentPage("landing")}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Sign Language to
            <span className="text-primary-600"> Speech</span>
          </h1>
          <p className="text-xl text-gray-600">
            Show your hand signs to the camera and get instant text & speech
            output
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Camera Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video bg-gray-900">
              {cameraError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <Camera size={48} className="mb-4 text-red-400" />
                  <p className="text-red-400 mb-2">Camera Error</p>
                  <p className="text-gray-400 text-sm">{cameraError}</p>
                </div>
              ) : (
                <>
                  {/* ALWAYS render video */}
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />

                  {/* Show overlay when camera is OFF */}
                  {!isCameraActive && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                      <p>Camera inactive</p>
                      <p className="text-sm mt-2">Click "Start Camera"</p>
                    </div>
                  )}

                  {/* Detection banner */}
                  {isDetecting && (
                    <div className="absolute top-4 left-4 right-4 bg-green-500/90 text-white px-4 py-2 rounded-lg animate-pulse text-center font-semibold">
                      🔍 Monitoring for gestures...
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="p-6 flex justify-center gap-4">
              {!isCameraActive ? (
                <button
                  onClick={startCamera}
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  disabled={!!cameraError}
                >
                  <Video size={20} /> Start Camera
                </button>
              ) : (
                <button
                  onClick={stopCamera}
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <VideoOff size={20} /> Stop Camera
                </button>
              )}
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Translation Output
              </h3>
              {detectedText ? (
                <div className="space-y-6">
                  <div className="bg-primary-50 rounded-xl p-6">
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                      <span className="text-2xl">🤟</span>
                      Detected Sign:
                    </p>
                    <p className="text-2xl font-bold text-primary-900 mt-2">
                      {detectedText}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <p className="text-gray-600 mb-2">Confidence Level:</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 rounded-full h-3 transition-all duration-500"
                          style={{ width: `${confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-lg font-semibold text-green-700">
                        {Math.round(confidence)}%
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={speakText}
                    className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    <Volume2 size={18} /> Speak Again
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <Camera size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="font-medium">No gesture detected yet</p>
                  <p className="text-sm mt-2">
                    Start camera and show ISL gestures
                  </p>
                  {!isCameraActive && (
                    <button
                      onClick={startCamera}
                      className="mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Click here to start camera
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Tips Card */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                💡 Tips for best results:
              </h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-center gap-2">
                  • Make sure you're in a well-lit area
                </li>
                <li className="flex items-center gap-2">
                  • Position your hand clearly in frame
                </li>
                <li className="flex items-center gap-2">
                  • Make gestures slowly and deliberately
                </li>
                <li className="flex items-center gap-2">
                  • Keep your hand away from your face
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
