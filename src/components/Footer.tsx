import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

interface FooterLink { label: string; href: string; isExternal?: boolean; icon?: React.ElementType; }

const navigationLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

const socialLinks: FooterLink[] = [
  { label: 'GitHub', href: 'https://github.com/Omarlsant', isExternal: true, icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omarlengua/', isExternal: true, icon: FaLinkedin },
];

const LinkColumn: React.FC<{title: string, links: FooterLink[]}> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => {
         const isHomeLink = !link.isExternal && link.href === '/';
         return (
            <li key={link.label}>
                {link.isExternal ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-300 text-sm inline-flex items-center gap-2">
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.label}
                    </a>
                ) : (
                    <Link to={link.href} onClick={isHomeLink ? scrollToTop : undefined} className="text-slate-600 hover:text-sky-600 font-medium transition-colors duration-300 text-sm">
                        {link.label}
                    </Link>
                )}
            </li>
         );
      })}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-12 lg:gap-24 mb-10">
           <div className="flex flex-col items-center sm:flex-row sm:items-start gap-10 lg:gap-16 text-center sm:text-left">
            <LinkColumn title="Navigation" links={navigationLinks} />
            <div>
              <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">Connect</h3>
              <ul className="space-y-3 inline-flex flex-col items-center sm:items-start">
                  {socialLinks.map((link) => (
                      <li key={link.label}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-sky-600 transition-colors duration-300 text-sm inline-flex items-center gap-2">
                              {link.icon && <link.icon className="w-5 h-5" />}
                              <span>{link.label}</span>
                          </a>
                      </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-left flex-shrink-0">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">Email</h3>
            <a href="mailto:omarns21@gmail.com" className="block text-slate-600 hover:text-sky-600 font-medium transition-colors duration-300 text-sm mb-6">
                omarns21@gmail.com
            </a>
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-2">Location</h3>
            <p className="text-slate-600 text-sm font-medium">Madrid, Spain</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 mt-8 text-center">
            <p className="text-slate-500 text-sm font-medium">
                © {new Date().getFullYear()} Omar Lengua. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;