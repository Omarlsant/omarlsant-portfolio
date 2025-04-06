import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
        <p className="text-gray-400">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;