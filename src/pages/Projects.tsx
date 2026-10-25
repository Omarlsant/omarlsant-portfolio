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
    
    const [aiFilter, setAiFilter] = useState<'all' | 'ai' | 'data'>('all');
    
    const projects = getProjectsData(i18n.language);

    const aiProjects = projects.filter(p => p.category === 'AI Developer');
    const dataEngineerProjects = projects.filter(p => p.category === 'Data Engineer');
    const aiSoftwareProjects = projects.filter(p => p.category === 'AI Developer' || p.category === 'Data Engineer');
    const backendProjects = projects.filter(p => p.category === 'Backend Developer');
    const fullStackProjects = projects.filter(p => p.category === 'Full Stack Developer');

    const displayedAiSoftwareProjects = aiFilter === 'ai'
        ? aiProjects
        : aiFilter === 'data'
            ? dataEngineerProjects
            : aiSoftwareProjects;

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
        <section className="mb-20 last:mb-0">
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
        </section>
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
                {/* 1. Category: AI Software Developer */}
                {aiSoftwareProjects.length > 0 && (
                    <section className="mb-20 last:mb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 border-l-[5px] border-sky-500 pl-4 rounded-xs">
                                <span className="text-sky-600 font-black">{t('projects.categories.aiSoftwareHighlight')}</span> {t('projects.categories.aiSoftwareTitle')}
                            </h2>

                            {/* Subcategory filter pills */}
                            <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200/60 rounded-xl w-fit">
                                <button
                                    type="button"
                                    onClick={() => setAiFilter('all')}
                                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                                        aiFilter === 'all'
                                            ? 'bg-sky-600 text-white shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                                    }`}
                                >
                                    {t('projects.subcategories.all')} ({aiSoftwareProjects.length})
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setAiFilter('ai')}
                                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                                        aiFilter === 'ai'
                                            ? 'bg-sky-600 text-white shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                                    }`}
                                >
                                    {t('projects.subcategories.ai')} ({aiProjects.length})
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setAiFilter('data')}
                                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                                        aiFilter === 'data'
                                            ? 'bg-sky-600 text-white shadow-xs'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                                    }`}
                                >
                                    {t('projects.subcategories.dataEngineer')} ({dataEngineerProjects.length})
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {displayedAiSoftwareProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onDetailsClick={handleOpenDetails}
                                    onCaseStudyClick={handleOpenCaseStudy}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* 2. Category: Backend Developer */}
                {backendProjects.length > 0 && renderCategorySection(t('projects.categories.backendTitle'), backendProjects, t('projects.categories.backendHighlight'))}

                {/* 3. Category: Full Stack Developer */}
                {fullStackProjects.length > 0 && renderCategorySection(t('projects.categories.fullStackTitle'), fullStackProjects, t('projects.categories.fullStackHighlight'))}
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