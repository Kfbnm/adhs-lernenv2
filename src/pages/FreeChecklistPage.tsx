import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ChecklistDownload from '../components/features/ChecklistDownload';

const FreeChecklistPage: React.FC = () => {
  const { user } = useAuth();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/register" replace />;
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Your Free ADHD Learning Checklist</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thanks for joining! Download your free checklist and start implementing effective ADHD learning strategies today.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <ChecklistDownload />
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student with checklist" 
                className="rounded-lg shadow-lg w-full"
              />
              
              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready for the next step?</h3>
                <p className="text-gray-600 mb-4">
                  Maximize your learning potential with our 5-day ADHD Learning Challenge. It's completely free and designed to give you quick wins.
                </p>
                <Link 
                  to="/dashboard" 
                  className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
                >
                  Start 5-Day Challenge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeChecklistPage;