import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log('Form Data Submitted:', data);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('¡Mensaje enviado! (Simulación) Revisa la consola.');
    reset();
  };

  const onError = (validationErrors: typeof errors) => {
      console.error('Errores de validación:', validationErrors);
  }

  const baseInputClasses = "block w-full px-4 py-2 mt-1 border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
  const normalBorderClasses = "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400";
  const errorBorderClasses = "border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-400 dark:focus:ring-red-400 dark:focus:border-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="space-y-6"
      noValidate
    >
      {/* Campo Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          // 4. Registra el input con validaciones
          {...register('name', {
            required: 'El nombre es obligatorio',
            minLength: { value: 3, message: 'Mínimo 3 caracteres' },
            maxLength: { value: 50, message: 'Máximo 50 caracteres' },
          })}
          // 5. Aplica clases condicionales de Tailwind para errores
          className={`${baseInputClasses} ${errors.name ? errorBorderClasses : normalBorderClasses}`}
          aria-invalid={errors.name ? "true" : "false"} // Accesibilidad
        />
        {/* 6. Muestra el mensaje de error si existe */}
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Formato de email inválido',
            },
          })}
          className={`${baseInputClasses} ${errors.email ? errorBorderClasses : normalBorderClasses}`}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Campo Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', {
            required: 'El mensaje es obligatorio',
            minLength: { value: 10, message: 'Mínimo 10 caracteres' },
          })}
          className={`${baseInputClasses} ${errors.message ? errorBorderClasses : normalBorderClasses}`}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Botón de Envío */}
      <div>
        <button
          type="submit"
          // disabled={isSubmitting} // Deshabilita mientras se envía
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition duration-150 ease-in-out disabled:opacity-50"
        >
          {/* {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'} */}
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};

export default ContactForm;