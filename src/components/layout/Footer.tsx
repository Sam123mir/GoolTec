import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import LogoGoolTec from '../shared/LogoGoolTec';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <LogoGoolTec className="h-10" />
            <p className="text-sm text-gray-300 mt-4">
              Un golazo en tecnología. Ofrecemos los mejores productos y servicios tecnológicos con la garantía y calidad que mereces.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/GoolTecJuanjui" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/gooltecjuanjui/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">Tienda</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Reseñas</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=Laptops" className="text-gray-300 hover:text-white transition-colors">Laptops</Link>
              </li>
              <li>
                <Link to="/catalog?category=Smartphones" className="text-gray-300 hover:text-white transition-colors">Smartphones</Link>
              </li>
              <li>
                <Link to="/catalog?category=Audio" className="text-gray-300 hover:text-white transition-colors">Audio</Link>
              </li>
              <li>
                <Link to="/catalog?category=Monitores" className="text-gray-300 hover:text-white transition-colors">Monitores</Link>
              </li>
              <li>
                <Link to="/catalog?category=Televisores" className="text-gray-300 hover:text-white transition-colors">Televisores</Link>
              </li>
              <li>
                <Link to="/catalog?category=Periféricos" className="text-gray-300 hover:text-white transition-colors">Periféricos</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Tecnológica 123, Ciudad Tech</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+51912345678" className="text-gray-300 hover:text-white transition-colors">+51 912 345 678</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="gooltecperusac@gmail.com" className="text-gray-300 hover:text-white transition-colors">gooltecperusac@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} GoolTec. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Términos</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Mapa del sitio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;