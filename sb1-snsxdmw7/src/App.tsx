import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';
import ChatbotOnboarding from './components/onboarding/ChatbotOnboarding';
import LoadingSpinner from './components/shared/LoadingSpinner';
import { isSupabaseConfigured } from './lib/supabase';
import { getUserProfile, updateUserProfile } from './lib/userProfile';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'onboarding' | 'dashboard'>('landing');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [localUser, setLocalUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const { user: authUser, loading, signOut } = useAuth();

  // Combine auth user with local user data
  const user = authUser ? {
    ...authUser,
    name: authUser.user_metadata?.name || authUser.email?.split('@')[0] || 'User',
    ...userProfile
  } : localUser;

  // Check if Supabase is configured
  const supabaseConfigured = isSupabaseConfigured();

  React.useEffect(() => {
    // Load user profile when authenticated and handle navigation
    const loadUserProfile = async () => {
      if (supabaseConfigured && authUser) {
        try {
          const profile = await getUserProfile(authUser.id);
          console.log('Loaded user profile:', profile);
          
          if (!profile) {
            // New user - create profile
            console.log('New user detected, creating profile');
            const newProfile = await createUserProfile(authUser.id, {
              name: authUser.user_metadata?.name || authUser.email?.split('@')[0] || 'User',
              email: authUser.email
            });
            setUserProfile(newProfile);
          } else {
            setUserProfile(profile);
          }
          
          // If user is authenticated and has completed onboarding, go to dashboard
          if (profile?.onboarding_completed && currentView === 'landing') {
            console.log('User has completed onboarding, redirecting to dashboard');
            setCurrentView('dashboard');
          }
        } catch (error) {
          console.error('Error loading user profile:', error);
        }
      }
    };

    loadUserProfile();
  }, [supabaseConfigured, authUser, currentView]);

  // Handle automatic navigation for authenticated users
  React.useEffect(() => {
    if (authUser && userProfile && currentView === 'landing') {
      console.log('Authenticated user detected, checking onboarding status');
      if (userProfile.onboarding_completed) {
        console.log('User has completed onboarding, staying on landing page until they click dashboard');
      }
    }
  }, [authUser, userProfile, currentView]);
  const handleAuthSuccess = (userData: any) => {
    console.log('Auth success with data:', userData);
    
    // Always set user data first
    if (!supabaseConfigured) {
      setLocalUser(userData);
      // For demo mode, immediately proceed to onboarding
      setShowAuthModal(false);
      setCurrentView('onboarding');
      return;
    }
    
    setShowAuthModal(false);
    // For Supabase auth, the useEffect will handle navigation
  };

  const handleOnboardingComplete = async (onboardingData: any) => {
    console.log('Onboarding completed with data:', onboardingData);
    
    if (supabaseConfigured && authUser) {
      // Save to Supabase
      try {
        const updatedProfile = await updateUserProfile(authUser.id, {
          onboarding_completed: true,
          preferences: onboardingData
        });
        setUserProfile(updatedProfile);
        console.log('Profile updated, going to dashboard');
      } catch (error) {
        console.error('Error saving user profile:', error);
      }
    } else {
      // Demo mode
      setLocalUser(prev => ({ ...prev, onboardingData }));
      console.log('Demo mode onboarding complete, going to dashboard');
    }
    
    console.log('Setting view to dashboard');
    setCurrentView('dashboard');
  };

  const handleGoToDashboard = () => {
    console.log('handleGoToDashboard called');
    console.log('Current state:', { authUser, localUser, userProfile });
    
    // If no user at all, show auth modal
    if (!authUser && !localUser) {
      console.log('No user found, showing auth modal');
      setShowAuthModal(true);
      return;
    }
    
    // If we have a user, check onboarding status
    const hasOnboarding = supabaseConfigured 
      ? userProfile?.onboarding_completed 
      : localUser?.onboardingData;
    
    console.log('User exists, checking onboarding:', hasOnboarding);
    
    if (hasOnboarding) {
      console.log('User has completed onboarding, going to dashboard');
      setCurrentView('dashboard');
    } else {
      console.log('User needs onboarding');
      setCurrentView('onboarding');
    }
  };

  const handleLogout = async () => {
    console.log('Logging out...');
    if (supabaseConfigured) {
      await signOut();
    }
    setLocalUser(null);
    setUserProfile(null);
    setCurrentView('landing');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex items-center justify-center">
        <LoadingSpinner size="lg" message="DoAm dey load your account..." />
      </div>
    );
  }

  console.log('Current state:', { currentView, user, authUser, localUser, userProfile, supabaseConfigured });
  
  return (
    <div className="min-h-screen">
      {currentView === 'landing' ? (
        <LandingPage 
          onAuthClick={handleGoToDashboard}
          user={user}
        />
      ) : currentView === 'onboarding' ? (
        <ChatbotOnboarding onComplete={handleOnboardingComplete} />
      ) : (
        <Dashboard 
          user={user}
          onLogout={handleLogout}
        />
      )}
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onAuth={handleAuthSuccess}
        />
      )}
    </div>
  );
}

export default App;