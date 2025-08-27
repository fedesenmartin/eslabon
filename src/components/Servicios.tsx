import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Search, 
  Truck, 
  FileText, 
  Clock, 
  Globe,
  ArrowRight
} from 'lucide-react';

export default function Servicios() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Búsqueda Especializada',
      description: 'Localización de repuestos específicos y difíciles de encontrar con nuestro sistema de búsqueda avanzado.',
      features: ['Base de datos global', 'Búsqueda por PN/SN', 'Alternativas certificadas'],
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Componentes Certificados',
      description: 'Amplio inventario de repuestos nuevos, seminuevos y reparables con certificaciones vigentes.',
      features: ['Nuevos OEM', 'PMA Parts', 'Componentes reparables'],
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Logística Global',
      description: 'Red de distribución mundial con entrega rápida y segura a cualquier destino.',
      features: ['Envío AOG 24/7', 'Tracking en tiempo real', 'Empaque especializado'],
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Documentación Completa',
      description: 'Certificados de aeronavegabilidad, trazabilidad completa y documentación técnica.',
      features: ['Certificados 8130-3', 'Documentación OEM', 'Trazabilidad total'],
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Soporte AOG',
      description: 'Servicio de emergencia 24/7 para Aircraft on Ground con respuesta inmediata.',
      features: ['Disponibilidad 24/7', 'Respuesta < 1 hora', 'Coordinación global'],
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Consultoría Técnica',
      description: 'Asesoramiento especializado en selección de componentes y optimización de inventarios.',
      features: ['Ingeniería aeronáutica', 'Análisis de alternativas', 'Gestión de inventarios'],
      color: 'from-indigo-500 to-indigo-600',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones Integrales en{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aviación
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos un portafolio completo de servicios especializados para 
              mantener tu flota operando con la máxima eficiencia y seguridad.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden h-full flex flex-col"
              >
                <CardHeader className="pb-6 flex-shrink-0">
                  <div className={`w-20 h-20 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${service.bgColor} mr-3 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`w-full text-gray-700 border-gray-300 hover:bg-gray-50 group-hover:bg-gradient-to-r ${service.color} group-hover:text-white group-hover:border-transparent transition-all duration-300 mt-auto`}
                  >
                    Más Información
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-3xl p-6 sm:p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Necesitas un repuesto específico?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Nuestro equipo de especialistas está listo para ayudarte a encontrar 
                exactamente lo que necesitas, cuando lo necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
                  Solicitar Cotización
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all bg-transparent">
                  Contactar Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}