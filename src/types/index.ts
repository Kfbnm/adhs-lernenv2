export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  hasPremium: boolean;
  completedDays: number[];
  downloads: string[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface Challenge {
  id: number;
  day: number;
  title: string;
  description: string;
  content: string;
  isPremium: boolean;
}

export interface FeedbackMessage {
  type: 'success' | 'error' | 'info';
  message: string;
}