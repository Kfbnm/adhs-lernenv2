import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, LockKeyhole } from 'lucide-react';
import { Challenge } from '../../types';
import PremiumBadge from '../shared/PremiumBadge';
import { useAuth } from '../../context/AuthContext';

interface ChallengeCardProps {
  challenge: Challenge;
  isCompleted?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, isCompleted = false }) => {
  const { user } = useAuth();
  const isPremiumLocked = challenge.isPremium && (!user || !user.hasPremium);
  
  return (
    <div 
      className={`rounded-lg overflow-hidden border transition-all duration-300 ${
        isCompleted 
          ? 'bg-green-50 border-green-200' 
          : isPremiumLocked 
            ? 'bg-gray-50 border-gray-200' 
            : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Day {challenge.day}
            </span>
            {challenge.isPremium && <PremiumBadge />}
            {isCompleted && (
              <span className="text-green-600 flex items-center">
                <CheckCircle size={16} className="mr-1" />
                <span className="text-xs font-medium">Completed</span>
              </span>
            )}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
        <p className="text-gray-600 mb-4">{challenge.description}</p>
        
        {isPremiumLocked ? (
          <div className="flex items-center space-x-2">
            <LockKeyhole size={16} className="text-gray-400" />
            <Link 
              to="/premium" 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Unlock with Premium Access
            </Link>
          </div>
        ) : (
          <Link 
            to={`/challenge/${challenge.day}`} 
            className={`text-blue-600 hover:text-blue-800 font-medium ${
              isCompleted ? 'hover:underline' : 'underline'
            }`}
          >
            {isCompleted ? 'Review again' : 'Start this lesson'}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;