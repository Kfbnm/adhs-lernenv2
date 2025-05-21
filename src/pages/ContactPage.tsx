import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bei Fragen wenden Sie sich bitte direkt an: <br />
            <a href="mailto:kevin-schilling@gmx.net" className="text-blue-600 hover:text-blue-800">
              kevin-schilling@gmx.net
            </a>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Schreiben Sie uns</h3>
            <a href="mailto:kevin-schilling@gmx.net" className="text-blue-600 hover:text-blue-800">
              kevin-schilling@gmx.net
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Rufen Sie uns an</h3>
            <a href="tel:+491234567890" className="text-blue-600 hover:text-blue-800">
              +49 123 456 7890
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Besuchen Sie uns</h3>
            <address className="not-italic text-gray-600">
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;