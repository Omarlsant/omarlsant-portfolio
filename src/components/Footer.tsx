import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CopyEmailButton from './CopyEmailButton';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

interface FooterLink {
  labelKey: 'nav.home' | 'nav.about' | 'nav.projects' | 'nav.contact';
  href: string;
}

const navigationLinks: FooterLink[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.about', href: '/about' },
  { labelKey: 'nav.projects', href: '/projects' },
  { labelKey: 'nav.contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Omarlsant', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omarlengua/', icon: FaLinkedin },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-12 lg:gap-24 mb-10">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-10 lg:gap-16 text-center sm:text-left">
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
                {t('footer.navigation')}
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => {
                  const isHomeLink = link.href === '/';
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={isHomeLink ? scrollToTop : undefined}
                        className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-300 text-sm"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
                {t('footer.connect')}
              </h3>
              <ul className="space-y-3 inline-flex flex-col items-center sm:items-start">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 font-medium hover:text-sky-600 transition-colors duration-300 text-sm inline-flex items-center gap-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-left flex-shrink-0">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">
              {t('footer.email')}
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-6 justify-center md:justify-start">
              <span className="text-slate-600 font-medium text-sm">
                omarns21@gmail.com
              </span>
              <CopyEmailButton email="omarns21@gmail.com" size="sm" />
            </div>

            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">
              {t('footer.location')}
            </h3>
            <p className="text-slate-600 text-sm font-medium">{t('footer.locationValue')}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-8 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Omar Lengua. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;