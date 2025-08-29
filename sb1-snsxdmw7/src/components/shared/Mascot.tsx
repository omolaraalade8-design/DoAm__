import React from 'react';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  expression?: 'happy' | 'excited' | 'cheering' | 'thinking';
  className?: string;
}

const Mascot: React.FC<MascotProps> = ({ 
  size = 'md', 
  expression = 'happy',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const eyePositions = {
    happy: 'translate-y-0',
    excited: '-translate-y-1',
    cheering: 'translate-y-1', 
    thinking: 'translate-x-1'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} animate-float`}>
      <div className="relative w-full h-full">
        {/* Main body */}
        <div className="w-full h-full bg-mint-green-400 rounded-2xl relative shadow-lg">
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-charcoal-800 rounded-full transform transition-transform duration-300 animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-charcoal-800 rounded-full transform transition-transform duration-300 animate-pulse"></div>
          
          {/* Mouth */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-charcoal-800 rounded-full"></div>
          
          {/* Arms */}
          {expression === 'cheering' && (
            <>
              <div className="absolute -left-1 top-1/3 w-2 h-1 bg-mint-green-500 rounded-full transform rotate-45 animate-bounce-slow"></div>
              <div className="absolute -right-1 top-1/3 w-2 h-1 bg-mint-green-500 rounded-full transform -rotate-45 animate-bounce-slow"></div>
            </>
          )}
        </div>
        
        {/* Thinking bubble */}
        {expression === 'thinking' && (
          <div className="absolute -top-2 -right-2 flex space-x-1">
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mascot;