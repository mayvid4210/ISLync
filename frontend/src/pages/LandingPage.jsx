// src/pages/LandingPage.jsx
import React from 'react';

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary-700">
                Real Time Translation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Break Communication
              <span className="block text-primary-600">
                Barriers with ISL
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Translate Indian Sign Language to speech and text in real-time.
              Empowering the deaf and hard-of-hearing community with seamless communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('camera')}
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
              >
                Sign to Speech
              </button>
              <button 
                onClick={() => setCurrentPage('avatar')}
                className="border-2 border-primary-300 text-primary-700 px-8 py-3 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition"
              >
                Speech to Sign
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-700">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">10k+ users trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, fast, and accurate translation for everyone</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎥", title: "Real-time Recognition", desc: "Instant sign language detection using your camera" },
              { icon: "🗣️", title: "Text-to-Speech Output", desc: "Convert signs to spoken words in real-time" },
              { icon: "🤖", title: "3D Avatar", desc: "Animated avatar performs ISL gestures accurately" },
              { icon: "🎙️", title: "Voice Recognition", desc: "Convert speech to sign language gestures" },
              { icon: "🌐", title: "Multi-language Support", desc: "Supports Hindi, English, and regional languages" },
              { icon: "📱", title: "Cross-platform", desc: "Works on mobile, tablet, and desktop devices" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-white text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Accuracy Rate" },
              { value: "50+", label: "ISL Gestures" },
              { value: "10k+", label: "Active Users" },
              { value: "0.5s", label: "Response Time" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;