// src/pages/Contact.tsx

import React from 'react';
import ContactForm from '../components/ContactForm'; // Ensure the path is correct

const Contact: React.FC = () => {
  return (
    // Main page/section container
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mx-auto">

        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-4">
          Get in Touch
        </h1>
        {/* Optional introductory text */}
        <p className="mt-2 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
          Have a question or want to work together? Fill out the form, and I'll get back to you as soon as possible.
        </p>

        {/* Form container with background and shadow */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl rounded-lg p-6 sm:p-8">
           {/* Render the form component */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;