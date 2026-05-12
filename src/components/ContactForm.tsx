import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitSuccess(null);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ 
           name: formData.name, 
           email: formData.email, 
           message: formData.message 
        }]);

      if (error) throw error;

      setSubmitMessage("Thank you for your message! I'll be in touch soon.");
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (error: any) {
      console.error('Error sending message:', error.message);
      setSubmitMessage("There was an error sending your message. Please try again.");
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto w-full">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name</label>
        <div className="mt-2">
          <input
            type="text" name="name" id="name" required
            value={formData.name} onChange={handleChange}
            disabled={isSubmitting || submitSuccess === true}
            className="block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 transition-colors"
            placeholder="John Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address</label>
        <div className="mt-2">
          <input
            id="email" name="email" type="email" required
            value={formData.email} onChange={handleChange}
            disabled={isSubmitting || submitSuccess === true}
            className="block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Message</label>
        <div className="mt-2">
          <textarea
            id="message" name="message" rows={4} required
            value={formData.message} onChange={handleChange}
            disabled={isSubmitting || submitSuccess === true}
            className="block w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 disabled:opacity-50 resize-y transition-colors"
            placeholder="How can I help you?"
          />
        </div>
      </div>

      {submitMessage && (
        <div className={`p-4 rounded-md text-sm font-medium ${submitSuccess ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
          {submitMessage}
        </div>
      )}

      <div>
        <button
          type="submit" disabled={isSubmitting || submitSuccess === true}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {submitSuccess === true && (
         <p className="text-sm text-center text-slate-500 mt-4">
            If you wish to send another message, please refresh the page.
         </p>
      )}
    </form>
  );
};

export default ContactForm;