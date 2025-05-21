import React, { useState } from 'react';
import { Download, FileCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useFeedback } from '../../context/FeedbackContext';

const ChecklistDownload: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const { user, addDownload } = useAuth();
  const { showFeedback } = useFeedback();
  
  const hasDownloadedChecklist = user?.downloads.includes('adhd-checklist');
  
  const handleDownload = () => {
    setDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // In a real app, this would initiate actual file download
      if (user) {
        addDownload('adhd-checklist');
      }
      
      showFeedback({
        type: 'success',
        message: 'Checklist downloaded successfully!'
      });
      
      setDownloading(false);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center mb-4">
        <FileCheck size={48} className="text-blue-600" />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">ADHD Learning Checklist</h3>
      
      <p className="text-gray-600 mb-6 text-center">
        Download our comprehensive checklist to help you identify your ADHD learning style and key strategies to improve focus and retention.
      </p>
      
      <div className="space-y-4">
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Identify your unique ADHD learning profile</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Essential strategies for focus and concentration</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Workspace organization tips for ADHD minds</span>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-100 rounded-full p-1 mt-0.5 mr-2">
              <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Memory enhancement techniques</span>
          </li>
        </ul>
        
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {downloading ? (
            'Downloading...'
          ) : hasDownloadedChecklist ? (
            <>
              <Download size={18} className="mr-2" />
              Download Again
            </>
          ) : (
            <>
              <Download size={18} className="mr-2" />
              Download Free Checklist
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ChecklistDownload;