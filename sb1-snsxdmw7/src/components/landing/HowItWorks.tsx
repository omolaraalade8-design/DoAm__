import React from 'react';
import { MessageSquare, Lightbulb, Upload } from 'lucide-react';
import Mascot from '../shared/Mascot';

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell DoAm your goals",
    description: "Chat with our AI about your hustle, school, work — whatever you're pursuing.",
    mascotExpression: 'thinking' as const
  },
  {
    number: "02", 
    icon: Lightbulb,
    title: "Get AI-generated plan",
    description: "Receive a smart, personalized roadmap that fits your Nigerian lifestyle.",
    mascotExpression: 'excited' as const
  },
  {
    number: "03",
    icon: Upload,
    title: "Prove it, share it, celebrate",
    description: "Upload proof of your progress and celebrate wins with your community.",
    mascotExpression: 'cheering' as const
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            How <span className="text-mint-green-500">DoAm</span> Works
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Three simple steps to transform from 'I go do am' to 'I don DoAm'
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="bg-mint-green-400 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <step.icon className="w-8 h-8 text-charcoal-800" />
                </div>
                
                <div className="absolute -top-2 -right-2">
                  <div className="bg-bright-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                <Mascot size="sm" expression={step.mascotExpression} />
              </div>
              
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                {step.title}
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 translate-x-4">
                  <div className="w-8 h-0.5 bg-mint-green-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;