import React from 'react';
import { Menu, User } from 'lucide-react';
import Mascot from '../shared/Mascot';

interface HeaderProps {
  onAuthClick: () => void;
  user: any;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick, user }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-green-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Mascot size="sm" />
          <div>
            <h1 className="text-2xl font-bold text-charcoal">DoAm</h1>
            <p className="text-xs text-blue-600 font-medium">No excuses.</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-charcoal hover:text-blue-600 transition-colors font-medium">About</a>
          <a href="#features" className="text-charcoal hover:text-blue-600 transition-colors font-medium">Features</a>
          <a href="#how" className="text-charcoal hover:text-blue-600 transition-colors font-medium">How It Works</a>
          <a href="#community" className="text-charcoal hover:text-blue-600 transition-colors font-medium">Community</a>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{user.name}</span>
              </div>
              <button
                onClick={onAuthClick}
                className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-4 py-2 rounded-full font-semibold transition-all hover:scale-105"
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Start DoAm
            </button>
          )}
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;