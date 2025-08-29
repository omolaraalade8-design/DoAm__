import React from 'react';
import { Brain, Users, Calendar, Camera, Trophy, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-powered Planning",
    description: "Smart task organization that understands your Nigerian hustle lifestyle",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Never miss deadlines with calendar alerts that fit your schedule",
    color: "bg-mint-green-100 text-mint-green-600"
  },
  {
    icon: Camera,
    title: "Proof Uploads", 
    description: "Show your progress with photos, docs, videos — make it real",
    color: "bg-cream-200 text-charcoal-700"
  },
  {
    icon: Users,
    title: "Community Challenges",
    description: "Join your squad, compete together, motivate each other",
    color: "bg-mint-green-100 text-mint-green-600"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Collect badges, build streaks, level up your productivity game",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Beautiful charts showing your growth from 'I go do am' to 'I don DoAm'",
    color: "bg-cream-200 text-charcoal-700"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Everything you need to <span className="text-mint-green-500">DoAm</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            From AI planning to community support — we got you covered, no stress.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-mint-green-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-charcoal-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;