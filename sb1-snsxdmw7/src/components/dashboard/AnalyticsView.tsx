import React from 'react';
import { TrendingUp, Target, Calendar, Award } from 'lucide-react';
import Mascot from '../shared/Mascot';

const AnalyticsView: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Analytics</h1>
          <Mascot size="sm" expression="excited" />
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-mint-green-500" />
            <span className="text-sm bg-mint-green-100 text-mint-green-700 px-2 py-1 rounded-full">+15%</span>
          </div>
          <h3 className="text-2xl font-bold text-charcoal-800">87%</h3>
          <p className="text-charcoal-600 text-sm">Completion Rate</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8 text-bright-blue-500" />
            <span className="text-sm bg-bright-blue-100 text-bright-blue-700 px-2 py-1 rounded-full">New!</span>
          </div>
          <h3 className="text-2xl font-bold text-charcoal-800">156</h3>
          <p className="text-charcoal-600 text-sm">Tasks DoAm'd</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-cream-600" />
            <span className="text-sm bg-cream-200 text-charcoal-700 px-2 py-1 rounded-full">🔥</span>
          </div>
          <h3 className="text-2xl font-bold text-charcoal-800">15</h3>
          <p className="text-charcoal-600 text-sm">Day Streak</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-8 h-8 text-mint-green-500" />
            <span className="text-sm bg-mint-green-100 text-mint-green-700 px-2 py-1 rounded-full">Level 3</span>
          </div>
          <h3 className="text-2xl font-bold text-charcoal-800">12</h3>
          <p className="text-charcoal-600 text-sm">Badges Earned</p>
        </div>
      </div>
      
      {/* Progress Chart */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <h2 className="text-xl font-bold text-charcoal-800 mb-6">Weekly Progress</h2>
          
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const progress = Math.floor(Math.random() * 100);
              return (
                <div key={day} className="flex items-center space-x-4">
                  <span className="w-10 text-sm font-medium text-charcoal-600">{day}</span>
                  <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-mint-green-400 to-mint-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm font-semibold text-charcoal-800">{progress}%</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <h2 className="text-xl font-bold text-charcoal-800 mb-6">Recent Achievements</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-mint-green-50 rounded-xl">
              <div className="w-12 h-12 bg-mint-green-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-charcoal-800" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal-800">Early Bird</h3>
                <p className="text-sm text-charcoal-600">7 consecutive days of morning tasks</p>
                <p className="text-xs text-mint-green-600 font-medium">Unlocked 2 days ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-bright-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-bright-blue-400 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal-800">Task Master</h3>
                <p className="text-sm text-charcoal-600">Completed 50+ tasks total</p>
                <p className="text-xs text-bright-blue-600 font-medium">Unlocked 5 days ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-cream-100 rounded-xl">
              <div className="w-12 h-12 bg-cream-400 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-charcoal-800" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal-800">Squad Leader</h3>
                <p className="text-sm text-charcoal-600">Top 3 in fitness challenge group</p>
                <p className="text-xs text-charcoal-600 font-medium">Unlocked 1 week ago</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-mint-green-50 p-4 rounded-xl">
              <p className="text-sm font-handwritten text-charcoal-700">
                "From 'I go do am' to 'I don DoAm' — steady levels!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;