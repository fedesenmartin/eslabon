import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Users, Zap } from 'lucide-react';

export default function QuienesSomos() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros repuestos cumplen con las más altas certificaciones aeronáuticas internacionales.',
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: 'Entrega Rápida',
      description: 'Red logística global que asegura la entrega oportuna en cualquier parte del mundo.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Equipo Experto',
      description: 'Profesionales con décadas de experiencia en la industria aeronáutica.',
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Certificaciones',
      description: 'Certificados ISO 9001, AS9100 y aprobaciones de las principales aerolíneas.',
    },
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
              Sobre Nosotros
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Somos una empresa líder en la distribución de repuestos aeronáuticos, 
              comprometida con la excelencia y la seguridad en la aviación.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Conectando la industria aeronáutica con{' '}
                <span className="text-blue-600">soluciones precisas</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Desde nuestros inicios en 2008, Grupo Eslabón se ha establecido como 
                un referente en el suministro de repuestos aeronáuticos de alta calidad. 
                Nuestra misión es garantizar que cada aeronave mantenga los más altos 
                estándares de seguridad y rendimiento.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Con una red de proveedores globales certificados y un equipo de 
                especialistas técnicos, ofrecemos soluciones integrales que van desde 
                componentes menores hasta sistemas complejos de aviación comercial y militar.
              </p>
              
              {/* Key Numbers */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-700">Repuestos en Stock</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
                  <div className="text-gray-700">Países Atendidos</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                  alt="Repuestos aeronáuticos y tecnología de aviación"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-blue-900/20" />
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Tecnología Avanzada</h4>
                    <p className="text-xs sm:text-sm text-gray-700">Sistemas de trazabilidad y control de calidad de última generación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full"
              >
                <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}