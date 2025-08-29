import React, { useState } from 'react';
import Sidebar from './dashboard/Sidebar';
import DashboardHome from './dashboard/DashboardHome';
import TasksView from './dashboard/TasksView';
import CalendarView from './dashboard/CalendarView';
import ProofView from './dashboard/ProofView';
import GroupsView from './dashboard/GroupsView';
import EventsView from './dashboard/EventsView';
import AnalyticsView from './dashboard/AnalyticsView';
import SettingsView from './dashboard/SettingsView';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

type ViewType = 'dashboard' | 'tasks' | 'calendar' | 'proof' | 'groups' | 'events' | 'analytics' | 'settings';

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardHome user={user} />;
      case 'tasks':
        return <TasksView />;
      case 'calendar':
        return <CalendarView />;
      case 'proof':
        return <ProofView />;
      case 'groups':
        return <GroupsView />;
      case 'events':
        return <EventsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView user={user} onLogout={onLogout} />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="flex h-screen bg-cream-50">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        user={user}
      />
      <main className="flex-1 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default Dashboard;