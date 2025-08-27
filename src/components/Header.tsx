import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-blue-900/95'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-900 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className={`text-xl sm:text-2xl font-bold transition-colors ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}>
                Grupo Eslabón
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('quienes-somos')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('clientes')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection('proveedores')}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Proveedores
              </button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2">
                Contacto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-6 bg-white rounded-xl shadow-xl border">
              <div className="flex flex-col space-y-4 px-6">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-gray-700 hover:text-blue-900 py-3 font-medium transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-left text-gray-700 hover:text-blue-900 py-3 font-medium transition-colors"
                >
                  Quiénes Somos
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-left text-gray-700 hover:text-blue-900 py-3 font-medium transition-colors"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('clientes')}
                  className="text-left text-gray-700 hover:text-blue-900 py-3 font-medium transition-colors"
                >
                  Clientes
                </button>
                <button
                  onClick={() => scrollToSection('proveedores')}
                  className="text-left text-gray-700 hover:text-blue-900 py-3 font-medium transition-colors"
                >
                  Proveedores
                </button>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white mt-4 w-full">
                  Contacto
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}