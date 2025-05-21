import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Clock, Calendar, BookOpen } from 'lucide-react';
import ChallengeCard from '../components/features/ChallengeCard';
import { freeChallenge } from '../data/challenges';
import { useAuth } from '../context/AuthContext';

const CoursesPage: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">Our Learning Programs</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Choose the program that fits your needs. Start with our free 5-day challenge or dive deeper with our premium 30-day program.
        </p>
        
        {/* Free Challenge */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-50 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5-Day ADHD Learning Challenge</h2>
                <p className="text-gray-600 mb-4">
                  A perfect introduction to ADHD-optimized learning strategies. Get quick wins and immediate results.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock size={20} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">5-10 minutes per day</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">5 days of content</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={20} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">Essential ADHD learning foundations</span>
                  </div>
                </div>
                
                <div className="bg-green-100 text-green-800 font-medium py-2 px-4 rounded-lg inline-flex items-center mb-6">
                  <span className="mr-1">✓</span> Free
                </div>
                
                {user ? (
                  <Link
                    to="/dashboard"
                    className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors text-center"
                  >
                    Go to Challenge
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors text-center"
                  >
                    Start Free Challenge
                  </Link>
                )}
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Understanding your ADHD brain</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Creating an effective study environment</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Time management techniques for ADHD</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Memory techniques for ADHD</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Building sustainable learning habits</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {freeChallenge.slice(0, 3).map(challenge => (
                    <ChallengeCard 
                      key={challenge.id}
                      challenge={challenge}
                      isCompleted={user?.completedDays.includes(challenge.day) || false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Challenge */}
        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <div className="bg-amber-100 text-amber-800 font-medium py-1 px-3 rounded-full flex items-center">
                <Crown size={16} className="mr-1" />
                Premium
              </div>
            </div>
            
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3">30-Day ADHD Learning Challenge</h2>
                <p className="text-blue-100 mb-4">
                  A comprehensive program to transform your learning approach and build lasting strategies for success.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Clock size={20} className="text-blue-300 mr-2" />
                    <span className="text-white">15-20 minutes per day</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-300 mr-2" />
                    <span className="text-white">30 days of structured content</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={20} className="text-blue-300 mr-2" />
                    <span className="text-white">Advanced techniques & personalized strategies</span>
                  </div>
                </div>
                
                <div className="bg-amber-500 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center mb-6">
                  <span>€20</span>
                  <span className="text-sm ml-1">one-time payment</span>
                </div>
                
                {user && user.hasPremium ? (
                  <Link
                    to="/dashboard"
                    className="py-2 px-6 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow transition-colors text-center"
                  >
                    Access Premium Content
                  </Link>
                ) : (
                  <Link
                    to="/premium"
                    className="py-2 px-6 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow transition-colors text-center"
                  >
                    Get Premium Access
                  </Link>
                )}
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Premium Benefits:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">All content from the 5-day challenge</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Advanced focus techniques</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Emotional regulation during study</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Deep work strategies for ADHD</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Personalized learning strategy creation</span>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-amber-100 rounded-full p-1 mt-0.5 mr-2">
                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Additional downloadable resources</span>
                    </div>
                  </div>
                </div>
                
                <img 
                  src="https://images.pexels.com/photos/5797913/pexels-photo-5797913.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Student with ADHD studying effectively" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;