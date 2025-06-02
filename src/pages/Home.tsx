import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaUserAlt, FaPaperPlane, FaLaptopCode, FaBrain, FaDatabase } from 'react-icons/fa';
import FeaturedProjectsCarousel from '../components/FeatureCarrousel';
import { projectsData } from '../data/ProjectsData';

import portfolioImage from '../assets/images/f.png';
import keepInShape from '../assets/images/keepInShape.png';
import flightFeelAnalizer from '../assets/images/flightFeelAnalizer.png';
import californiaDreaming from '../assets/images/californiaDreaming.png';
import webScraper from '../assets/images/webScraper.png';

const featuredCarouselConfig: Array<{ projectId: string; image: string; customDescription?: string }> = [
    { projectId: 'fs-1', image: portfolioImage, customDescription: 'A comprehensive showcase of my professional portfolio, highlighting key projects and skills.' },
    { projectId: 'ai-1', image: keepInShape, customDescription: 'Machine learning model for predicting BMI and classifying different types of obesity.' },
    { projectId: 'ai-', image: flightFeelAnalizer, customDescription: 'Analyzing and predicting flight satisfaction using machine learning on a Kaggle dataset.' },
    { projectId: 'ai-6', image: californiaDreaming, customDescription: 'Predicting housing values for California properties using a machine learning approach.' },
    { projectId: 'ai-6', image: webScraper, customDescription: 'Automated web scraper for InfoJobs job offers, built with Python and Selenium.' },
];

const Home: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const featuredForCarousel = featuredCarouselConfig
        .map(config => {
            const project = projectsData.find(p => p.id === config.projectId);
            if (!project) {
                console.warn(`Project with ID "${config.projectId}" not found in projectsData. Skipping for carousel.`);
                return null;
            }
            return {
                id: project.id,
                title: project.title,
                description: config.customDescription || (project.description.length > 120 ? project.description.substring(0, 117) + '...' : project.description),
                imageUrl: config.image,
                link: project.repoUrl,
                type: project.type,
            };
        })
        .filter((project): project is NonNullable<typeof project> => project !== null);        

    return (
        <div className="flex flex-col items-center justify-center text-white p-4 py-16 md:py-24 min-h-screen">
            <div className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-5xl">

                <header className="flex flex-col items-center text-center max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5">
                        Omar Lengua
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-6">
                        Full Stack Developer | AI & Data
                    </p>
                    <p className="text-justify sm:text-lg max-w-2xl mx-auto text-slate-300 leading-relaxed mb-8">
                        Welcome to my digital space! I'm a passionate Full Stack Developer actively broadening my horizons into the exciting fields of AI Development and Data Science. Here, you'll find a showcase of my projects, insights into my journey, and ways to connect with me.
                    </p>
                </header>

                {/* Visual Navigation Section */}
                <section className="w-full max-w-4xl">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-sky-400">Explore</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        
                        <Link
                            to="/projects"
                            className="group flex flex-col items-center text-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                            aria-label="View my projects"
                        >
                            <FaProjectDiagram size={40} className="text-cyan-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                My Projects
                            </h3>
                            <p className="text-slate-300 text-sm mb-3">
                                Discover the applications and solutions I've built.
                            </p>
                            <span className="mt-auto font-semibold text-cyan-400 group-hover:underline text-sm">
                                View Projects →
                            </span>
                        </Link>

                        <Link
                            to="/about"
                            className="group flex flex-col items-center text-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                            aria-label="Learn more about me"
                        >
                            <FaUserAlt size={40} className="text-cyan-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                About Me
                            </h3>
                            <p className="text-slate-300 text-sm mb-3">
                                Learn about my journey, skills, and passion for technology.
                            </p>
                            <span className="mt-auto font-semibold text-cyan-400 group-hover:underline text-sm">
                                Know Me →
                            </span>
                        </Link>
                        
                        <Link
                            to="/contact"
                            className="group flex flex-col items-center text-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                            aria-label="Get in touch with me"
                        >
                            <FaPaperPlane size={40} className="text-cyan-400 mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Let's Talk
                            </h3>
                            <p className="text-slate-300 text-sm mb-3">
                                Questions, proposals, or just want to say hi? Reach out.
                            </p>
                            <span className="mt-auto font-semibold text-cyan-400 group-hover:underline text-sm">
                                Contact Me →
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Renderiza el carrusel con los datos preparados */}
                {featuredForCarousel.length > 0 && (
                    <FeaturedProjectsCarousel projects={featuredForCarousel} />
                )}
                
                <section className="mt-12 md:mt-16 w-full max-w-3xl text-center">
                    <h3 className="text-2xl font-semibold text-sky-400 mb-4">Bridging Tech Development with Business Strategy</h3>
                    <div className="flex justify-center items-center gap-6 mb-6">
                        <FaBrain size={30} className="text-slate-400" title="Artificial Intelligence"/>
                        <span className="text-slate-400 text-2xl">|</span>
                        <FaDatabase size={30} className="text-slate-400" title="Data Analysis"/>
                        <span className="text-slate-400 text-2xl">|</span>
                        <FaLaptopCode size={30} className="text-slate-400" title="Full Stack Development"/>
                    </div>
                    <p className="text-slate-300 text-justify leading-relaxed">
                        I am committed to leveraging my skills in full stack development, AI, and data analysis to create impactful solutions that drive business success. My goal is to bridge the gap between technology and business strategy, ensuring that every project not only meets technical requirements but also aligns with broader business objectives.
                        Whether it's building robust applications, developing intelligent systems, or analyzing data to extract actionable insights, I strive to deliver high-quality results that make a difference.
                    </p>
                </section>

            </div>
            {showScrollButton && (
            <button onClick={scrollToTop} aria-label="Scroll to top" 
            className={`fixed bottom-5 right-5 p-3 rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 ${ showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90' }`}
                        >
                            {/* Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                    )}
        </div>
    );
};

export default Home;