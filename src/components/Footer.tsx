import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Plane, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Proveedores', href: '#proveedores' },
  ];

  const services = [
    'Búsqueda Especializada',
    'Componentes Certificados',
    'Logística Global',
    'Soporte AOG 24/7',
    'Consultoría Técnica',
    'Gestión de Inventarios',
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Grupo Eslabón</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Tu socio confiable en repuestos aeronáuticos. Conectamos la industria 
              con soluciones precisas desde 2008.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8">Servicios</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-lg">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8">Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Av. Aeronáutica 1234<br />
                    Miami, FL 33166<br />
                    Estados Unidos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-lg">+1 (305) 555-0123</p>
                  <p className="text-gray-400">AOG: +1 (305) 555-0911</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-lg">info@grupoeslabon.com</p>
                  <p className="text-gray-400">ventas@grupoeslabon.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-lg">Lun - Vie: 8:00 - 18:00</p>
                  <p className="text-gray-400">AOG: 24/7</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact Button */}
            <div className="mt-8">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                🚨 Emergencia AOG
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Mantente informado sobre la industria aeronáutica
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Recibe las últimas noticias, actualizaciones de productos y ofertas especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white text-lg"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-400">
              <p>&copy; 2024 Grupo Eslabón. Todos los derechos reservados.</p>
              <div className="flex space-x-8">
                <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
              <span>Certificaciones:</span>
              <div className="flex space-x-3">
                <span className="px-3 py-1 bg-gray-800 rounded-lg text-sm">ISO 9001</span>
                <span className="px-3 py-1 bg-gray-800 rounded-lg text-sm">AS9100D</span>
                <span className="px-3 py-1 bg-gray-800 rounded-lg text-sm">EASA Part 145</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}