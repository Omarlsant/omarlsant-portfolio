import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import CopyEmailButton from '../components/CopyEmailButton';

const contactLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'omarns21@gmail.com',
    href: 'mailto:omarns21@gmail.com',
    color: 'text-sky-600',
    hoverBg: 'hover:bg-sky-50',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/omar-lengua',
    href: 'https://www.linkedin.com/in/omar-lengua/',
    color: 'text-blue-600',
    hoverBg: 'hover:bg-blue-50',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Omarlsant',
    href: 'https://github.com/Omarlsant',
    color: 'text-slate-800',
    hoverBg: 'hover:bg-slate-100',
  },
];

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mx-auto">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 mb-4">
          {t('contact.title')}
        </h1>
        <p className="mt-2 text-center text-sm sm:text-base text-slate-600 mb-10">
          {t('contact.desc')}
        </p>

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className={`flex items-center gap-4 sm:gap-5 bg-white border border-slate-200 rounded-2xl shadow-lg shadow-slate-200/50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-200 ${link.hoverBg} group`}
            >
              <div className={`p-3 bg-slate-50 rounded-full group-hover:bg-white transition-colors ${link.color} flex-shrink-0`}>
                <link.icon size={24} />
              </div>

              <div className="flex-grow min-w-0">
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">{link.label}</p>
                {link.label === 'Email' ? (
                  <span className="text-sm sm:text-base font-semibold text-slate-800 block truncate font-mono sm:font-sans">
                    {link.value}
                  </span>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-sky-700 transition-colors block truncate"
                  >
                    {link.value}
                  </a>
                )}
              </div>

              {link.label === 'Email' ? (
                <div className="flex-shrink-0">
                  <CopyEmailButton email={link.value} size="sm" />
                </div>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${link.label}`}
                  className="text-slate-400 group-hover:text-sky-600 transition-colors text-lg flex-shrink-0 p-1"
                >
                  &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            {t('contact.location')}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;