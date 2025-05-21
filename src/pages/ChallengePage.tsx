import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Crown, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useFeedback } from '../context/FeedbackContext';
import { freeChallenge, premiumChallenge } from '../data/challenges';
import { Challenge } from '../types';
import PremiumBadge from '../components/shared/PremiumBadge';

const ChallengePage: React.FC = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const { user, markDayComplete } = useAuth();
  const { showFeedback } = useFeedback();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [completed, setCompleted] = useState(false);
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  const day = parseInt(dayId || '1', 10);
  const challenges = user.hasPremium ? premiumChallenge : freeChallenge;
  
  useEffect(() => {
    // Find the challenge for this day
    const currentChallenge = challenges.find(c => c.day === day);
    if (currentChallenge) {
      setChallenge(currentChallenge);
      setCompleted(user.completedDays.includes(day));
    }
    
    // Scroll to top when day changes
    window.scrollTo(0, 0);
  }, [day, challenges, user.completedDays]);
  
  // Check if this is premium content that user doesn't have access to
  const isPremiumLocked = challenge?.isPremium && !user.hasPremium;
  
  const handleComplete = () => {
    if (challenge) {
      markDayComplete(challenge.day);
      setCompleted(true);
      showFeedback({
        type: 'success',
        message: `Day ${challenge.day} completed! Great job!`
      });
    }
  };
  
  const nextDay = Math.min(day + 1, challenges.length);
  const prevDay = Math.max(day - 1, 1);
  
  if (!challenge) {
    return (
      <div className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Challenge day not found</h1>
          <Link 
            to="/dashboard" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }
  
  if (isPremiumLocked) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Crown size={64} className="mx-auto text-amber-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Premium Content</h1>
            <p className="text-xl text-gray-600 mb-6">
              This lesson is part of our premium 30-day challenge. Upgrade to access all 30 days of content.
            </p>
            <Link 
              to="/premium" 
              className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded-full">
                Day {challenge.day}
              </span>
              {challenge.isPremium && <PremiumBadge />}
              {completed && (
                <span className="text-green-600 flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  <span className="text-sm font-medium">Completed</span>
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{challenge.title}</h1>
          </div>
          
          <Link 
            to="/dashboard" 
            className="text-blue-600 hover:text-blue-800 font-medium mt-2 md:mt-0"
          >
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Focus</h2>
            <p className="text-gray-600 mb-6">
              {challenge.description}
            </p>
            
            <div className="prose max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Pro Tip:</strong> As you go through today's lesson, try to relate the content to your personal experiences. This helps ADHD brains better retain information through meaningful connections.
                </p>
              </div>
              
              <p>
                {challenge.content}
              </p>
              
              {/* This would be replaced with actual content */}
              <h3>Exercise: Practice Applying Today's Strategy</h3>
              <p>
                Take 10 minutes to apply what you've learned today to a real-life situation. This could be setting up your study environment, trying a new time management technique, or practicing a memory exercise.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
                <h4 className="font-medium mb-2">Reflection Questions:</h4>
                <ul className="list-disc ml-5 space-y-2">
                  <li>How did today's strategy feel when you tried it?</li>
                  <li>What aspects worked well for your ADHD brain?</li>
                  <li>What modifications might you make to better suit your needs?</li>
                  <li>Where else could you apply this strategy in your life?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            {day > 1 && (
              <Link 
                to={`/challenge/${prevDay}`}
                className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg inline-flex items-center"
              >
                <ArrowLeft size={16} className="mr-1" />
                Previous Day
              </Link>
            )}
            
            {day < challenges.length && (
              <Link 
                to={`/challenge/${nextDay}`}
                className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg inline-flex items-center"
              >
                Next Day
                <ArrowRight size={16} className="ml-1" />
              </Link>
            )}
          </div>
          
          <button
            onClick={handleComplete}
            disabled={completed}
            className={`py-2 px-6 font-medium rounded-lg inline-flex items-center ${
              completed 
                ? 'bg-green-100 text-green-800 cursor-default'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {completed ? (
              <>
                <CheckCircle size={16} className="mr-1" />
                Completed
              </>
            ) : (
              'Mark as Complete'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;