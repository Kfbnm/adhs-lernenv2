import React from 'react';
import { Crown } from 'lucide-react';

interface PremiumBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PremiumBadge: React.FC<PremiumBadgeProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  };
  
  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };
  
  return (
    <div className={`inline-flex items-center rounded-full bg-amber-100 text-amber-800 font-medium ${sizes[size]} ${className}`}>
      <Crown size={iconSizes[size]} className="mr-1" />
      <span>Premium</span>
    </div>
  );
};

export default PremiumBadge;