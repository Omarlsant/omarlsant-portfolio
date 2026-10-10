import React, { useState, useEffect } from 'react';

const LOADER_DISPLAY_DURATION = 1000;
const FADE_OUT_DURATION = 200;

interface LoaderProps {
    onFinish?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (!onFinish) return;

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
            className={`min-h-[50vh] flex flex-col items-center justify-center py-20 transition-opacity duration-200 ease-out ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-sky-100 border-t-sky-600 rounded-full animate-spin"></div>
            </div>
            <span
                className="mt-4 text-sm font-medium text-slate-500 tracking-wide"
                aria-label="Cargando contenido"
            >
                Loading...
            </span>
        </div>
    );
};

export default Loader;