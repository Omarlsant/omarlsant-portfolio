import React, { useState } from 'react';
import { projectsData, Project } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';
import ProjectDetailModal from '../components/DetailModal';

const ProjectsPage: React.FC = () => {
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
    </div>
  );
};

export default ProjectsPage;