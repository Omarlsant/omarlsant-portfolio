import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaTimes, FaExternalLinkAlt, FaExclamationCircle, FaCogs, FaBolt, FaChartLine } from 'react-icons/fa';
import { Project } from '../data/ProjectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const { title, caseStudy, repoUrl, technologies } = project;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200/80 shadow-2xl rounded-2xl my-8 overflow-hidden text-slate-800 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-white relative">
          <button
            type="button"
            onClick={onClose}
            aria-label={t('caseStudy.close')}
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
            {t('caseStudy.badge')}
          </span>

          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}{' '}
            <span className="text-slate-500 font-medium text-lg sm:text-xl block sm:inline sm:ml-2">
              · {t('caseStudy.modalTitle')}
            </span>
          </h2>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          
          {/* Section: Problem */}
          <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-rose-500">
              <FaExclamationCircle className="w-4 h-4 flex-shrink-0" />
              <h3 className="text-slate-900 font-semibold text-base sm:text-lg">
                {t('caseStudy.problemTitle')}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-6">
              {caseStudy.problem}
            </p>
          </div>

          {/* Section: Architectural Decisions */}
          <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-sky-600">
              <FaCogs className="w-4 h-4 flex-shrink-0" />
              <h3 className="text-slate-900 font-semibold text-base sm:text-lg">
                {t('caseStudy.architectureTitle')}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-6">
              {caseStudy.architecturalDecision}
            </p>
          </div>

          {/* Section: Technical Challenge */}
          <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-2 mb-2 text-purple-600">
              <FaBolt className="w-4 h-4 flex-shrink-0" />
              <h3 className="text-slate-900 font-semibold text-base sm:text-lg">
                {t('caseStudy.challengeTitle')}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-6">
              {caseStudy.technicalChallenge}
            </p>
          </div>

          {/* Section: Outcomes / Metrics */}
          {caseStudy.metricsOrLearnings && (
            <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-emerald-600">
                <FaChartLine className="w-4 h-4 flex-shrink-0" />
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg">
                  {t('caseStudy.metricsTitle')}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base pl-6">
                {caseStudy.metricsOrLearnings}
              </p>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                {t('projects.modal.technologies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 bg-slate-50/60 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium hover:underline inline-flex items-center gap-2 text-sm"
              >
                {t('caseStudy.exploreRepo')} <FaExternalLinkAlt className="w-3.5 h-3.5" />
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
    </div>,
    document.body
  );
};

export default CaseStudyModal;
