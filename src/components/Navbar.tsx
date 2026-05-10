import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoimg from '../assets/images/f.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about' },
  { name: 'Projects', path: '/projects' }
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogoClick = () => {
      closeMobileMenu();
      scrollToTop();
  };

  const linkClasses = "px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out block sm:inline-block";
  const activeLinkClasses = "bg-sky-50 text-sky-700 shadow-sm";
  const inactiveLinkClasses = "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

  return (
    <nav className="shadow-sm border-b border-slate-200 sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="block hover:opacity-80 transition-opacity duration-300" onClick={handleLogoClick}>
             <img src={logoimg} alt="Omar Lengua Logo" className="w-[40px] h-[40px] rounded-full shadow-sm" />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-inner ${isMobileMenuOpen ? 'max-h-96 border-b border-slate-200' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} onClick={closeMobileMenu} className={({ isActive }) => `block ${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;