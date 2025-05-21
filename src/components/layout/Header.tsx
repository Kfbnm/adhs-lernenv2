import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <BrainCircuit size={28} className="text-blue-600" />
            <span className="text-xl font-bold text-blue-900">ADHD Learn</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/faq' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="py-2 px-4 bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors hover:bg-blue-200"
                >
                  My Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="py-2 px-4 text-gray-600 rounded-lg font-medium hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="py-2 px-4 text-blue-700 rounded-lg font-medium transition-colors hover:text-blue-900"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="py-2 px-4 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-gray-900"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                location.pathname === '/courses' ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                location.pathname === '/faq' ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="py-2 px-4 bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors hover:bg-blue-200"
                  onClick={closeMenu}
                >
                  My Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="py-2 px-4 text-left text-gray-600 rounded-lg font-medium hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="py-2 px-4 text-blue-700 rounded-lg font-medium transition-colors hover:text-blue-900"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="py-2 px-4 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;