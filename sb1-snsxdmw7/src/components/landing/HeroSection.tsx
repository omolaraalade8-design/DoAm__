import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomMotivation } from '../../utils/microcopy';

interface HeroSectionProps {
  onAuthClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAuthClick }) => {
  const [motivation] = React.useState(getRandomMotivation());

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Mascot size="xl" expression="cheering" className="animate-float" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal-800 mb-6 leading-tight">
            Stop dragging. <br />
            <span className="text-blue-500">Just DoAm.</span>
          </h1>
          
          <div className="bg-white/100 backdrop-blur-sm rounded-full px-6 py-3 mb-8 inline-block border border-blue-200">
            <p className="text-lg font-medium text-charcoal-700 font-handwritten">
              "{motivation}"
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-charcoal-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your AI-powered productivity hype buddy — <br />
            <strong className="text-blue-600">no excuses.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onAuthClick}
              className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl animate-pulse-glow flex items-center space-x-2"
            >
              <span>Start DoAm Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 text-charcoal-600">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">No credit card required</span>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="relative">
            <div className="absolute -left-20 top-0 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-blue-400 text-white px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                Plan am!
              </div>
            </div>
            <div className="absolute -right-20 top-8 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-cream-300 text-charcoal-800 px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                DoAm finish!
              </div>
            </div>
            <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl font-semibold text-sm shadow-lg">
                No wahala!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;