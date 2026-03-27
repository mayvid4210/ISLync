// src/components/landing/Hero.jsx
import React from 'react';
import { Camera, Mic, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Card from '../common/Card';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-primary-50 via-white to-secondary-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              <span className="text-sm font-semibold text-primary-700">AI-Powered Translation</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Break Communication
              <span className="bg-linear-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block">
                Barriers with ISL
              </span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Translate Indian Sign Language to speech and text in real-time. 
              Our AI-powered platform makes communication accessible for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<Camera size={20} />}
                onClick={() => setCurrentPage('camera')}
              >
                Sign to Speech
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                icon={<Mic size={20} />}
                onClick={() => setCurrentPage('avatar')}
              >
                Speech to Sign
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white flex items-center justify-center text-xs font-bold text-primary-700">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-neutral-600">10k+ users trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-neutral-600">4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image/Illustration */}
          <div className="lg:w-1/2">
            <Card variant="gradient" padding="none" className="relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-primary-600/20 to-secondary-600/20"></div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sign Language Communication"
                className="w-full h-auto rounded-2xl relative z-10"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">Real-time translation</p>
                    <p className="font-semibold text-primary-700">98% accuracy</p>
                  </div>
                  <ArrowRight size={20} className="text-primary-600" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;