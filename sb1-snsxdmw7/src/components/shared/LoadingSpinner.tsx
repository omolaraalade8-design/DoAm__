import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'DoAm dey load...' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-mint-green-200 border-t-mint-green-500`} />
      {message && (
        <p className="text-charcoal-600 font-medium font-handwritten">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;