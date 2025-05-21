import React, { createContext, useContext, useState } from 'react';
import { FeedbackMessage } from '../types';

interface FeedbackContextType {
  feedback: FeedbackMessage | null;
  showFeedback: (message: FeedbackMessage) => void;
  clearFeedback: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);

  const showFeedback = (message: FeedbackMessage) => {
    setFeedback(message);
    setTimeout(() => {
      setFeedback(null);
    }, 5000);
  };

  const clearFeedback = () => {
    setFeedback(null);
  };

  const value = {
    feedback,
    showFeedback,
    clearFeedback
  };

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
};