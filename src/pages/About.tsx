import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const professionalSummary = `Administrador bancario en reinvención profesional hacia el sector Tech. Soy una persona con sólidos valores, responsable, comprometido y con una motivación constante por aprender. Me adapto rápidamente a nuevos desafíos, disfruto aportando ideas creativas y puedo trabajar eficazmente bajo presión. Mi genuino interés por la tecnología impulsa mi aprendizaje continuo. Busco una oportunidad para aplicar mis conocimientos en un entorno profesional y contribuir al éxito del equipo.`;
    const technicalSkills = [
        { category: 'Lenguajes', skills: ['JavaScript', 'TypeScript', 'Python', 'C'] },
        { category: 'Frontend', skills: ['React', 'Vite', 'Sass', 'Tailwind CSS', 'npm'] },
        { category: 'Backend', skills: ['Node.js', 'Express', 'MySQL', 'API REST', 'JWT'] },
        { category: 'Testing', skills: ['Jest', 'Supertest', 'Pytest', 'Unittest'] },
        { category: 'DevOps & Herramientas', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
    ];
    const softSkills = [
        'Trabajo en equipo',
        'Orientado a la calidad',
        'Comunicación efectiva',
        'Resolución de conflictos',
        'Rápida adaptabilidad',
        'Noción sobre accesibilidad (WCAG)',
    ];
    const education = [
        { title: 'Desarrollador IA', institution: 'Factoría F5', dates: 'Ene 2025 - Presente', duration: '1250H', current: true },
        { title: 'Desarrollador Full Stack', institution: 'Factoría F5', dates: 'Jun 2024 - Dic 2024', duration: '850H' },
        { title: 'Administración Bancaria', institution: 'IFB Certus', dates: 'Mar 2015 - Oct 2018' },
    ];
     const experience = [
        {
            role: 'Asistente Comercial',
            company: 'Snowboarding S.A',
            location: 'Perú',
            dates: 'Abr 2018 - Ago 2019',
            description: [
                'Generación de informes de rendimiento de ventas y tendencias.',
                'Presentación de resultados a equipos de ventas y gerencia.',
                'Procesamiento de pedidos y verificación de stock.',
                'Coordinación logística y mantenimiento de CRM.',
            ]
        }
    ];
    const volunteering = {
        role: 'User Tester',
        organization: 'Fundación Telefónica',
        dates: 'Nov 2024 (8h)',
        platforms: 'Marte y Saturno',
        description: 'Participé en sesiones de testing de usuario para dos plataformas, identificando fallos y proporcionando feedback detallado basado en mi formación técnica emergente.',
    };
    const languages = [
        { lang: 'Español', level: 'Nativo' },
        { lang: 'Inglés', level: 'Intermedio B2' },
        { lang: 'Italiano', level: 'Básico' },
    ];

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollButton && window.scrollY > 400) {
                setShowScrollButton(true);
            } else if (showScrollButton && window.scrollY <= 400) {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollButton]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const renderSkillBadge = (skill: string, index: number) => (
        <span key={index} className="inline-block bg-teal-100 text-teal-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full dark:bg-teal-900 dark:text-teal-300">
            {skill}
        </span>
    );

    return (
        <section id="about" className="py-16 md:py-24 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">

                <div className="flex justify-center mb-10">
                    <img
                        src="/fotoCurso.jpg"
                        alt="profile-pic"
                        className="w-26 h-26 sm:w-34 sm:h-34 md:w-42 md:h-42 lg:w-50 lg:h-50 rounded-full object-cover border-4 border-teal-500 dark:border-teal-400 shadow-lg"
                    />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Sobre Mí
                </h2>

                <div className="text-center mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Mi Trayectoria</h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                        {professionalSummary}
                    </p>
                </div>

                 <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Habilidades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Técnicas</h4>
                            {technicalSkills.map((categoryData, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{categoryData.category}</h5>
                                    <div className="flex flex-wrap">
                                        {categoryData.skills.map(renderSkillBadge)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Blandas</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                {softSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                 <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Educación</h3>
                     <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-teal-500">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title} {edu.current && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ml-2">En curso</span>}</h4>
                                <p className="text-md text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.dates} {edu.duration && `(${edu.duration})`}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                     <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Experiencia Previa</h3>
                     {experience.map((exp, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-gray-500">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                                <p className="text-md text-gray-600 dark:text-gray-400">{exp.company} ({exp.location})</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.dates}</p>
                            </div>
                        ))}
                     <p className="mt-4 text-center text-gray-600 dark:text-gray-400 italic">
                         Esta experiencia me brindó valiosas habilidades transferibles mientras iniciaba mi transición al sector tecnológico.
                    </p>
                 </div>

                <div className="mb-12">
                     <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Voluntariado y Contribuciones</h3>
                     <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-blue-500">
                         <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{volunteering.role} - {volunteering.organization}</h4>
                         <p className="text-sm text-gray-500 dark:text-gray-500">{volunteering.dates}</p>
                         <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">{volunteering.description} (Plataformas: {volunteering.platforms})</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Idiomas</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {languages.map((lang, index) => (
                            <div key={index} className="text-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{lang.lang}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    className={`fixed bottom-5 right-5 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 ${
                        showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90' // Transición suave
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}

        </section>
    );
}

export default About;