import React from 'react';
import { 
  Home, CheckSquare, Calendar, Camera, Users, 
  Calendar as CalendarEvent, BarChart3, Settings, LogOut 
} from 'lucide-react';
import Mascot from '../shared/Mascot';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: any) => void;
  user: any;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'proof', label: 'Proof', icon: Camera },
  { id: 'groups', label: 'Groups', icon: Users },
  { id: 'events', label: 'Events', icon: CalendarEvent },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, user }) => {
  return (
    <div className="w-64 bg-white border-r border-mint-green-100 flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-mint-green-100">
        <div className="flex items-center space-x-3 mb-4">
          <Mascot size="sm" expression="happy" />
          <div>
            <h2 className="text-xl font-bold text-charcoal-800">DoAm</h2>
            <p className="text-xs text-mint-green-600 font-medium">No excuses.</p>
          </div>
        </div>
        
        <div className="bg-mint-green-50 p-3 rounded-xl">
          <p className="text-sm font-medium text-charcoal-800">Welcome back,</p>
          <p className="text-lg font-bold text-mint-green-600">{user?.name}</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-mint-green-100 text-mint-green-700 font-semibold shadow-md'
                    : 'text-charcoal-600 hover:bg-mint-green-50 hover:text-mint-green-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-mint-green-100">
        <div className="bg-cream-50 p-3 rounded-xl mb-3">
          <p className="text-xs text-charcoal-600 font-handwritten text-center">
            "No wahala, you dey do well!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;