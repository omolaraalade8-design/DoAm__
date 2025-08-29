import React from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import Mascot from '../shared/Mascot';

const EventsView: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Productivity Masterclass",
      description: "Learn advanced time management techniques from Nigerian productivity experts.",
      date: "Jan 25, 2025",
      time: "6:00 PM WAT",
      attendees: 234,
      type: "Workshop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Goal Setting Workshop", 
      description: "Set and achieve your 2025 goals with AI-powered planning strategies.",
      date: "Jan 30, 2025",
      time: "7:30 PM WAT",
      attendees: 189,
      type: "Training",
      status: "registered"
    },
    {
      id: 3,
      title: "Community Meetup Lagos",
      description: "Meet fellow DoAm users in person! Network and share success stories.",
      date: "Feb 5, 2025", 
      time: "4:00 PM WAT",
      attendees: 67,
      type: "Meetup",
      status: "upcoming"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Events</h1>
          <Mascot size="sm" expression="excited" />
        </div>
      </div>
      
      {/* Featured Event */}
      <div className="bg-gradient-to-r from-mint-green-400 to-bright-blue-400 p-8 rounded-3xl shadow-xl mb-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Calendar className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Upcoming Featured Event</h2>
            <p className="text-white/90">Don't miss out on this exclusive session!</p>
          </div>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Productivity Masterclass</h3>
          <p className="mb-4 text-white/90">Join 200+ Nigerian youth for an intensive session on productivity hacks.</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Jan 25, 2025 • 6:00 PM WAT</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>234 registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Online</span>
            </div>
          </div>
          
          <button className="bg-white text-charcoal-800 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">
            Register Now (Free!)
          </button>
        </div>
      </div>
      
      {/* Events List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-charcoal-800">All Events</h2>
        
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-charcoal-800">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'registered' ? 'bg-mint-green-100 text-mint-green-700' : 'bg-cream-200 text-charcoal-700'
                  }`}>
                    {event.status === 'registered' ? 'Registered' : event.type}
                  </span>
                </div>
                
                <p className="text-charcoal-600 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <button className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  event.status === 'registered' 
                    ? 'bg-mint-green-100 text-mint-green-700 cursor-default'
                    : 'bg-bright-blue-400 hover:bg-bright-blue-500 text-white'
                }`}>
                  {event.status === 'registered' ? 'Registered ✓' : 'Register'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {events.length === 0 && (
        <div className="text-center py-12">
          <Mascot size="lg" expression="thinking" className="mx-auto mb-4" />
          <p className="text-xl text-charcoal-600 mb-2">No events available right now</p>
          <p className="text-charcoal-500">Check back soon for exciting workshops and meetups!</p>
        </div>
      )}
    </div>
  );
};

export default EventsView;