import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuth } from '../context/AuthContext';

interface AuthPageProps {
  type: 'login' | 'register';
}

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  const { user } = useAuth();
  
  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="pt-24 pb-16 min-h-[calc(100vh-64px)] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <div className="bg-blue-50 rounded-lg p-8 relative h-full">
                <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-lg"></div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {type === 'login' ? 'Welcome Back!' : 'Join Our Community'}
                </h2>
                <p className="text-blue-800 mb-6">
                  {type === 'login'
                    ? 'Access your ADHD learning tools and continue your progress on mastering effective learning strategies.'
                    : 'Create your account to access our specialized ADHD learning resources, including the free 5-day challenge.'}
                </p>
                
                <img 
                  src={
                    type === 'login'
                      ? "https://images.pexels.com/photos/6457517/pexels-photo-6457517.jpeg?auto=compress&cs=tinysrgb&w=800"
                      : "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800"
                  } 
                  alt={type === 'login' ? "Student logging in" : "New student registering"} 
                  className="rounded-lg shadow-md mb-6"
                />
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-blue-800">
                      {type === 'login'
                        ? "Resume your learning journey"
                        : "Access our free 5-day challenge"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-blue-800">
                      {type === 'login'
                        ? "Track your learning progress"
                        : "Download our free ADHD checklist"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-blue-800">
                      {type === 'login'
                        ? "Access all your resources"
                        : "Option to upgrade to premium later"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {type === 'login' ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;