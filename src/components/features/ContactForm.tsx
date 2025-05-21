import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFeedback } from '../../context/FeedbackContext';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showFeedback } = useFeedback();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await sendEmail({
        to: 'kevinja201@gmail.com',
        from: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (response.success) {
        showFeedback({
          type: 'success',
          message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen!',
        });
        reset();
      } else {
        showFeedback({
          type: 'error',
          message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        });
      }
    } catch (error) {
      showFeedback({
        type: 'error',
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Max Mustermann"
          {...register('name', { required: 'Name ist erforderlich' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-Mail-Adresse
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
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Betreff
        </label>
        <input
          id="subject"
          type="text"
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ihr Betreff"
          {...register('subject', { required: 'Betreff ist erforderlich' })}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Nachricht
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ihre Nachricht..."
          {...register('message', { 
            required: 'Nachricht ist erforderlich',
            minLength: {
              value: 10,
              message: 'Die Nachricht sollte mindestens 10 Zeichen lang sein'
            }
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Wird gesendet...'
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Nachricht senden
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;