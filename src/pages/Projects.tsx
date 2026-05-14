import React, { useState, useEffect } from 'react';
import { projectsData, Project } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';
import ProjectDetailModal from '../components/DetailModal';

const ProjectsPage: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const aiProjects = projectsData.filter(p => p.category === 'AI Developer');
    const dataAnalystProjects = projectsData.filter(p => p.category === 'Data Analyst');
    const fullStackProjects = projectsData.filter(p => p.category === 'Full Stack Developer');

    const handleOpenDetails = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const renderCategorySection = (title: string, projects: Project[], highlight: string) => (
        <div className="mb-16 last:mb-0">
            {/* Header Rediseñado del Section */}
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-slate-900 border-l-[5px] border-sky-500 pl-4 rounded-sm">
                <span className="text-sky-600 font-black">{highlight}</span> {title.replace(highlight, '').trim()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onDetailsClick={handleOpenDetails}
                />
                ))}
            </div>
        </div>
    );

    useEffect(() => {
        const checkScrollTop = () => setShowScrollButton(window.scrollY > 400);
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <header className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    My Architecture & Projects
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Explore the solutions I've engineered, spanning from rigorous Data Analysis pipelines and Artificial Intelligence models to modern Full Stack ecosystem development.
                </p>
            </header>

            <main>
                {renderCategorySection('Developer', aiProjects, 'AI')}
                {renderCategorySection('Developer', dataAnalystProjects, 'Data Analyst')}
                {renderCategorySection('Developer', fullStackProjects, 'Full Stack')}
            </main>

            {selectedProject && (
                <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
            )}

            {/* Scroll Button Adjust */}
            {showScrollButton && (
                <button 
                    onClick={scrollToTop} aria-label="Scroll to top" 
                    className={`fixed bottom-5 right-[100px] sm:right-[110px] p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 z-40 ${ showScrollButton ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10' }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ProjectsPage;