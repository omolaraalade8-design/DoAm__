import React from 'react';
import { Users, Trophy, Plus, MessageSquare } from 'lucide-react';
import Mascot from '../shared/Mascot';

const GroupsView: React.FC = () => {
  const groups = [
    {
      id: 1,
      name: "30-Day Fitness Challenge",
      members: 45,
      description: "Get fit together! Daily workouts and accountability.",
      category: "Fitness",
      joined: true,
      rank: 3
    },
    {
      id: 2, 
      name: "Tech Skills Bootcamp",
      members: 128,
      description: "Level up your coding skills with daily practice.",
      category: "Learning",
      joined: true,
      rank: 7
    },
    {
      id: 3,
      name: "Side Hustle Success",
      members: 67,
      description: "Build your business empire, one task at a time.",
      category: "Business",
      joined: false,
      rank: null
    },
    {
      id: 4,
      name: "Academic Excellence", 
      members: 89,
      description: "Study smart, achieve more in school.",
      category: "Education",
      joined: false,
      rank: null
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Groups</h1>
          <Mascot size="sm" expression="cheering" />
        </div>
        
        <button className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105">
          <Plus className="w-5 h-5" />
          <span>Create Group</span>
        </button>
      </div>
      
      {/* Your Groups */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal-800 mb-4">Your Groups</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.filter(g => g.joined).map((group) => (
            <div key={group.id} className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">{group.name}</h3>
                  <p className="text-charcoal-600 mb-3">{group.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-charcoal-500">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{group.members} members</span>
                    </span>
                    
                    {group.rank && (
                      <span className="flex items-center space-x-1 text-mint-green-600 font-semibold">
                        <Trophy className="w-4 h-4" />
                        <span>Rank #{group.rank}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex-1 bg-mint-green-100 hover:bg-mint-green-200 text-mint-green-700 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>View Group</span>
                </button>
                <span className="bg-mint-green-100 text-mint-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {group.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Discover Groups */}
      <div>
        <h2 className="text-2xl font-bold text-charcoal-800 mb-4">Discover Groups</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.filter(g => !g.joined).map((group) => (
            <div key={group.id} className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">{group.name}</h3>
                  <p className="text-charcoal-600 mb-3">{group.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-charcoal-500">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{group.members} members</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex-1 bg-bright-blue-400 hover:bg-bright-blue-500 text-white py-2 rounded-lg transition-all duration-300 hover:scale-105">
                  Join Group
                </button>
                <span className="bg-cream-200 text-charcoal-700 px-3 py-1 rounded-full text-xs font-medium">
                  {group.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsView;