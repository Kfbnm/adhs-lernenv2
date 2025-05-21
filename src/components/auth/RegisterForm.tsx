import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useFeedback } from '../../context/FeedbackContext';
import { UserPlus } from 'lucide-react';

interface RegisterFormData {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register: registerUser } = useAuth();
  const { showFeedback } = useFeedback();
  const navigate = useNavigate();
  
  const password = watch('password');
  
  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    
    try {
      const success = await registerUser(data.firstName, data.email, data.password);
      
      if (success) {
        showFeedback({
          type: 'success',
          message: 'Registrierung erfolgreich! Willkommen bei ADHS Lernen.'
        });
        navigate('/free-checklist');
      } else {
        showFeedback({
          type: 'error',
          message: 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.'
        });
      }
    } catch (error) {
      showFeedback({
        type: 'error',
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <UserPlus className="w-12 h-12 mx-auto text-blue-600 mb-2" />
        <h2 className="text-2xl font-bold text-gray-900">Konto erstellen</h2>
        <p className="text-gray-600">Werden Sie Teil unserer Community und starten Sie Ihre ADHS-Lernreise</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Vorname
          </label>
          <input
            id="firstName"
            type="text"
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ihr Vorname"
            {...register('firstName', { required: 'Vorname ist erforderlich' })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="ihre@email.de"
            {...register('email', { 
              required: 'E-Mail ist erforderlich',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ungültige E-Mail-Adresse'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Passwort
          </label>
          <input
            id="password"
            type="password"
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="••••••••"
            {...register('password', { 
              required: 'Passwort ist erforderlich',
              minLength: {
                value: 8,
                message: 'Passwort muss mindestens 8 Zeichen lang sein'
              }
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Passwort bestätigen
          </label>
          <input
            id="confirmPassword"
            type="password"
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="••••••••"
            {...register('confirmPassword', { 
              required: 'Bitte bestätigen Sie Ihr Passwort',
              validate: value => value === password || 'Passwörter stimmen nicht überein'
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Konto wird erstellt...' : 'Konto erstellen'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Bereits ein Konto?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
            Anmelden
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;