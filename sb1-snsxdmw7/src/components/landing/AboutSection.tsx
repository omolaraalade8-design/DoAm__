import React from 'react';
import { Heart, Users, Target, Zap } from 'lucide-react';
import Mascot from '../shared/Mascot';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            About <span className="text-vibrant-blue-500">DoAm</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            We understand the Nigerian youth struggle. From "I go do am" to actually doing it — 
            that's where DoAm comes in as your productivity hype buddy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-vibrant-blue-100 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-vibrant-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Built for Nigerian Youth</h3>
                  <p className="text-charcoal-600">We get your hustle. School, work, side business, personal goals — we speak your language and understand your grind.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bright-blue-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-bright-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Community-Driven</h3>
                  <p className="text-charcoal-600">Your squad keeps you accountable. Share proof, celebrate wins, and motivate each other to stay consistent.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cream-200 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-charcoal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">AI-Powered Planning</h3>
                  <p className="text-charcoal-600">Smart task organization that adapts to your lifestyle, schedule, and goals. No generic templates here.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-vibrant-blue-100 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-vibrant-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">No Excuses Policy</h3>
                  <p className="text-charcoal-600">We're not here to baby you. DoAm is about real accountability, real progress, and real results.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-vibrant-blue-100 to-bright-blue-100 p-8 rounded-3xl shadow-xl">
              <div className="text-center mb-6">
                <Mascot size="lg" expression="excited" className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal-800 mb-2">Our Mission</h3>
              </div>
              
              <div className="space-y-4 text-charcoal-700">
                <p className="font-handwritten text-lg text-center">
                  "To turn every 'I go do am' into 'I don DoAm'"
                </p>
                
                <div className="bg-white/50 p-4 rounded-2xl">
                  <p className="text-sm leading-relaxed">
                    We believe Nigerian youth have incredible potential. Sometimes you just need 
                    the right tools, the right community, and the right energy to unlock it. 
                    DoAm is that energy — your personal hype buddy that never lets you settle for excuses.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-vibrant-blue-600 font-bold">
                    No excuses. Just results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;