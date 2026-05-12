// src/pages/About.tsx
import React, { useState, useEffect } from 'react';
import { aboutData } from '../data/AboutData';
import profilePicSrc from '../assets/images/photo-omar-lengua.jpg';

const About: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => { setShowScrollButton(window.scrollY > 400); };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Estilos genéricos refactorizados (Light theme)
    const cardBaseStyles = "bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 p-6 sm:p-8 hover:border-sky-200 transition-colors duration-300";
    const sectionCardBaseStyles = "bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 mb-6";

    return (
        <section id="about" className="py-16 md:py-24 text-slate-800 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                
                {/* Header (Pic + Título) */}
                <div className="flex flex-col items-center mb-16 mt-4">
                    <img
                        src={profilePicSrc}
                        alt="Omar Lengua - Full Stack Developer"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl shadow-slate-300/50 mb-8" 
                    />
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                        About Me
                    </h2>
                    
                    <div className={`${cardBaseStyles} w-full max-w-4xl text-justify`}>
                        <p className="text-lg leading-relaxed text-slate-600">
                            {aboutData.professionalSummary}
                        </p>
                    </div>
                </div>

                {/* Professional Experience Section */}
                <div className="mb-16">
                     <h3 className="text-3xl font-bold mb-8 text-center text-slate-900">Professional Experience</h3>
                     {aboutData.experience.map((exp, index) => (
                            <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-l-slate-400`}>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h4 className="text-xl font-bold text-slate-900">{exp.role} <span className="text-sky-600 font-semibold text-lg">@ {exp.company}</span></h4>
                                    <span className="text-sm font-semibold bg-slate-200 text-slate-600 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.dates} {exp.duration}</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">{exp.location}</p>
                                <p className="text-base text-slate-700 leading-relaxed mb-4">{exp.description}</p>
                                <ul className="list-disc list-outside ml-5 text-slate-600 text-base space-y-2">
                                    {exp.descrip?.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                 </div>

                  {/* Skills Grid */}
                 <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-center text-slate-900">Capabilities</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className={cardBaseStyles}>
                            <h4 className="text-2xl font-bold mb-6 text-sky-600 border-b border-slate-100 pb-4">Technical Stack</h4>
                            {aboutData.technicalSkills.map((cat, index) => (
                                <div key={index} className="mb-6 last:mb-0">
                                    <h5 className="font-bold text-slate-800 mb-3">{cat.category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill, i) => (
                                            <span key={i} className="bg-sky-50 text-sky-700 text-sm font-semibold px-3 py-1.5 rounded-lg border border-sky-100">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cardBaseStyles}>
                            <h4 className="text-2xl font-bold mb-6 text-sky-600 border-b border-slate-100 pb-4">Soft Skills</h4>
                            <ul className="grid grid-cols-1 gap-y-3 gap-x-2 text-slate-700 font-medium">
                                {aboutData.softSkills.map((skill, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full block"></span>{skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education & Certs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-slate-900 text-center md:text-left">Education</h3>
                        <div className="space-y-4">
                            {aboutData.education.map((edu, index) => (
                                <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-l-sky-500`}>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{edu.title} {edu.current && <span className="text-xs bg-sky-100 text-sky-700 font-bold px-2 py-0.5 rounded ml-2 uppercase tracking-wide">Ongoing</span>}</h4>
                                    <p className="text-md text-sky-700 font-semibold mb-1">{edu.institution}</p>
                                    <p className="text-sm font-medium text-slate-500">{edu.dates}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-slate-900 text-center md:text-left">Certifications</h3>
                        <div className="space-y-4">
                            {aboutData.certifications.map((cert, index) => (
                                <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-l-sky-500 flex items-center justify-between`}>
                                    <div className="flex-grow pr-4">
                                        <h4 className="text-base font-bold text-slate-900 leading-tight mb-1">{cert.name}</h4>
                                        <p className="text-sm font-medium text-slate-500">{cert.issuer}</p>
                                    </div>
                                    {cert.badgeUrl && (
                                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-1">
                                            <img src={cert.badgeUrl} alt={cert.name} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Grids */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Volunteering</h3>
                        <div className={`${sectionCardBaseStyles} border-l-4 border-l-indigo-400 h-[calc(100%-4rem)]`}>
                            <h4 className="text-xl font-bold text-slate-900 mb-1">{aboutData.volunteering.role}</h4>
                            <p className="text-sm font-semibold text-indigo-600 mb-4">{aboutData.volunteering.organization} | {aboutData.volunteering.dates}</p>
                            <p className="text-slate-600 leading-relaxed mb-4">{aboutData.volunteering.description}</p>
                            <p className="text-sm font-semibold text-slate-500">Tested Platforms: <span className="text-slate-800">{aboutData.volunteering.platforms}</span></p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Languages</h3>
                        <div className="space-y-4">
                            {aboutData.languages.map((lang, index) => (
                                <div key={index} className="flex justify-between items-center bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
                                    <span className="font-bold text-slate-800">{lang.lang}</span>
                                    <span className="text-sm font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-md">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-5 right-[100px] sm:right-[110px] p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 z-40 ${
                        showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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