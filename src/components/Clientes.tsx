import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export default function Clientes() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      position: 'Director de Mantenimiento',
      company: 'AeroLineas Premium',
      content: 'Grupo Eslabón ha sido nuestro socio estratégico durante 8 años. Su capacidad para encontrar repuestos críticos en tiempo récord nos ha ahorrado millones en costos AOG.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Ana Rodriguez',
      position: 'Gerente de Compras',
      company: 'MRO Solutions International',
      content: 'La calidad de sus componentes y la trazabilidad completa de cada parte nos da la confianza total. Nunca hemos tenido problemas con las certificaciones.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Roberto Silva',
      position: 'Technical Manager',
      company: 'Cargo Air Services',
      content: 'Su equipo técnico entiende perfectamente nuestras necesidades. La asesoría especializada nos ayuda a tomar las mejores decisiones de compra.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
  ];

  const clientLogos = [
    { name: 'Boeing', category: 'Fabricante' },
    { name: 'Airbus', category: 'Fabricante' },
    { name: 'Embraer', category: 'Fabricante' },
    { name: 'Honeywell', category: 'Sistemas' },
    { name: 'Pratt & Whitney', category: 'Motores' },
    { name: 'Rolls-Royce', category: 'Motores' },
    { name: 'Safran', category: 'Sistemas' },
    { name: 'Collins Aerospace', category: 'Aviónica' },
  ];

  const stats = [
    { number: '500+', label: 'Clientes Activos' },
    { number: '98%', label: 'Satisfacción' },
    { number: '24h', label: 'Tiempo Promedio AOG' },
    { number: '50+', label: 'Países Atendidos' },
  ];

  return (
    <section id="clientes" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
              Nuestros Clientes
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              La Confianza de la{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Industria
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Más de 500 empresas aeronáuticas confían en nosotros para mantener 
              sus operaciones funcionando sin contratiempos.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center h-full">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Lo que dicen nuestros clientes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="p-8 flex-grow flex flex-col">
                    {/* Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 mb-8 leading-relaxed italic flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.position}
                        </div>
                        <div className="font-medium text-blue-600">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Client Categories */}
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Categorías de Clientes
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl group-hover:text-white transition-colors">✈️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Aerolíneas</h4>
                <p className="text-gray-600">Comerciales y de carga</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl group-hover:text-white transition-colors">🔧</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">MRO</h4>
                <p className="text-gray-600">Centros de mantenimiento</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl group-hover:text-white transition-colors">🏢</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">OEM</h4>
                <p className="text-gray-600">Fabricantes originales</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl group-hover:text-white transition-colors">🛩️</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Aviación Privada</h4>
                <p className="text-gray-600">Jets ejecutivos y charter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}