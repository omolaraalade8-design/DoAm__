import React from 'react';
import Header from './landing/Header';
import HeroSection from './landing/HeroSection';
import FeaturesSection from './landing/FeaturesSection';
import HowItWorks from './landing/HowItWorks';
import CommunitySection from './landing/CommunitySection';
import ProgressSection from './landing/ProgressSection';
import ClosingCTA from './landing/ClosingCTA';
import Footer from './landing/Footer';

interface LandingPageProps {
  onAuthClick: () => void;
  user: any;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAuthClick, user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-vibrant-blue-400/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-bright-blue-400/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cream-300/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }}></div>

      <Header onAuthClick={onAuthClick} user={user} />
      <HeroSection onAuthClick={onAuthClick} />
      <FeaturesSection />
      <HowItWorks />
      <CommunitySection />
      <ProgressSection />
      <ClosingCTA onAuthClick={onAuthClick} />
      <Footer />
    </div>
  );
};

export default LandingPage;