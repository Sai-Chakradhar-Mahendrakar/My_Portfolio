import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

// Custom Alert component
const Alert = ({ children, type }) => {
  return (
    <div className={`p-4 mb-4 rounded-md ${type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {children}
    </div>
  );
};

export default function ContactMe() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flashMessage, setFlashMessage] = useState(null);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwpeeeop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFlashMessage({ type: 'success', message: 'Message sent successfully!' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setFlashMessage({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFlashMessage({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFlashMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Me</h2>
        
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {flashMessage && (
            <Alert type={flashMessage.type}>
              {flashMessage.message}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              name="message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              <Send className="mr-2" size={16} />
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
          
          <div className="mt-6 flex justify-center space-x-8">
            <div className="flex items-center">
              <Mail className="text-red-500 mr-2" size={20} />
              <span className="text-sm">saichakradharrm@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-green-500 mr-2" size={20} />
              <span className="text-sm">+91 7989034578</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}