import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Crown, BookOpen, Download, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ChallengeCard from '../components/features/ChallengeCard';
import { freeChallenge, premiumChallenge } from '../data/challenges';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [viewAll, setViewAll] = useState(false);
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  const challenges = user.hasPremium ? premiumChallenge : freeChallenge;
  const displayChallenges = viewAll ? challenges : challenges.slice(0, 6);
  const completedCount = user.completedDays.length;
  const totalCount = challenges.length;
  const progress = Math.round((completedCount / totalCount) * 100);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.firstName}!</h1>
          <p className="text-gray-600">
            Continue your ADHD learning journey. You've completed {completedCount} of {totalCount} days.
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">Your Progress</h2>
            <div className="flex items-center">
              {user.hasPremium ? (
                <div className="bg-amber-100 text-amber-800 rounded-full py-1 px-3 text-sm font-medium flex items-center">
                  <Crown size={16} className="mr-1" />
                  Premium Member
                </div>
              ) : (
                <Link 
                  to="/premium" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  Upgrade to Premium
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              )}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>{completedCount} completed</span>
            <span>{progress}%</span>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <BookOpen size={28} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Continue Learning</h3>
            <p className="text-gray-600 mb-3">
              {completedCount > 0 
                ? `Pick up where you left off on Day ${Math.min(completedCount + 1, totalCount)}.`
                : 'Start your learning journey with Day 1.'}
            </p>
            <Link 
              to={`/challenge/${Math.min(completedCount + 1, totalCount)}`}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              {completedCount > 0 ? 'Continue' : 'Start'} Challenge
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <Download size={28} className="text-green-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">ADHD Checklist</h3>
            <p className="text-gray-600 mb-3">
              {user.downloads.includes('adhd-checklist')
                ? 'Review your ADHD learning checklist anytime.'
                : 'Download your free ADHD learning checklist.'}
            </p>
            <Link 
              to="/free-checklist"
              className="text-green-600 hover:text-green-800 font-medium flex items-center"
            >
              {user.downloads.includes('adhd-checklist') ? 'View' : 'Get'} Checklist
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {!user.hasPremium && (
            <div className="bg-amber-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <Crown size={28} className="text-amber-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Upgrade to Premium</h3>
              <p className="text-gray-600 mb-3">
                Get access to our complete 30-day challenge with advanced strategies.
              </p>
              <Link 
                to="/premium"
                className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
              >
                Learn More
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          )}
          
          {user.hasPremium && (
            <div className="bg-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <BookOpen size={28} className="text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium Content</h3>
              <p className="text-gray-600 mb-3">
                Access all premium resources and advanced learning strategies.
              </p>
              <Link 
                to="/dashboard"
                className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
              >
                Browse Resources
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          )}
        </div>
        
        {/* Challenge Cards */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Challenge Days</h2>
            <button 
              onClick={() => setViewAll(!viewAll)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {viewAll ? 'Show Less' : 'View All'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayChallenges.map(challenge => (
              <ChallengeCard 
                key={challenge.id}
                challenge={challenge}
                isCompleted={user.completedDays.includes(challenge.day)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
