import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Mascot from '../shared/Mascot';

const CalendarView: React.FC = () => {
  const [currentDate] = React.useState(new Date());
  
  const events = [
    { id: 1, title: "Morning workout", time: "7:00 AM", category: "Personal", color: "bg-mint-green-100 text-mint-green-700" },
    { id: 2, title: "Client meeting", time: "10:30 AM", category: "Side Hustle", color: "bg-bright-blue-100 text-bright-blue-700" },
    { id: 3, title: "Study session", time: "2:00 PM", category: "School", color: "bg-cream-200 text-charcoal-700" },
    { id: 4, title: "Team standup", time: "4:00 PM", category: "Work", color: "bg-mint-green-100 text-mint-green-700" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Calendar</h1>
          <Mascot size="sm" expression="happy" />
        </div>
        
        <button className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105">
          <Plus className="w-5 h-5" />
          <span>Schedule DoAm</span>
        </button>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-charcoal-800">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-mint-green-50 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-charcoal-600" />
              </button>
              <button className="p-2 hover:bg-mint-green-50 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-charcoal-600" />
              </button>
            </div>
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-charcoal-600 py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => (
              <div key={i} className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                i === 15 ? 'bg-mint-green-400 text-charcoal-800 font-bold' : 'hover:bg-mint-green-50 text-charcoal-600'
              }`}>
                {i > 5 && i < 30 ? i - 5 : ''}
              </div>
            ))}
          </div>
        </div>
        
        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <h2 className="text-xl font-semibold text-charcoal-800 mb-6">Today's Schedule</h2>
          
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 rounded-xl border-l-4 border-mint-green-400 bg-mint-green-50 hover:bg-mint-green-100 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-charcoal-800">{event.title}</h3>
                  <span className="text-sm font-medium text-mint-green-600">{event.time}</span>
                </div>
                <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${event.color}`}>
                  {event.category}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-mint-green-50 p-4 rounded-xl">
              <p className="text-sm font-handwritten text-charcoal-700">
                "Small small, you go DoAm finish all!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;