import React from 'react';
import { ArrowRight } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomMotivation } from '../../utils/microcopy';

interface ClosingCTAProps {
  onAuthClick: () => void;
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({ onAuthClick }) => {
  const [motivation] = React.useState(getRandomMotivation());

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-mint-green-400 to-bright-blue-400">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Mascot size="lg" expression="cheering" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enough excuses.
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal-800 mb-8">
            Time to DoAm.
          </h3>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 inline-block">
            <p className="text-lg font-medium text-charcoal-800 font-handwritten">
              "{motivation}"
            </p>
          </div>
          
          <button
            onClick={onAuthClick}
            className="bg-white hover:bg-cream-50 text-charcoal-800 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto"
          >
            <span>Start Your DoAm Journey</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-charcoal-700 mt-6 text-lg">
            Join thousands of Nigerian youth who are already DoAm'ing their goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;