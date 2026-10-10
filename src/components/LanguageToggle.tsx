import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const setLanguage = (lang: 'es' | 'en') => {
    if (currentLang !== lang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center bg-slate-100/90 border border-slate-200 rounded-full p-0.5 shadow-sm transition-all ${className}`}
    >
      <span className="sr-only">Seleccionar idioma / Select language</span>
      <div className="pl-2 pr-1 text-slate-400 flex items-center" aria-hidden="true">
        <FaGlobe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label={t('nav.switchToEs')}
        aria-pressed={currentLang === 'es'}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          currentLang === 'es'
            ? 'bg-sky-600 text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
        }`}
      >
        ES
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label={t('nav.switchToEn')}
        aria-pressed={currentLang === 'en'}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-sky-600 text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
