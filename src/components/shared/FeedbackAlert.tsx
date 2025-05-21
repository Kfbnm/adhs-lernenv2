import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useFeedback } from '../../context/FeedbackContext';

const FeedbackAlert: React.FC = () => {
  const { feedback, clearFeedback } = useFeedback();
  
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        clearFeedback();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [feedback, clearFeedback]);
  
  if (!feedback) return null;
  
  const alertClasses = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200'
  };
  
  const Icon = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info
  }[feedback.type];
  
  return (
    <div 
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full border rounded-lg shadow-md py-3 px-4 ${alertClasses[feedback.type]} transition-all duration-300 ease-in-out animate-fade-in`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{feedback.message}</p>
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 hover:bg-opacity-20 hover:bg-gray-500 focus:outline-none"
          onClick={clearFeedback}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackAlert;