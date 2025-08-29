import React from 'react';
import { AlertCircle } from 'lucide-react';
import Mascot from './Mascot';

interface AuthRequiredProps {
  onAuthClick: () => void;
}

const AuthRequired: React.FC<AuthRequiredProps> = ({ onAuthClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <Mascot size="lg" expression="thinking" />
        </div>
        
        <div className="bg-cream-100 border border-cream-300 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <AlertCircle className="w-5 h-5 text-charcoal-600" />
            <h2 className="text-lg font-bold text-charcoal-800">Authentication Required</h2>
          </div>
          <p className="text-charcoal-600 text-sm">
            You need to connect to Supabase first to use authentication features.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-mint-green-50 p-4 rounded-xl text-left">
            <h3 className="font-semibold text-charcoal-800 mb-2">To get started:</h3>
            <ol className="text-sm text-charcoal-600 space-y-1">
              <li>1. Click "Connect to Supabase" in the top right</li>
              <li>2. Set up your Supabase project</li>
              <li>3. Enable Firebase provider in Supabase Auth settings</li>
              <li>4. Come back and sign in!</li>
            </ol>
          </div>
          
          <button
            onClick={onAuthClick}
            className="w-full bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Try Demo Mode (Mock Auth)
          </button>
        </div>
        
        <div className="mt-6">
          <p className="text-xs text-charcoal-500 font-handwritten">
            "No wahala, we go sort am out!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthRequired;