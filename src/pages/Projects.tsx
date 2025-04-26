import React, { useState, useEffect } from 'react';
import { projectsData, Project } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';
import ProjectDetailModal from '../components/DetailModal';

const ProjectsPage: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const aiProjects = projectsData.filter(p => p.category === 'AI Developer');
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left text-slate-100 border-l-4 border-cyan-400 pl-4">
            <span className="text-cyan-400 font-black">{highlight}</span> {title.replace(highlight, '').trim()}
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

    return (
        <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <header className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl pb-2 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Projects
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore the projects I've worked on, spanning from Data Analysis and Artificial Intelligence to Full Stack Development.
            </p>
        </header>

        <main>
            {/* Render AI section */}
            {renderCategorySection('Developer', aiProjects, 'AI')}
            {/* Render Full Stack section */}
            {renderCategorySection('Developer', fullStackProjects, 'Full Stack')}
        </main>

        {selectedProject && (
            <ProjectDetailModal
            project={selectedProject}
            onClose={handleCloseModal}
            />
        )}

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

export default ProjectsPage;