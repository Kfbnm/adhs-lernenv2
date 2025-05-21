import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, BookOpen, Sparkles, Zap, CheckCircle } from 'lucide-react';
import TestimonialCard from '../components/features/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Effektiv lernen mit ADHS
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Entdecken Sie Strategien, Techniken und Unterstützung, die speziell für ADHS-Gehirne entwickelt wurden. Entfesseln Sie Ihr Lernpotenzial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
                >
                  <Sparkles className="mr-2" size={20} />
                  Kostenlose 5-Tage-Herausforderung starten
                </Link>
                <Link 
                  to="/courses" 
                  className="py-3 px-6 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium rounded-lg shadow-sm transition-colors inline-flex items-center justify-center"
                >
                  <BookOpen className="mr-2" size={20} />
                  Alle Kurse entdecken
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg" 
                alt="Student learning with ADHD" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wie wir Ihnen helfen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unser Ansatz ist speziell auf ADHS-Gehirne zugeschnitten und konzentriert sich auf das, was für Ihr einzigartiges Gehirn funktioniert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BrainCircuit className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ADHS-optimierte Strategien</h3>
              <p className="text-gray-600">
                Lernen Sie Techniken, die speziell für die Art und Weise entwickelt wurden, wie das ADHS-Gehirn Informationen verarbeitet und speichert.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tägliche Herausforderungen in kleinen Portionen</h3>
              <p className="text-gray-600">
                Kleine, überschaubare Lektionen, die in Ihren Tag passen und die Motivation durch schnelle Erfolge hoch halten.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fortschrittsverfolgung</h3>
              <p className="text-gray-600">
                Verfolgen Sie Ihre Reise mit visuellen Fortschrittsindikatoren, die jeden Schritt nach vorne feiern.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Checklist CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Holen Sie sich Ihre kostenlose ADHS-Lern-Checkliste</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laden Sie unsere umfassende Checkliste herunter, um Ihren Lernstil zu identifizieren und personalisierte ADHS-Lernstrategien zu erhalten.
          </p>
          <Link 
            to="/free-checklist" 
            className="py-3 px-6 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
          >
            Kostenlose Checkliste herunterladen
          </Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Was unsere Nutzer sagen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hören Sie von Menschen, die ihr Lernerlebnis mit unserem ADHS-fokussierten Ansatz transformiert haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah K."
              image="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={5}
              testimonial="Die 30-Tage-Herausforderung hat völlig verändert, wie ich an das Lernen herangehe. Zum ersten Mal habe ich das Gefühl, dass ich Strategien habe, die mit meinem ADHS-Gehirn arbeiten, anstatt dagegen!"
            />
            
            <TestimonialCard 
              name="Michael T."
              image="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={4}
              testimonial="Ich war zunächst skeptisch, aber selbst die kostenlose 5-Tage-Herausforderung gab mir Techniken, die ich jeden Tag anwende. Der strukturierte Ansatz hilft mir wirklich, auf Kurs zu bleiben."
            />
            
            <TestimonialCard 
              name="Alicia M."
              image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
              rating={5}
              testimonial="Als Elternteil eines Kindes mit ADHS waren diese Ressourcen von unschätzbarem Wert. Wir haben deutliche Verbesserungen bei der Konzentration und dem Selbstvertrauen bei den Hausaufgaben festgestellt."
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finden Sie Antworten auf häufige Fragen zu ADHS und Lernstrategien.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Wie beeinflusst ADHS das Lernen?</h3>
              <p className="text-gray-600">
                ADHS kann das Lernen durch Herausforderungen bei der Aufmerksamkeitsspanne, dem Arbeitsgedächtnis und den exekutiven Funktionen beeinflussen. Menschen mit ADHS haben jedoch oft Stärken in Kreativität, Hyperfokus auf interessante Themen und dem Denken außerhalb der Box.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Ist Medikation notwendig, um von diesen Techniken zu profitieren?</h3>
              <p className="text-gray-600">
                Nein, während Medikamente vielen Menschen mit ADHS helfen, können alle unsere Techniken nützlich sein, unabhängig davon, ob Sie Medikamente einnehmen oder nicht. Unsere Ansätze konzentrieren sich darauf, mit den natürlichen Tendenzen Ihres Gehirns zu arbeiten.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/faq" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Alle FAQs anzeigen
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit, Ihr Lernen zu transformieren?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Starten Sie mit unserer kostenlosen 5-Tage-Herausforderung und erleben Sie den Unterschied von ADHS-optimierten Lernstrategien.
          </p>
          <Link 
            to="/register" 
            className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
          >
            Jetzt starten – es ist kostenlos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;