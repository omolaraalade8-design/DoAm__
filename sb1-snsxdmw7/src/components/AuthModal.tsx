import React, { useState } from 'react';
import { X, Mail, Globe, AlertCircle } from 'lucide-react';
import Mascot from './shared/Mascot';
import { getRandomGreeting } from '../utils/microcopy';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from './shared/LoadingSpinner';
import { isSupabaseConfigured } from '../lib/supabase';

interface AuthModalProps {
  onClose: () => void;
  onAuth: (userData: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuth }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [greeting] = useState(getRandomGreeting());
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();

  // Check if Supabase is configured
  const supabaseConfigured = isSupabaseConfigured();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If Supabase not configured, use mock auth
    if (!supabaseConfigured) {
      console.log('Using demo auth with data:', formData);
      onAuth({
        name: formData.name || 'Demo User',
        email: formData.email || 'demo@doam.app',
        id: Date.now(),
        isNewUser: isSignUp,
        onboarding_completed: false
      });
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      if (isSignUp) {
        await signUpWithEmail(formData.email, formData.password, formData.name);
        // Don't show error message for successful signup
        console.log('Account created successfully');
      } else {
        await signInWithEmail(formData.email, formData.password);
      }
      
      // Auth success will be handled by the auth state listener
    } catch (err: any) {
      console.error('Auth error:', err);
      setError(err.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    // If Supabase not configured, use mock auth
    if (!supabaseConfigured) {
      console.log('Using demo Google auth');
      onAuth({
        name: 'Demo User',
        email: 'demo@doam.app',
        id: Date.now(),
        isNewUser: true,
        onboarding_completed: false
      });
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      await signInWithGoogle();
      // Auth success will be handled by the auth state listener
    } catch (err: any) {
      console.error('Google auth error:', err);
      setError(err.message || 'Google sign-in failed. Try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Mascot size="md" expression="excited" />
            </div>
            {!supabaseConfigured && (
              <div className="bg-cream-100 border border-cream-300 rounded-xl p-3 mb-4">
                <p className="text-xs text-charcoal-600">
                  Demo mode - Connect to Supabase with Firebase auth for real authentication
                </p>
              </div>
            )}
            <h2 className="text-2xl font-bold text-charcoal-800 mb-2">
              {greeting}
            </h2>
            <p className="text-charcoal-600">
              {isSignUp ? "Let's set you up!" : "Welcome back!"}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Wetin we go call you?
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400 focus:border-transparent"
                placeholder="Create a secure password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-mint-green-400 hover:bg-mint-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-charcoal-800 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
            >
              {loading ? (
                <LoadingSpinner size="sm" message="" />
              ) : (
                isSignUp ? 'Start DoAm Journey' : 'Continue DoAm Journey'
              )}
            </button>
          </form>
          
          <div className="my-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full flex items-center justify-center space-x-3 border border-blue-200 py-3 rounded-xl hover:bg-blue-50 disabled:bg-gray-50 disabled:cursor-not-allowed transition-colors"
            >
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-charcoal-700">
                {loading ? 'Connecting...' : 'Continue with Google'}
              </span>
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-mint-green-600 hover:text-mint-green-700 font-medium transition-colors"
            >
              {isSignUp ? 'Already have account? Sign in' : "Don't have account? Sign up"}
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-charcoal-500 leading-relaxed">
              By continuing, you agree to our{' '}
              <a href="#" className="text-mint-green-600 hover:underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-mint-green-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;