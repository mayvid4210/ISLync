// src/App.jsx
import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import LandingPage from './pages/LandingPage';
import CameraPage from './pages/CameraPage';
import AvatarPage from './pages/AvatarPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'camera' && <CameraPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'avatar' && <AvatarPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;
// src/App.jsx - Complete working version
// import React, { useState, useRef, useEffect } from 'react';
// import { Menu, X, Camera, Mic, Video, VideoOff, ArrowLeft, Volume2, MicOff } from 'lucide-react';

// // Navigation Component
// const Navigation = ({ currentPage, setCurrentPage }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { id: 'landing', label: 'Home' },
//     { id: 'camera', label: 'Sign to Speech' },
//     { id: 'avatar', label: 'Speech to Sign' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'
//     }`}>
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center">
//           <div onClick={() => setCurrentPage('landing')} className="cursor-pointer">
//             <h1 className="text-2xl font-bold">
//               <span className="text-primary-600">ISL</span>
//               <span className="text-gray-800">Bridge</span>
//             </h1>
//           </div>
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map(item => (
//               <button key={item.id} onClick={() => setCurrentPage(item.id)}
//                 className={`font-medium transition-colors ${
//                   currentPage === item.id ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
//                 }`}>
//                 {item.label}
//               </button>
//             ))}
//           </div>
//           <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-2">
//             {navItems.map(item => (
//               <button key={item.id} onClick={() => { setCurrentPage(item.id); setIsMenuOpen(false); }}
//                 className={`block w-full text-left py-2 px-4 rounded-lg ${
//                   currentPage === item.id ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'
//                 }`}>
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Landing Page Component
// const LandingPage = ({ setCurrentPage }) => {
//   return (
//     <div>
//       <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
//         <div className="container mx-auto px-6 text-center">
//           <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
//             <span className="text-sm font-semibold text-primary-700">AI-Powered Translation</span>
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//             Break Communication
//             <span className="block text-primary-600">Barriers with ISL</span>
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Translate Indian Sign Language to speech and text in real-time. 
//             Our AI-powered platform makes communication accessible for everyone.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button onClick={() => setCurrentPage('camera')}
//               className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition shadow-lg flex items-center gap-2 justify-center">
//               <Camera size={20} /> Sign to Speech
//             </button>
//             <button onClick={() => setCurrentPage('avatar')}
//               className="border-2 border-primary-300 text-primary-700 px-8 py-3 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition flex items-center gap-2 justify-center">
//               <Mic size={20} /> Speech to Sign
//             </button>
//           </div>
//           <div className="flex items-center justify-center gap-8 mt-12">
//             <div className="flex items-center gap-2">
//               <div className="flex -space-x-2">
//                 {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-700">U</div>)}
//               </div>
//               <span className="text-sm text-gray-600">10k+ users trusted</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex gap-1">
//                 {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
//               </div>
//               <span className="text-sm text-gray-600">4.9/5 rating</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">How It Works</h2>
//             <p className="text-xl text-gray-600">Simple, fast, and accurate translation for everyone</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: "🎥", title: "Real-time Recognition", desc: "Instant sign language detection using your camera" },
//               { icon: "🗣️", title: "Text-to-Speech Output", desc: "Convert signs to spoken words in real-time" },
//               { icon: "🤖", title: "3D Avatar", desc: "Animated avatar performs ISL gestures accurately" },
//             ].map((f, i) => (
//               <div key={i} className="text-center p-6 rounded-2xl hover:shadow-xl transition">
//                 <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <span className="text-white text-3xl">{f.icon}</span>
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
//                 <p className="text-gray-600">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 text-white">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: "98%", label: "Accuracy Rate" },
//               { value: "50+", label: "ISL Gestures" },
//               { value: "10k+", label: "Active Users" },
//               { value: "0.5s", label: "Response Time" },
//             ].map((s, i) => (
//               <div key={i}>
//                 <div className="text-4xl font-bold mb-2">{s.value}</div>
//                 <div className="text-lg">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Camera Page Component
// const CameraPage = ({ setCurrentPage }) => {
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [detectedText, setDetectedText] = useState('');
//   const [confidence, setConfidence] = useState(0);
//   const videoRef = useRef(null);
//   const streamRef = useRef(null);

//   const gestures = [
//     { text: "Hello! How are you?", confidence: 0.95 },
//     { text: "Thank you very much", confidence: 0.92 },
//     { text: "I need help please", confidence: 0.88 },
//     { text: "Yes, I understand", confidence: 0.91 },
//     { text: "Nice to meet you", confidence: 0.89 },
//   ];

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         streamRef.current = stream;
//         setIsCameraActive(true);
        
//         let index = 0;
//         const interval = setInterval(() => {
//           if (!streamRef.current) { clearInterval(interval); return; }
//           const gesture = gestures[index % gestures.length];
//           setDetectedText(gesture.text);
//           setConfidence(gesture.confidence * 100);
//           const utterance = new SpeechSynthesisUtterance(gesture.text);
//           utterance.lang = 'en-IN';
//           speechSynthesis.speak(utterance);
//           index++;
//         }, 5000);
//         window.gestureInterval = interval;
//       }
//     } catch (err) {
//       alert("Unable to access camera. Please check permissions.");
//     }
//   };

//   const stopCamera = () => {
//     if (streamRef.current) {
//       streamRef.current.getTracks().forEach(track => track.stop());
//       streamRef.current = null;
//       setIsCameraActive(false);
//       setDetectedText('');
//       setConfidence(0);
//       if (window.gestureInterval) clearInterval(window.gestureInterval);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-20">
//       <div className="container mx-auto px-6">
//         <button onClick={() => setCurrentPage('landing')} className="mb-8 flex items-center gap-2 text-gray-600 hover:text-primary-600">
//           <ArrowLeft size={20} /> Back to Home
//         </button>
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Sign Language to <span className="text-primary-600">Speech</span></h1>
//           <p className="text-xl text-gray-600">Show your hand signs to the camera</p>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//             <div className="relative aspect-video bg-gray-900">
//               {isCameraActive ? (
//                 <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
//               ) : (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
//                   <Video size={64} className="mb-4 opacity-50" />
//                   <p className="text-gray-400">Camera inactive</p>
//                 </div>
//               )}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm text-center">
//                 🤟 Position your hand clearly in front of the camera
//               </div>
//             </div>
//             <div className="p-6 flex justify-center">
//               {!isCameraActive ? (
//                 <button onClick={startCamera} className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 flex items-center gap-2">
//                   <Video size={20} /> Start Camera
//                 </button>
//               ) : (
//                 <button onClick={stopCamera} className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 flex items-center gap-2">
//                   <VideoOff size={20} /> Stop Camera
//                 </button>
//               )}
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-2xl font-semibold mb-6">Translation Output</h3>
//             {detectedText ? (
//               <div>
//                 <div className="bg-primary-50 rounded-xl p-6 mb-4">
//                   <p className="text-gray-600 mb-2">Detected Sign:</p>
//                   <p className="text-2xl font-bold text-primary-900">{detectedText}</p>
//                 </div>
//                 <div className="bg-green-50 rounded-xl p-6">
//                   <p className="text-gray-600 mb-2">Confidence:</p>
//                   <div className="flex items-center gap-4">
//                     <div className="flex-1 bg-gray-200 rounded-full h-3">
//                       <div className="bg-green-500 rounded-full h-3 transition-all duration-500" style={{ width: `${confidence}%` }}></div>
//                     </div>
//                     <span className="text-lg font-semibold text-green-700">{Math.round(confidence)}%</span>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center py-12 text-gray-400">
//                 <Video size={48} className="mx-auto mb-4 opacity-50" />
//                 <p>Start camera to see detected signs</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Avatar Page Component
// const AvatarPage = ({ setCurrentPage }) => {
//   const [isListening, setIsListening] = useState(false);
//   const [spokenText, setSpokenText] = useState('');
//   const [currentGesture, setCurrentGesture] = useState('');
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
//       const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.lang = 'en-IN';
//       recognitionRef.current.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setSpokenText(transcript);
//         const text = transcript.toLowerCase();
//         let gesture = 'Processing';
//         if (text.includes('hello')) gesture = 'Hello';
//         else if (text.includes('thank')) gesture = 'Thank You';
//         else if (text.includes('help')) gesture = 'Help';
//         else if (text.includes('how are you')) gesture = 'How are you?';
//         setCurrentGesture(gesture);
//         setIsListening(false);
//       };
//       recognitionRef.current.onerror = () => setIsListening(false);
//     }
//     return () => recognitionRef.current?.abort();
//   }, []);

//   const startListening = () => {
//     recognitionRef.current?.start();
//     setIsListening(true);
//     setSpokenText('');
//     setCurrentGesture('');
//   };

//   const stopListening = () => {
//     recognitionRef.current?.abort();
//     setIsListening(false);
//   };

//   const commonPhrases = ['Hello', 'Thank you', 'How are you', 'I need help'];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-20">
//       <div className="container mx-auto px-6">
//         <button onClick={() => setCurrentPage('landing')} className="mb-8 flex items-center gap-2 text-gray-600 hover:text-primary-600">
//           <ArrowLeft size={20} /> Back to Home
//         </button>
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Speech to <span className="text-primary-600">Sign Language</span></h1>
//           <p className="text-xl text-gray-600">Speak and watch the avatar perform ISL gestures</p>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
//             <h3 className="text-2xl font-semibold mb-6">ISL Avatar</h3>
//             <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center">
//               {currentGesture ? (
//                 <div className="text-center">
//                   <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
//                     <span className="text-4xl">🤟</span>
//                   </div>
//                   <p className="text-2xl font-bold text-primary-700">{currentGesture}</p>
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-4xl">👤</span>
//                   </div>
//                   <p className="text-gray-500">Avatar ready</p>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-2xl font-semibold mb-6">Speech Input</h3>
//             <div className="bg-gray-50 rounded-xl p-6 min-h-32 mb-6">
//               <p className="text-gray-600 mb-2">Your Speech:</p>
//               <p className="text-lg text-gray-800">
//                 {spokenText || (isListening ? '🎤 Listening...' : 'Click the button and speak')}
//               </p>
//             </div>
//             <div className="flex justify-center gap-4 mb-6">
//               {!isListening ? (
//                 <button onClick={startListening} className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 flex items-center gap-2">
//                   <Mic size={20} /> Start Speaking
//                 </button>
//               ) : (
//                 <button onClick={stopListening} className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 flex items-center gap-2 animate-pulse">
//                   <MicOff size={20} /> Stop Recording
//                 </button>
//               )}
//             </div>
//             <div>
//               <h4 className="font-semibold text-gray-800 mb-3">Quick Phrases:</h4>
//               <div className="flex flex-wrap gap-3">
//                 {commonPhrases.map(phrase => (
//                   <button key={phrase} onClick={() => { setSpokenText(phrase); setCurrentGesture(phrase === 'Hello' ? 'Hello' : phrase === 'Thank you' ? 'Thank You' : phrase === 'How are you' ? 'How are you?' : 'Help'); }}
//                     className="px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full text-sm">
//                     {phrase}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// function App() {
//   const [currentPage, setCurrentPage] = useState('landing');

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
//       {currentPage === 'camera' && <CameraPage setCurrentPage={setCurrentPage} />}
//       {currentPage === 'avatar' && <AvatarPage setCurrentPage={setCurrentPage} />}
//     </div>
//   );
// }

// export default App;