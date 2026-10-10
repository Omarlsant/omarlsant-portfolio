import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectsData, Project } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';
import ProjectDetailModal from '../components/DetailModal';
import CaseStudyModal from '../components/CaseStudyModal';

const ProjectsPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);
    
    const projects = getProjectsData(i18n.language);

    const backendProjects = projects.filter(p => p.category === 'Backend Developer');
    const aiProjects = projects.filter(p => p.category === 'AI Developer');
    const dataAnalystProjects = projects.filter(p => p.category === 'Data Analyst');
    const fullStackProjects = projects.filter(p => p.category === 'Full Stack Developer');

    const handleOpenDetails = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseDetailsModal = () => {
        setSelectedProject(null);
    };

    const handleOpenCaseStudy = (project: Project) => {
        setSelectedProject(null);
        setSelectedCaseStudyProject(project);
    };

    const handleCloseCaseStudy = () => {
        setSelectedCaseStudyProject(null);
    };

    const renderCategorySection = (title: string, categoryProjects: Project[], highlight: string) => (
        <div className="mb-16 last:mb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-slate-900 border-l-[5px] border-sky-500 pl-4 rounded-xs">
                <span className="text-sky-600 font-black">{highlight}</span> {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categoryProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onDetailsClick={handleOpenDetails}
                    onCaseStudyClick={handleOpenCaseStudy}
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
                    {t('projects.title')}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    {t('projects.desc')}
                </p>
            </header>

            <main>
                {backendProjects.length > 0 && renderCategorySection(t('projects.categories.backendTitle'), backendProjects, t('projects.categories.backendHighlight'))}
                {renderCategorySection(t('projects.categories.aiTitle'), aiProjects, t('projects.categories.aiHighlight'))}
                {renderCategorySection(t('projects.categories.dataAnalystTitle'), dataAnalystProjects, t('projects.categories.dataAnalystHighlight'))}
                {renderCategorySection(t('projects.categories.fullStackTitle'), fullStackProjects, t('projects.categories.fullStackHighlight'))}
            </main>

            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={handleCloseDetailsModal}
                    onOpenCaseStudy={handleOpenCaseStudy}
                />
            )}

            {selectedCaseStudyProject && (
                <CaseStudyModal
                    project={selectedCaseStudyProject}
                    onClose={handleCloseCaseStudy}
                />
            )}

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