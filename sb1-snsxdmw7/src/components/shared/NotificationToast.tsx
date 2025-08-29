import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface NotificationToastProps {
  type: 'success' | 'warning' | 'info';
  message: string;
  onClose: () => void;
  duration?: number;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ 
  type, 
  message, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeConfig = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-mint-green-100 border-mint-green-400',
      textColor: 'text-mint-green-800',
      iconColor: 'text-mint-green-600'
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'bg-cream-200 border-cream-400',
      textColor: 'text-charcoal-800', 
      iconColor: 'text-charcoal-600'
    },
    info: {
      icon: Info,
      bgColor: 'bg-bright-blue-100 border-bright-blue-400',
      textColor: 'text-bright-blue-800',
      iconColor: 'text-bright-blue-600'
    }
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className={`fixed top-4 right-4 z-50 ${config.bgColor} border-2 rounded-xl p-4 shadow-lg max-w-sm animate-slide-in`}>
      <div className="flex items-start space-x-3">
        <Icon className={`w-5 h-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
        <p className={`${config.textColor} font-medium flex-1`}>
          {message}
        </p>
        <button
          onClick={onClose}
          className={`${config.textColor} hover:opacity-70 transition-opacity`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;