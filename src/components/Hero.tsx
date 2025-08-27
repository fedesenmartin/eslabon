import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #1e40af 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m40 40v-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-amber-400 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8 animate-fade-in">
            <span className="text-sm font-medium">🛩️ Líderes en Repuestos Aeronáuticos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-slide-up leading-tight">
            Grupo{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Eslabón
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Tu socio confiable en repuestos y servicios aeronáuticos de alta calidad.
            Conectamos la industria con soluciones precisas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animation-delay-400">
            <Button
              onClick={() => scrollToSection('quienes-somos')}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
            >
              Conocer Más
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('servicios')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up animation-delay-600">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-3">15+</div>
              <div className="text-blue-100 text-lg">Años de Experiencia</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-3">500+</div>
              <div className="text-blue-100 text-lg">Clientes Satisfechos</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-3">24/7</div>
              <div className="text-blue-100 text-lg">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}