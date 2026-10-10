import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaBookOpen, FaTimes } from 'react-icons/fa';
import { Project } from '../data/ProjectsData';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  onOpenCaseStudy?: (project: Project) => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenCaseStudy }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { title, description, repoUrl, type, category, technologies, detailedDescription, caseStudy } = project;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const typeBadgeClasses = type === 'Group'
    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
    : 'bg-emerald-50 text-emerald-700 border border-emerald-200';

  const typeLabel = type === 'Group' ? t('projects.card.group') : t('projects.card.individual');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200/80 shadow-2xl rounded-2xl my-8 overflow-hidden text-slate-800 transition-all duration-300"
        onClick={handleContentClick}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-white relative">
          <button
            type="button"
            onClick={onClose}
            aria-label={t('projects.modal.close')}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider ${typeBadgeClasses}`}>
              {typeLabel}
            </span>
            <span className="text-slate-500 text-xs font-semibold">
              {t('projects.modal.category')}: <span className="text-slate-700">{category}</span>
            </span>
          </div>

          <h2 id="project-detail-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <div className="text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>{detailedDescription || description}</p>
          </div>

          {caseStudy && onOpenCaseStudy && (
            <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-sky-900 flex items-center gap-2">
                  <FaBookOpen className="w-4 h-4 text-sky-600" />
                  {t('caseStudy.modalTitle')}
                </h4>
                <p className="text-xs text-sky-700 mt-0.5">
                  {t('caseStudy.badge')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="py-2 px-3 text-xs font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <FaBookOpen className="w-3.5 h-3.5" />
                {t('projects.card.viewCaseStudy')}
              </button>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-100 pb-2">
                {t('projects.modal.technologies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-50 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 bg-slate-50/60 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2 text-sm hover:underline"
              >
                <FaGithub className="w-4 h-4" />
                {t('projects.modal.viewCode')}
              </a>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm cursor-pointer"
          >
            {t('projects.modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;