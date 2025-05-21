import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit size={24} className="text-blue-300" />
              <span className="text-xl font-bold">ADHS Lernen</span>
            </div>
            <p className="text-blue-200 max-w-xs">
              Wir befähigen Menschen mit ADHS, ihr volles Lernpotenzial durch spezialisierte Strategien und Unterstützung zu entfalten.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/courses" className="text-blue-200 hover:text-white transition-colors">Kurse</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/free-checklist" className="text-blue-200 hover:text-white transition-colors">Free ADHD Checklist</Link></li>
              <li><Link to="/courses" className="text-blue-200 hover:text-white transition-colors">5-Day Challenge</Link></li>
              <li><Link to="/courses" className="text-blue-200 hover:text-white transition-colors">30-Day Program</Link></li>
              <li><Link to="/blog" className="text-blue-200 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Email: contact@adhdlearn.com</li>
              <li>Phone: +49 123 456789</li>
              <li>Address: Berlin, Germany</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} ADHD Learn. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;