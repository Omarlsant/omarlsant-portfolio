import React from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../data/ProjectsData';
import { FaGithub, FaBookOpen } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  onDetailsClick: (project: Project) => void;
  onCaseStudyClick?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDetailsClick, onCaseStudyClick }) => {
  const { t } = useTranslation();
  const { title, description, repoUrl, type } = project;

  const typeBadgeClasses = type === 'Group'
    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
    : 'bg-emerald-50 text-emerald-700 border border-emerald-200';

  const typeLabel = type === 'Group' ? t('projects.card.group') : t('projects.card.individual');

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-sky-100 group">
      
      <div className="flex justify-between items-start mb-4 gap-2">
         <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{title}</h3>
         <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase whitespace-nowrap mt-1 ${typeBadgeClasses}`}>
          {typeLabel}
        </span>
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed font-medium">
          {description}
      </p>

      <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col gap-2.5">
        {project.caseStudy && onCaseStudyClick && (
          <button
            type="button"
            onClick={() => onCaseStudyClick(project)}
            className="w-full py-2 px-3 text-xs font-bold rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 border border-sky-200/80 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
          >
            <FaBookOpen className="w-3.5 h-3.5 text-sky-600" />
            {t('projects.card.viewCaseStudy')}
          </button>
        )}

        <div className="flex flex-row justify-between items-center gap-3">
          <button
            type="button"
            onClick={() => onDetailsClick(project)}
            className="flex-1 text-center justify-center text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-sky-600/20 active:scale-95 cursor-pointer"
          >
            {t('projects.card.moreDetails')}
          </button>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t('projects.card.watchCode')}
              aria-label={`${t('projects.card.watchCode')}: ${title}`}
              className="flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium active:scale-95 cursor-pointer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;