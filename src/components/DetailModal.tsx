import React from 'react';
import { Project, ProjectType } from '../data/ProjectsData';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { title, description, repoUrl, type, category, technologies, detailedDescription } = project;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Update conditional check for 'Group'
  const typeBadgeClasses = type === ('Group' as ProjectType)
    ? 'bg-teal-400/10 text-teal-300 border-teal-400/30' // Group style
    : 'bg-sky-400/10 text-sky-300 border-sky-400/30';   // Individual style

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="
          bg-gradient-to-br from-slate-800 to-slate-900
          border border-slate-700 rounded-xl shadow-2xl
          w-full max-w-2xl max-h-[90vh] overflow-y-auto
          p-6 sm:p-8 relative transition-opacity duration-300 ease-out"
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-5 pr-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-400">{title}</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className={`px-3 py-0.5 rounded-full font-medium border text-xs ${typeBadgeClasses}`}>
              {type}
            </span>
            <span className="text-slate-400 font-medium">
              Category: {category}
            </span>
          </div>
        </div>

        <div className="prose prose-invert prose-sm sm:prose-base max-w-none mb-6 text-slate-300 leading-relaxed">
          <p>{detailedDescription || description}</p>
        </div>

        {technologies && technologies.length > 0 && (
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-3 text-slate-200 border-b border-slate-700 pb-1">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700/80 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-slate-700/50">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-cyan-300 hover:text-cyan-100 hover:underline transition-colors duration-200"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;