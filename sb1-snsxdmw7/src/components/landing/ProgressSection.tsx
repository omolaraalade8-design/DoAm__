import React from 'react';
import { TrendingUp, Target, Clock, Star } from 'lucide-react';

const ProgressSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            Track Your <span className="text-mint-green-500">Growth</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Beautiful charts and streaks that show your journey from procrastination to productivity champion.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-mint-green-100 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-mint-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Daily Streaks</h3>
                  <p className="text-charcoal-600">Build momentum with consistent daily wins. Every DoAm counts!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-bright-blue-100 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-bright-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Goal Completion</h3>
                  <p className="text-charcoal-600">See how you're crushing your weekly and monthly targets.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cream-200 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-charcoal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Time Insights</h3>
                  <p className="text-charcoal-600">Understand your productivity patterns and optimize your schedule.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-mint-green-100 p-3 rounded-xl">
                  <Star className="w-6 h-6 text-mint-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">Achievement Badges</h3>
                  <p className="text-charcoal-600">Collect special badges for major milestones and consistency.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-mint-green-50 to-bright-blue-50 p-8 rounded-3xl shadow-xl">
              {/* Mock progress dashboard */}
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-charcoal-800">This Week's Progress</h4>
                    <span className="text-mint-green-600 font-bold">85%</span>
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-mint-green-400 to-mint-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-mint-green-600 mb-1">15</div>
                    <div className="text-sm text-charcoal-600">Day Streak</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-bright-blue-600 mb-1">42</div>
                    <div className="text-sm text-charcoal-600">Tasks DoAm'd</div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-2xl">
                  <h4 className="font-semibold text-charcoal-800 mb-3">Recent Achievements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-mint-green-500" />
                      <span className="text-sm text-charcoal-600">Early Bird (7 days)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-bright-blue-500" />
                      <span className="text-sm text-charcoal-600">Task Master (50 tasks)</span>
                    </div>
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

export default ProgressSection;