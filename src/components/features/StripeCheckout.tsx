import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Check, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useFeedback } from '../../context/FeedbackContext';

const StripeCheckout: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { upgradeToPremmium } = useAuth();
  const { showFeedback } = useFeedback();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate Stripe checkout and payment process
    setTimeout(() => {
      try {
        // Process payment and upgrade user account
        upgradeToPremmium();
        
        showFeedback({
          type: 'success',
          message: 'Payment successful! You now have premium access.'
        });
        
        navigate('/dashboard');
      } catch (error) {
        showFeedback({
          type: 'error',
          message: 'Payment failed. Please try again.'
        });
      } finally {
        setIsProcessing(false);
      }
    }, 2000);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-8 text-center">
          <Crown size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">30-Day ADHD Learning Challenge</h2>
          <p className="text-blue-100">Unlock your full learning potential with our comprehensive program</p>
          
          <div className="mt-6">
            <span className="text-4xl font-bold">€20</span>
            <span className="text-blue-200 ml-2">one-time payment</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">What's included:</h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Complete 30-day structured program with daily lessons</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Advanced ADHD learning techniques and strategies</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Personalized progress tracking</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Downloadable materials and resources</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>Lifetime access to all content</span>
            </li>
          </ul>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <AlertTriangle size={20} className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> This is a demo implementation. In a real application, you would be redirected to Stripe's secure payment platform.
              </p>
            </div>
          </div>
          
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing Payment...' : 'Purchase Now for €20'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            By purchasing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripeCheckout;