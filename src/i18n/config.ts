import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../locales/en/translation.json';
import esTranslation from '../locales/es/translation.json';

export const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio_lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Sincronizar dinámicamente el atributo <html lang="...">
const updateHtmlLang = (lng: string) => {
  const normalized = lng?.startsWith('es') ? 'es' : 'en';
  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized;
  }
};

updateHtmlLang(i18n.language);
i18n.on('languageChanged', (lng) => {
  updateHtmlLang(lng);
});

export default i18n;
