import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  upgradeToPremmium: () => void;
  markDayComplete: (day: number) => void;
  addDownload: (downloadId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user in localStorage
    const storedUser = localStorage.getItem('adhdUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // This would be an API call in a real app
      // For demo purposes, we'll mock a successful login
      const mockUser: User = {
        id: `user-${Date.now()}`,
        firstName: 'Demo',
        email,
        hasPremium: false,
        completedDays: [],
        downloads: []
      };
      
      setUser(mockUser);
      localStorage.setItem('adhdUser', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (firstName: string, email: string, password: string): Promise<boolean> => {
    try {
      // This would be an API call in a real app
      const mockUser: User = {
        id: `user-${Date.now()}`,
        firstName,
        email,
        hasPremium: false,
        completedDays: [],
        downloads: []
      };
      
      setUser(mockUser);
      localStorage.setItem('adhdUser', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adhdUser');
  };

  const upgradeToPremmium = () => {
    if (user) {
      const updatedUser = { ...user, hasPremium: true };
      setUser(updatedUser);
      localStorage.setItem('adhdUser', JSON.stringify(updatedUser));
    }
  };

  const markDayComplete = (day: number) => {
    if (user) {
      if (!user.completedDays.includes(day)) {
        const updatedUser = {
          ...user,
          completedDays: [...user.completedDays, day]
        };
        setUser(updatedUser);
        localStorage.setItem('adhdUser', JSON.stringify(updatedUser));
      }
    }
  };

  const addDownload = (downloadId: string) => {
    if (user) {
      if (!user.downloads.includes(downloadId)) {
        const updatedUser = {
          ...user,
          downloads: [...user.downloads, downloadId]
        };
        setUser(updatedUser);
        localStorage.setItem('adhdUser', JSON.stringify(updatedUser));
      }
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    upgradeToPremmium,
    markDayComplete,
    addDownload
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};