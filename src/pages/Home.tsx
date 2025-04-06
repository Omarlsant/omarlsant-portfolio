import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const Home: React.FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log('Particles container loaded', container);
    }, []);

    const particleOptions: ISourceOptions = {
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 20, duration: 0.4 },
            },
        },
        particles: {
            color: { value: '#ffffff' },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: { enable: true },
                value: 80,
            },
            opacity: { value: 0.6 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (!init) {
        return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Cargando...</div>;
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Componente Particles: Añadimos pointer-events-none */}
            <Particles
                id="tsparticles"
                options={particleOptions}
                particlesLoaded={particlesLoaded}
                //                                      👇👇👇 ¡Aquí está la clave!
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Contenedor de la Terminal (z-10 asegura que esté sobre z-0) */}
            <div className="relative z-10 font-mono p-4 sm:p-6 rounded-lg shadow-xl max-w-2xl w-[90%] border border-gray-700 bg-black bg-opacity-40 backdrop-blur-sm">
                 {/* Controles Falsos */}
                <div className="flex items-center mb-4 pb-2 border-b border-gray-700">
                    <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                    <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                    <span className="ml-auto text-xs text-gray-400">~/omarlsant-portfolio</span>
                </div>

                 {/* Área de Texto */}
                 <div className="h-48 sm:h-64 overflow-y-auto text-sm mb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    <p className="text-green-400">
                        <span className="text-blue-400">user@omarlsant-portfolio:</span>
                        <span className="text-gray-300">~$ </span>
                        <TypeAnimation
                             sequence={[ /* ...tu secuencia... */ ]}
                            wrapper="span"
                            speed={35}
                            repeat={0} // Cambiado a 0 para que no repita todo
                            cursor={true}
                            style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                        />
                    </p>
                </div>

                {/* Área de "Comandos" */}
                <div className="mt-auto pt-4 border-t border-gray-700 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    <span className="text-gray-500 hidden sm:inline">Comandos:</span>
                    <Link to="/projects" className="text-green-400 hover:text-white hover:underline">show projects</Link>
                    <Link to="/about" className="text-green-400 hover:text-white hover:underline">whoami</Link>
                    <Link to="/skills" className="text-green-400 hover:text-white hover:underline">ls skills</Link>
                    <Link to="/contact" className="text-green-400 hover:text-white hover:underline">contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;