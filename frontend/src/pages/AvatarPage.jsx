// src/pages/AvatarPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Mic, MicOff, Volume2 } from 'lucide-react';

const AvatarPage = ({ setCurrentPage }) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [currentGesture, setCurrentGesture] = useState('');
  const [gestureSequence, setGestureSequence] = useState([]);
  const recognitionRef = useRef(null);

  const islDictionary = {
    'hello': 'Hello',
    'hi': 'Hi',
    'thank': 'Thank You',
    'thanks': 'Thank You',
    'help': 'Help',
    'how': 'How',
    'are': 'Are',
    'you': 'You',
    'good': 'Good',
    'morning': 'Good Morning',
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-IN';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenText(transcript);
        translateToSignLanguage(transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    } else {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
      setSpokenText('');
      setGestureSequence([]);
      setCurrentGesture('');
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      setIsListening(false);
    }
  };

  const translateToSignLanguage = (text) => {
    const words = text.toLowerCase().split(' ');
    const gestures = [];
    
    words.forEach(word => {
      const gesture = islDictionary[word];
      if (gesture) {
        gestures.push(gesture);
      }
    });
    
    if (gestures.length === 0) {
      gestures.push('Processing');
    }
    
    setGestureSequence(gestures);
    animateGestures(gestures);
  };
  
  const animateGestures = (gestures) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= gestures.length) {
        clearInterval(interval);
        setCurrentGesture('');
        return;
      }
      setCurrentGesture(gestures[index]);
      index++;
    }, 1500);
  };

  const commonPhrases = ['Hello', 'Thank you', 'How are you', 'I need help', 'Good morning'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => setCurrentPage('landing')}
          className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Speech to
            <span className="text-primary-600"> Sign Language</span>
          </h1>
          <p className="text-xl text-gray-600">
            Speak and watch the avatar perform ISL gestures
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">ISL Avatar</h3>
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              {currentGesture ? (
                <div className="text-center animate-fadeIn">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <span className="text-4xl">🤟</span>
                  </div>
                  <p className="text-2xl font-bold text-primary-700">{currentGesture}</p>
                  <p className="text-gray-500 mt-2">Performing gesture...</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-gray-600 font-medium">Avatar ready</p>
                  <p className="text-sm text-gray-400 mt-1">Speak to see gestures</p>
                </div>
              )}
            </div>
            
            {gestureSequence.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Gesture Sequence:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {gestureSequence.map((gesture, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {gesture}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Speech Input</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 min-h-32">
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <Volume2 size={18} />
                    Your Speech:
                  </p>
                  <p className="text-lg text-gray-800 font-medium">
                    {spokenText || (isListening ? (
                      <span className="text-primary-600 animate-pulse">🎤 Listening...</span>
                    ) : (
                      <span className="text-gray-400">Click the button and speak</span>
                    ))}
                  </p>
                </div>
                
                <div className="flex justify-center gap-4">
                  {!isListening ? (
                    <button
                      onClick={startListening}
                      className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition flex items-center gap-2"
                    >
                      <Mic size={20} /> Start Speaking
                    </button>
                  ) : (
                    <button
                      onClick={stopListening}
                      className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition flex items-center gap-2 animate-pulse"
                    >
                      <MicOff size={20} /> Stop Recording
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="font-semibold text-gray-800 mb-4">Quick Phrases:</h4>
              <div className="flex flex-wrap gap-3">
                {commonPhrases.map((phrase) => (
                  <button
                    key={phrase}
                    onClick={() => {
                      setSpokenText(phrase);
                      translateToSignLanguage(phrase);
                    }}
                    className="px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full transition-all text-sm font-medium"
                  >
                    {phrase}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPage;