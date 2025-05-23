import React, { useState, useEffect } from 'react';

const LOADER_DISPLAY_DURATION = 1000;
const FADE_OUT_DURATION = 200;

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, LOADER_DISPLAY_DURATION);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, LOADER_DISPLAY_DURATION + FADE_OUT_DURATION);


        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white font-mono relative overflow-hidden transition-opacity duration-${FADE_OUT_DURATION} ease-out ${ // Usar variable de duración
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            {/* Fondo Animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 opacity-20 blur-xl animate-pulse"></div>

            {/* Texto "Loading" */}
            <span
                className="text-3xl sm:text-4xl font-bold tracking-wide animate-pulse z-10"
                aria-label="Cargando contenido">
                Loading...
            </span>

            {/* Spinner */}
            <div className="mt-8 w-16 h-16 border-4 border-t-blue-400 border-r-teal-400 border-b-green-400 border-l-transparent rounded-full animate-spin z-10"></div> {/* Añadir z-10 */}
        </div>
    );
};

export default Loader;