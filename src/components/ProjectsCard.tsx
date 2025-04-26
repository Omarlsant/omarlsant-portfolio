import React from 'react';
import { Project } from '../data/ProjectsData';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  onDetailsClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDetailsClick }) => {
  const { title, description, repoUrl, type } = project;

  const typeBadgeClasses = type === 'Group'
    ? 'bg-teal-400/10 text-teal-300 border-teal-400/30' // Style for Group
    : 'bg-sky-400/10 text-sky-300 border-sky-400/30';   // Style for Individual

  return (
    <div className="
      flex flex-col h-full
      bg-slate-800/30 backdrop-blur-md
      border border-slate-700/50 rounded-lg shadow-lg
      p-6 transition-all duration-300 ease-out
      hover:-translate-y-1 hover:shadow-cyan-500/30
      overflow-hidden
    ">
      <h3 className="text-lg font-semibold mb-3 text-cyan-400">{title}</h3>
      <p className="text-slate-300 text-sm mb-5 flex-grow line-clamp-4">
          {description}
      </p>

      <div className="mt-auto pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
         <div className="flex flex-wrap gap-3 justify-center sm:justify-start w-full sm:w-auto">
             <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-1.5
                text-xs font-medium text-cyan-300 hover:text-cyan-100
                border border-cyan-700/50 hover:border-cyan-500/70
                bg-cyan-900/30 hover:bg-cyan-800/40
                px-3 py-1 rounded-md transition-all duration-200"
             >
                <FaGithub className="w-3 h-3" />
                GitHub Repo
            </a>
            <button
              onClick={() => onDetailsClick(project)}
              className="
                inline-flex items-center justify-center
                text-xs font-medium text-slate-200 hover:text-white
                border border-slate-600/80 hover:border-slate-500
                bg-slate-700/50 hover:bg-slate-600/60
                px-3 py-1 rounded-md transition-all duration-200"
            >
              More Details {/* Button text should be English */}
            </button>
         </div>

         <span
          className={`px-3 py-0.5 rounded-full font-medium border text-center whitespace-nowrap mt-2 sm:mt-0 ${typeBadgeClasses}`}
         >
          {type} {/* This will now correctly display 'Group' or 'Individual' */}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;