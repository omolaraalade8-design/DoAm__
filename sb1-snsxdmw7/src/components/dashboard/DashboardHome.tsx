import React, { useState, useEffect } from 'react';
import { CheckSquare, Calendar, TrendingUp, Users, Plus } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomMotivation, getRandomCelebration } from '../../utils/microcopy';
import AIAssistant from './AIAssistant';

interface DashboardHomeProps {
  user: any;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ user }) => {
  const [motivation, setMotivation] = useState(getRandomMotivation());
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", completed: false, category: "Work" },
    { id: 2, title: "Morning workout", completed: true, category: "Personal" },
    { id: 3, title: "Study for exam", completed: false, category: "School" },
    { id: 4, title: "Client call at 3pm", completed: false, category: "Side Hustle" }
  ]);

  useEffect(() => {
    // Refresh motivation every 30 seconds
    const interval = setInterval(() => {
      setMotivation(getRandomMotivation());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const completedTasks = tasks.filter(t => t.completed).length;
  const completionRate = Math.round((completedTasks / tasks.length) * 100);

  const handleCreateTask = (taskData: any) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      completed: false,
      category: taskData.category || 'Personal'
    };
    setTasks(prev => [...prev, newTask]);
  };

  const handleScheduleEvent = (eventData: any) => {
    // For now, just show a notification
    console.log('Event scheduled:', eventData);
  };

  const handleSetGoal = (goalData: any) => {
    // For now, just show a notification
    console.log('Goal set:', goalData);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-charcoal-800">
              How far, {user?.name}?
            </h1>
            <p className="text-charcoal-600">Ready to DoAm today?</p>
          </div>
          <Mascot size="md" expression="excited" />
        </div>
        
        <div className="bg-gradient-to-r from-mint-green-100 to-bright-blue-100 p-4 rounded-2xl">
          <p className="text-center font-handwritten text-lg text-charcoal-800">
            "{motivation}"
          </p>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-600">Today's Tasks</p>
              <p className="text-2xl font-bold text-charcoal-800">{completedTasks}/{tasks.length}</p>
            </div>
            <CheckSquare className="w-8 h-8 text-mint-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-600">Completion Rate</p>
              <p className="text-2xl font-bold text-blue-600">{completionRate}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-600">Current Streak</p>
              <p className="text-2xl font-bold text-mint-green-600">7 days</p>
            </div>
            <Calendar className="w-8 h-8 text-mint-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-charcoal-600">Squad Rank</p>
              <p className="text-2xl font-bold text-charcoal-800">#3</p>
            </div>
            <Users className="w-8 h-8 text-charcoal-600" />
          </div>
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* AI Assistant */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-charcoal-800 mb-4">AI Assistant</h2>
          <AIAssistant 
            onCreateTask={handleCreateTask}
            onScheduleEvent={handleScheduleEvent}
            onSetGoal={handleSetGoal}
          />
        </div>
        
        {/* Today's Tasks */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-charcoal-800">Today's Tasks</h2>
            <button className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 p-2 rounded-lg transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-3 p-3 hover:bg-mint-green-50 rounded-xl transition-colors">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 text-mint-green-600 border-mint-green-300 rounded focus:ring-mint-green-500"
                />
                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'line-through text-charcoal-400' : 'text-charcoal-800'}`}>
                    {task.title}
                  </p>
                  <p className="text-xs text-mint-green-600 font-medium">{task.category}</p>
                </div>
                {task.completed && (
                  <span className="text-xs text-mint-green-600 font-bold">
                    {getRandomCelebration()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <h2 className="text-xl font-bold text-charcoal-800 mb-6">Squad Activity</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-mint-green-400 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-charcoal-800">Kemi_Hustles</p>
                <p className="text-sm text-charcoal-600">DoAm'd morning workout! 💪</p>
                <p className="text-xs text-charcoal-400">2 min ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-charcoal-800">TechBro_Segun</p>
                <p className="text-sm text-charcoal-600">Finished coding project early! 🔥</p>
                <p className="text-xs text-charcoal-400">10 min ago</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-cream-300 rounded-full"></div>
              <div className="flex-1">
                <p className="font-semibold text-charcoal-800">ScholarBae</p>
                <p className="text-sm text-charcoal-600">Aced my presentation! {getRandomCelebration()}</p>
                <p className="text-xs text-charcoal-400">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;