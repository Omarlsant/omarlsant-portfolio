import React from 'react'; // No necesita useEffect, useState, useCallback para particles
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
// --- Imports de Particles ELIMINADOS ---

const Home: React.FC = () => {

    const welcomeSequence = [
        'Hi there, Welcome to my portfolio! 👋', 1200,
        'I am a Frontend Developer passionate about creating interactive and efficient digital experiences.', 1500,
        'Use the following commands to explore:', 500,
        '  show projects    -> View my projects', 300,
        '  whoami           -> Learn more about me', 300,
        '  Contact          -> Get in touch', 1000,
        'Awaiting command...',
    ];

    return (
        <div className="flex flex-col items-center justify-center text-white p-4 py-16 md:py-24">


            <div className="flex flex-col items-center gap-8 w-full max-w-4xl">

                <header className="flex flex-col items-center text-center max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3">
                        Omar Lengua
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-4">
                        Frontend Developer
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Welcome to my portfolio! Here you can find my projects, skills, and ways to contact me. I hope you enjoy your visit!<br />
                        <br />
                        <span className="text-green-200">Feel free to explore the site.</span><br />
                        <span className="text-green-200">You can also check out my GitHub and LinkedIn profiles.</span><br />
                        <span className="text-green-200">If you have any questions, don't hesitate to reach out.</span><br />
                        <span className="text-green-200">I am always open to new opportunities and collaborations.</span><br />
                        <span className="text-green-200">Use the terminal below to navigate.</span>
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
                        <span className="text-gray-500 hidden sm:inline mr-1">Commands:</span>
                        <Link to="/projects" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">show projects</Link>
                        <Link to="/about" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">whoami</Link>
                        <Link to="/contact" className="text-green-400 hover:text-white focus:text-white hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 rounded px-1 py-0.5">contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;