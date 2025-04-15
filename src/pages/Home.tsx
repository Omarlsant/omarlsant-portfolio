import React from 'react'; // No necesita useEffect, useState, useCallback para particles
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
// --- Imports de Particles ELIMINADOS ---

const Home: React.FC = () => {

    const welcomeSequence = [
        'Iniciando sesión...', 800,
        'Autenticando usuario: guest...', 600,
        'Acceso concedido.', 400,
        '¡Bienvenido/a al portfolio de Omar Lengua! 👋\n', 1200,
        'Soy un Desarrollador Full Stack apasionado por crear experiencias digitales interactivas y eficientes.', 1500,
        'Utiliza los siguientes comandos para explorar:', 500,
        '  show projects    -> Ver mis trabajos', 300,
        '  whoami           -> Conocer más sobre mí', 300,
        '  ls skills        -> Listar mis habilidades', 300,
        '  contact          -> Ponerme en contacto', 1000,
        'Esperando comando...',
    ];

    return (
        <div className="flex flex-col items-center justify-center text-white p-4 py-16 md:py-24">


            <div className="flex flex-col items-center gap-8 w-full max-w-4xl">

                <header className="flex flex-col items-center text-center max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3">
                        Omar Lengua
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-4">
                        Full Stack Developer
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Transformando ideas complejas en soluciones web elegantes, intuitivas y eficientes. Enfocado en código limpio y experiencias de usuario memorables.
                    </p>
                </header>

                <div className="font-mono p-5 sm:p-7 rounded-lg shadow-xl max-w-2xl w-[90%] border border-gray-700 bg-black bg-opacity-75 backdrop-blur-md text-sm sm:text-base">
                    <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
                        <span className="h-3 w-3 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"></span>
                        <span className="ml-auto text-xs text-gray-400 truncate">~/omarlsant-portfolio</span>
                    </div>

                    <div className="h-48 sm:h-56 md:h-64 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
                        <span className="text-green-400">guest@omarlsant-portfolio:</span>
                        <span className="text-blue-500">~$ </span>
                        <TypeAnimation
                            sequence={welcomeSequence}
                            wrapper="span"
                            speed={60}
                            repeat={2}
                            cursor={true}
                            style={{ whiteSpace: 'pre-line', display: 'inline-block', verticalAlign: 'bottom' }}
                            aria-label="Bienvenida y comandos de la terminal interactiva"
                        />
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-700 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="text-gray-500 hidden sm:inline mr-1">Comandos:</span>
                        <Link to="/projects" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">show projects</Link>
                        <Link to="/about" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">whoami</Link>
                        <Link to="/skills" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">ls skills</Link>
                        <Link to="/contact" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;