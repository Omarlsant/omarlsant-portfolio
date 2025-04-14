import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: React.ElementType;
}

const navigationLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

const socialLinks: FooterLink[] = [
  { label: 'GitHub', href: 'https://github.com/Omarlsant', isExternal: true, icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omarlengua/', isExternal: true, icon: FaLinkedin },
];
interface LinkColumnProps {
  title: string;
  links: FooterLink[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          {link.isExternal ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
              aria-label={link.label}
            >
              {link.icon && <link.icon className="w-4 h-4 flex-shrink-0" />}
              {link.label}
            </a>
          ) : (
            <Link
              to={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-8 lg:gap-14 mb-10">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-10 lg:gap-14">

            <div className="w-full sm:w-auto text-center sm:text-left">
              <LinkColumn
                title="Navigation"
                links={navigationLinks}
              />
            </div>

            <div className="w-full sm:w-auto text-center">
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Social links</h3>
              <ul className="space-y-2 inline-flex flex-col items-start">
                  {socialLinks.map((link) => (
                      <li key={link.label} className='mt-1'>
                          <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
                              aria-label={link.label}
                          >
                              {link.icon && <link.icon className="w-5 h-5 flex-shrink-0" />}
                              <span>{link.label}</span>
                          </a>
                      </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-left flex-shrink-0 md:ml-14">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-2">Email</h3>
                <a href="mailto:omarns21@gmail.com" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm mb-4">
                    omarns21@gmail.com
                </a>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-2">Location</h3>
            <p className="text-gray-400 text-sm">
                Madrid, Spain.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
            <div className="text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Omar Lengua. All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;