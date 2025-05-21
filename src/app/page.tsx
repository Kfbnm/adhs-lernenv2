import { BrainCircuit, BookOpen, Sparkles, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero-Bereich */}
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
                  href="/registrieren" 
                  className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors inline-flex items-center justify-center"
                >
                  <Sparkles className="mr-2" size={20} />
                  Kostenlose 5-Tage-Challenge starten
                </Link>
                <Link 
                  href="/kurse" 
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
                alt="Student lernt mit ADHS" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funktionen */}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tägliche Mini-Challenges</h3>
              <p className="text-gray-600">
                Kleine, überschaubare Lektionen, die in Ihren Tag passen und die Motivation durch schnelle Erfolge hochhalten.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fortschrittsverfolgung</h3>
              <p className="text-gray-600">
                Verfolgen Sie Ihre Lernreise mit visuellen Fortschrittsindikatoren, die jeden Schritt nach vorne feiern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}