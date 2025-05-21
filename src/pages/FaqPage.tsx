import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/features/FaqAccordion';

const FaqPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ADHD, learning strategies, and our programs.
          </p>
        </div>
        
        <FaqAccordion />
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? We're here to help!
          </p>
          <Link 
            to="/contact" 
            className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;