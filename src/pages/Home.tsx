import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaProjectDiagram, FaUserAlt, FaPaperPlane, FaServer, FaBrain, FaDatabase } from 'react-icons/fa';
import FeaturedProjectsCarousel from '../components/FeatureCarrousel';
import { getProjectsData } from '../data/ProjectsData';

import portfolioImage from '../assets/images/f.png';
import keepInShape from '../assets/images/keepInShape.png';
import flightFeelAnalizer from '../assets/images/flightFeelAnalizer.webp';
import californiaDreaming from '../assets/images/californiaDreaming.png';
import webScraper from '../assets/images/webScraper.webp';

const featuredCarouselConfig: Array<{ projectId: string; image: string }> = [
    { projectId: 'fs-1', image: portfolioImage },
    { projectId: 'ai-2', image: keepInShape },
    { projectId: 'ai-3', image: flightFeelAnalizer },
    { projectId: 'ai-4', image: californiaDreaming },
    { projectId: 'ai-7', image: webScraper },
];

const Home: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [showScrollButton, setShowScrollButton] = useState(false);
    
    useEffect(() => {
        const checkScrollTop = () => { setShowScrollButton(window.scrollY > 400); };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const projects = getProjectsData(i18n.language);

    const featuredForCarousel = featuredCarouselConfig.map(config => {
        const project = projects.find(p => p.id === config.projectId);
        if (!project) return null;
        return {
            id: project.id,
            title: project.title, 
            description: project.description,
            imageUrl: config.image,
            link: project.repoUrl,
            project,
        };
    }).filter((item): item is NonNullable<typeof item> => item !== null);        

    return (
        <div className="flex flex-col items-center justify-center p-4 py-16 md:py-24 min-h-screen">
            <div className="flex flex-col items-center gap-10 w-full max-w-5xl">

                <header className="flex flex-col items-center text-center max-w-3xl mt-4">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold tracking-wide">
                        {t('home.available')}
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Omar Lengua
                    </h1>
                    <p className="text-xl sm:text-2xl text-sky-600 font-medium mb-6">
                        {t('home.title')}
                    </p>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 leading-relaxed">
                        {t('home.heroDesc')}
                    </p>
                </header>

                {/* Main Action Cards */}
                <section className="w-full max-w-5xl mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[ 
                            { to: '/projects', icon: FaProjectDiagram, title: t('home.cards.projects.title'), desc: t('home.cards.projects.desc') },
                            { to: '/about', icon: FaUserAlt, title: t('home.cards.about.title'), desc: t('home.cards.about.desc') },
                            { to: '/contact', icon: FaPaperPlane, title: t('home.cards.contact.title'), desc: t('home.cards.contact.desc') }
                        ].map((item, idx) => (
                            <Link key={idx} to={item.to} className="group flex flex-col items-center text-center p-8 bg-white border border-slate-100 hover:border-sky-200 rounded-2xl shadow-lg shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/50">
                                <div className="p-4 bg-sky-50 rounded-full mb-6 group-hover:bg-sky-100 transition-colors">
                                    <item.icon size={32} className="text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                                <span className="mt-auto font-bold text-sky-600 group-hover:underline text-sm flex items-center gap-1">
                                    {t('home.cards.explore')} <span className="text-lg leading-none">&rarr;</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Tech Strategy Section */}
                <section className="mt-16 w-full max-w-3xl text-center bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-6">{t('home.strategy.title')}</h3>
                        <div className="flex justify-center items-center gap-8 mb-8">
                            <FaServer size={32} className="text-sky-500" title="Backend Development"/>
                            <FaDatabase size={30} className="text-slate-400" title="Data Engineering"/>
                            <FaBrain size={36} className="text-slate-800" title="AI & GenAI"/>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {t('home.strategy.descPart1')}{' '}
                            <strong className="text-slate-800">{t('home.strategy.backend')}</strong>{' '}
                            {t('home.strategy.descPart2')}{' '}
                            <strong className="text-slate-800">{t('home.strategy.dataAi')}</strong>{' '}
                            {t('home.strategy.descPart3')}
                        </p>
                    </div>
                </section>

                {featuredForCarousel.length > 0 && (
                    <FeaturedProjectsCarousel projects={featuredForCarousel} />
                )}
                
            </div>

            {showScrollButton && (
                <button onClick={scrollToTop} className={`fixed bottom-5 right-5 p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 z-50 ${ showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}

        </div>
    );
};

export default Home;