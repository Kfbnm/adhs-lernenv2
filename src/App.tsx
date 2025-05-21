import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Contexts
import { AuthProvider } from './context/AuthContext';
import { FeedbackProvider } from './context/FeedbackContext';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FeedbackAlert from './components/shared/FeedbackAlert';

// Page Components
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPages';
import DashboardPage from './pages/DashboardPage';
import FreeChecklistPage from './pages/FreeChecklistPage';
import ChallengePage from './pages/ChallengePage';
import PremiumPage from './pages/PremiumPage';

// For demo purposes, using a placeholder key - in a real app, this would be an environment variable
const stripePromise = loadStripe('pk_test_placeholder');

function App() {
  return (
    <AuthProvider>
      <FeedbackProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-gray-50">
              <FeedbackAlert />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<AuthPage type="login" />} />
                <Route path="/register" element={<AuthPage type="register" />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/free-checklist" element={<FreeChecklistPage />} />
                <Route path="/challenge/:dayId" element={<ChallengePage />} />
                <Route path="/premium" element={
                  <Elements stripe={stripePromise}>
                    <PremiumPage />
                  </Elements>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </FeedbackProvider>
    </AuthProvider>
  );
}

export default App;
