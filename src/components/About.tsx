import React from 'react';
import { Brain, Users, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Specialized in developing ethical AI solutions and frameworks for enterprise applications"
  },
  {
    icon: Lightbulb,
    title: "Future Thinking",
    description: "Leading research on emerging technologies and their societal impact"
  },
  {
    icon: Users,
    title: "STEM Advocacy",
    description: "Passionate about creating opportunities for women in technology and science"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600">
            As a specialist in AI and futures thinking, I'm dedicated to bridging the gap between 
            cutting-edge technology and inclusive innovation. My work focuses on creating ethical 
            AI solutions while advocating for increased representation in STEM fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}