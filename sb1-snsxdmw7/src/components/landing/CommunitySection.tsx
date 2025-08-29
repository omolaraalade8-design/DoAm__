import React from 'react';
import { Users, Camera, Medal, Heart } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-6">
              Your <span className="text-mint-green-500">Squad</span> Got You
            </h2>
            <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
              Join challenges, share proof, and celebrate wins together. 
              Because accountability hits different when your people are watching.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-mint-green-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-mint-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800">Group Challenges</h3>
                  <p className="text-sm text-charcoal-600">Fitness, academics, side hustles</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-bright-blue-100 p-2 rounded-lg">
                  <Camera className="w-5 h-5 text-bright-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800">Proof Sharing</h3>
                  <p className="text-sm text-charcoal-600">Show your progress visually</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-cream-200 p-2 rounded-lg">
                  <Medal className="w-5 h-5 text-charcoal-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800">Leaderboards</h3>
                  <p className="text-sm text-charcoal-600">Friendly competition vibes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-mint-green-100 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-mint-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800">Real Support</h3>
                  <p className="text-sm text-charcoal-600">Your people cheering you on</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-mint-green-100 to-bright-blue-100 p-8 rounded-3xl">
              <div className="space-y-4">
                {/* Mock community posts */}
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-mint-green-400 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-charcoal-800">Kemi_Hustles</p>
                      <p className="text-xs text-charcoal-500">2 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-700 mb-2">"Just finished my coding session! 💪"</p>
                  <div className="bg-gray-200 h-24 rounded-xl mb-2"></div>
                  <div className="flex items-center space-x-4 text-xs text-charcoal-500">
                    <span>❤️ 12 likes</span>
                    <span>🔥 3 fire</span>
                    <span>💪 DoAm'd!</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-bright-blue-400 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-charcoal-800">TechBro_Segun</p>
                      <p className="text-xs text-charcoal-500">5 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-700">"30-day fitness challenge - Day 15 DoAm'd! 🏃‍♂️"</p>
                  <div className="flex items-center space-x-4 text-xs text-charcoal-500 mt-2">
                    <span>❤️ 8 likes</span>
                    <span>💪 Keep going!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;