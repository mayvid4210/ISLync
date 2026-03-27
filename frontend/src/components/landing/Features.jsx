import React from 'react';
import { Camera, Mic, Bot, Globe, Zap, Shield } from 'lucide-react';
import Section from '../common/Section';
import Card from '../common/Card';

const Features = () => {
  const features = [
    {
      icon: <Camera size={32} />,
      title: 'Real-time Recognition',
      description: 'Advanced AI instantly recognizes ISL gestures from your camera feed with 98% accuracy.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <Mic size={32} />,
      title: 'Speech-to-Sign',
      description: 'Convert spoken words into animated sign language gestures in real-time.',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: <Bot size={32} />,
      title: '3D Avatar',
      description: 'Lifelike 3D avatar performs ISL gestures naturally and accurately.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: <Globe size={32} />,
      title: 'Multi-language Support',
      description: 'Supports Hindi, English, Tamil, Telugu, and other Indian languages.',
      color: 'from-primary-500 to-secondary-500',
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Sub-second latency for seamless real-time communication.',
      color: 'from-accent-500 to-primary-500',
    },
    {
      icon: <Shield size={32} />,
      title: 'Privacy First',
      description: 'All processing happens locally on your device. Your data stays private.',
      color: 'from-secondary-500 to-primary-500',
    },
  ];

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Powerful Features for
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {' '}Seamless Communication
          </span>
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Everything you need to break communication barriers with the hearing impaired community
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} hover className="group">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-neutral-800">{feature.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;