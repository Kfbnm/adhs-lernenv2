import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StripeCheckout from '../components/features/StripeCheckout';

const PremiumPage: React.FC = () => {
  const { user } = useAuth();
  
  // Redirect if already premium
  if (user?.hasPremium) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Upgrade to Premium</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock the full 30-day ADHD Learning Challenge and transform your learning experience.
          </p>
        </div>
        
        <StripeCheckout />
        
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Go Premium?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Extended Learning Journey</h3>
              <p className="text-gray-600">
                While our 5-day challenge introduces fundamental concepts, the 30-day premium program builds a comprehensive learning system tailored to your ADHD brain.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced Techniques</h3>
              <p className="text-gray-600">
                Access advanced focus techniques, emotional regulation strategies, and specialized methods for deep work that aren't covered in the free challenge.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personalized Learning Strategy</h3>
              <p className="text-gray-600">
                The premium program guides you through creating a completely personalized learning strategy based on your unique ADHD profile and needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lifetime Access</h3>
              <p className="text-gray-600">
                Your one-time payment gives you lifetime access to all premium materials, allowing you to revisit them whenever you need a refresher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;