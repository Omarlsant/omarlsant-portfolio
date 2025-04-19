// src/pages/Contact.tsx (o donde lo quieras ubicar)

import React from 'react';
import ContactForm from '../components/ContactForm'; // Asegúrate que la ruta sea correcta

const Contact: React.FC = () => {
  return (
    // Contenedor principal de la página/sección
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">

        {/* Título de la sección */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-4">
          Ponte en Contacto
        </h1>
        {/* Texto introductorio opcional */}
        <p className="mt-2 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8">
          ¿Tienes alguna pregunta o quieres trabajar juntos? Completa el formulario y me pondré en contacto contigo lo antes posible.
        </p>

        {/* Contenedor del formulario con fondo y sombra */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl rounded-lg p-6 sm:p-8">
           {/* Renderiza el componente del formulario */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;