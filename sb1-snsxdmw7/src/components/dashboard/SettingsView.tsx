import React, { useState } from 'react';
import { User, Bell, Shield, Smartphone, Globe, LogOut, Save } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { useAuth } from '../../hooks/useAuth';

interface SettingsViewProps {
  user: any;
  onLogout: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ user, onLogout }) => {
  const { signOut } = useAuth();
  const [settings, setSettings] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    notifications: {
      push: true,
      email: false,
      sms: true,
      community: true
    },
    privacy: {
      profileVisible: true,
      progressVisible: true,
      allowGroupInvites: true
    },
    preferences: {
      language: 'pidgin',
      timezone: 'WAT',
      theme: 'light',
      reminderStyle: 'friendly'
    }
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setSettings({
      ...settings,
      notifications: { ...settings.notifications, [key]: value }
    });
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    setSettings({
      ...settings,
      privacy: { ...settings.privacy, [key]: value }
    });
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setSettings({
      ...settings,
      preferences: { ...settings.preferences, [key]: value }
    });
  };

  const saveSettings = () => {
    // Mock save functionality
    // In a real app, this would update the user profile in Supabase
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-mint-green-100 border-2 border-mint-green-400 rounded-xl p-4 shadow-lg z-50';
    toast.innerHTML = `
      <div class="flex items-center space-x-2">
        <div class="w-5 h-5 text-mint-green-600">✓</div>
        <span class="text-mint-green-800 font-medium">Settings saved! No wahala 👍</span>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      onLogout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Settings</h1>
          <Mascot size="sm" expression="thinking" />
        </div>
        
        <button
          onClick={saveSettings}
          className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <User className="w-6 h-6 text-mint-green-600" />
            <h2 className="text-xl font-bold text-charcoal-800">Profile</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Wetin we go call you?
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({...settings, name: e.target.value})}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Phone Number (for SMS reminders)
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({...settings, phone: e.target.value})}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-bright-blue-600" />
            <h2 className="text-xl font-bold text-charcoal-800">Notifications</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Push Notifications</h3>
                <p className="text-sm text-charcoal-600">Get DoAm reminders on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) => handleNotificationChange('push', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Email Reminders</h3>
                <p className="text-sm text-charcoal-600">Get weekly progress emails</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) => handleNotificationChange('email', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">SMS Alerts</h3>
                <p className="text-sm text-charcoal-600">Important deadlines via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Community Updates</h3>
                <p className="text-sm text-charcoal-600">Squad activity and challenges</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.community}
                  onChange={(e) => handleNotificationChange('community', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-charcoal-600" />
            <h2 className="text-xl font-bold text-charcoal-800">Privacy</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Public Profile</h3>
                <p className="text-sm text-charcoal-600">Let others see your profile in groups</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.profileVisible}
                  onChange={(e) => handlePrivacyChange('profileVisible', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Progress Sharing</h3>
                <p className="text-sm text-charcoal-600">Share your DoAm progress with groups</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.progressVisible}
                  onChange={(e) => handlePrivacyChange('progressVisible', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-800">Group Invites</h3>
                <p className="text-sm text-charcoal-600">Allow others to invite you to groups</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privacy.allowGroupInvites}
                  onChange={(e) => handlePrivacyChange('allowGroupInvites', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mint-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mint-green-400"></div>
              </label>
            </div>
          </div>
        </div>

        {/* App Preferences */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <Smartphone className="w-6 h-6 text-bright-blue-600" />
            <h2 className="text-xl font-bold text-charcoal-800">Preferences</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Language Style
              </label>
              <select
                value={settings.preferences.language}
                onChange={(e) => handlePreferenceChange('language', e.target.value)}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
              >
                <option value="pidgin">Nigerian Pidgin (Default)</option>
                <option value="formal">Formal English</option>
                <option value="casual">Casual English</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Timezone
              </label>
              <select
                value={settings.preferences.timezone}
                onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
              >
                <option value="WAT">West Africa Time (WAT)</option>
                <option value="GMT">Greenwich Mean Time (GMT)</option>
                <option value="EST">Eastern Standard Time (EST)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Reminder Style
              </label>
              <select
                value={settings.preferences.reminderStyle}
                onChange={(e) => handlePreferenceChange('reminderStyle', e.target.value)}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
              >
                <option value="friendly">Friendly Hype (Default)</option>
                <option value="strict">Strict Accountability</option>
                <option value="motivational">Motivational Quotes</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                App Theme
              </label>
              <select
                value={settings.preferences.theme}
                onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
              >
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
                <option value="auto">Auto (System)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-6 h-6 text-charcoal-600" />
          <h2 className="text-xl font-bold text-charcoal-800">Account Management</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <button className="bg-bright-blue-50 hover:bg-bright-blue-100 text-bright-blue-700 p-4 rounded-xl transition-colors text-left">
            <h3 className="font-semibold mb-1">Export Data</h3>
            <p className="text-sm">Download your DoAm history</p>
          </button>
          
          <button className="bg-cream-100 hover:bg-cream-200 text-charcoal-700 p-4 rounded-xl transition-colors text-left">
            <h3 className="font-semibold mb-1">Change Password</h3>
            <p className="text-sm">Update your login credentials</p>
          </button>
          
          <button 
            onClick={handleLogout}
            className="bg-red-50 hover:bg-red-100 text-red-700 p-4 rounded-xl transition-colors text-left flex items-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <div>
              <h3 className="font-semibold mb-1">Log Out</h3>
              <p className="text-sm">Sign out of DoAm</p>
            </div>
          </button>
        </div>
      </div>

      {/* Motivational Footer */}
      <div className="mt-8 bg-gradient-to-r from-mint-green-100 to-bright-blue-100 p-6 rounded-2xl text-center">
        <Mascot size="md" expression="happy" className="mx-auto mb-4" />
        <p className="font-handwritten text-lg text-charcoal-800 mb-2">
          "Customize am make e sweet you well well!"
        </p>
        <p className="text-sm text-charcoal-600">
          Your DoAm experience, your way. No wahala!
        </p>
      </div>
    </div>
  );
};

export default SettingsView;