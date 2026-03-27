// src/components/landing/Stats.jsx
import React from 'react';
import Section from '../common/Section';
import Card from '../common/Card';

const Stats = () => {
  const stats = [
    { value: '98%', label: 'Accuracy Rate', description: 'In gesture recognition' },
    { value: '50+', label: 'ISL Gestures', description: 'Continuously expanding' },
    { value: '10k+', label: 'Active Users', description: 'And growing daily' },
    { value: '0.5s', label: 'Response Time', description: 'Real-time translation' },
  ];

  return (
    <Section background="gradient">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} variant="glass" padding="lg" className="text-center">
            <div className="text-4xl font-extrabold text-primary-600 mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-neutral-800 mb-1">{stat.label}</div>
            <div className="text-sm text-neutral-500">{stat.description}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Stats;