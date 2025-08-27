import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Globe2, Shield, Zap, Users } from 'lucide-react';

export default function Proveedores() {
  const supplierCategories = [
    {
      title: 'OEM Autorizados',
      description: 'Fabricantes originales de equipos con certificaciones completas',
      icon: <Award className="h-8 w-8 text-blue-600" />,
      brands: ['Boeing', 'Airbus', 'Embraer', 'Bombardier'],
      features: ['Garantía completa', 'Documentación OEM', 'Soporte técnico directo'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Proveedores PMA',
      description: 'Fabricantes de partes alternativas con aprobación de aeronavegabilidad',
      icon: <Shield className="h-8 w-8 text-green-600" />,
      brands: ['Collins Aerospace', 'Honeywell', 'Parker Hannifin', 'Eaton'],
      features: ['Certificación PMA', 'Precios competitivos', 'Disponibilidad extendida'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Distribuidores Globales',
      description: 'Red mundial de distribuidores especializados en aviación',
      icon: <Globe2 className="h-8 w-8 text-purple-600" />,
      brands: ['Wencor Group', 'Satair', 'AeroTech', 'Kellstrom Aerospace'],
      features: ['Cobertura global', 'Stock diversificado', 'Logística especializada'],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Sistema de gestión de calidad',
      icon: '📋',
    },
    {
      name: 'AS9100D',
      description: 'Estándar aeroespacial',
      icon: '✈️',
    },
    {
      name: 'EASA Part 145',
      description: 'Organización de mantenimiento',
      icon: '🔧',
    },
    {
      name: 'FAA Repair Station',
      description: 'Estación de reparación certificada',
      icon: '🛠️',
    },
  ];

  const partnershipBenefits = [
    'Acceso a inventario exclusivo',
    'Precios preferenciales',
    'Soporte técnico 24/7',
    'Capacitación especializada',
    'Programas de consignación',
    'Rotables pool management',
  ];

  return (
    <section id="proveedores" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-blue-700 border-blue-300">
              Red de Proveedores
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Alianzas{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Estratégicas
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trabajamos con los mejores proveedores del mundo para garantizar 
              la disponibilidad y calidad de cada componente aeronáutico.
            </p>
          </div>

          {/* Supplier Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {supplierCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <CardHeader className="text-center pb-6 flex-shrink-0">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-700">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  {/* Brand Examples */}
                  <div className="mb-8">
                    <div className="font-medium text-gray-700 mb-4">Ejemplos de marcas:</div>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand, brandIndex) => (
                        <Badge key={brandIndex} variant="secondary">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 flex-grow">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Standards */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
              Certificaciones y Estándares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{cert.name}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                ¿Por qué ser nuestro proveedor?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Únete a nuestra red global de proveedores certificados y accede 
                a oportunidades de negocio exclusivas en el sector aeronáutico.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
                  Aplicar como Proveedor
                </Button>
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all text-gray-700 border-gray-300 hover:bg-gray-50">
                  Descargar Requisitos
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Tarjetas y red global de proveedores"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-1">Red Global</h4>
                    <p className="text-sm text-gray-600">Más de 200 proveedores certificados en 6 continentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-3xl p-8 md:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
              Proceso de Certificación de Proveedores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">1. Aplicación</h4>
                <p className="text-blue-100">Envío de documentación inicial</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">2. Evaluación</h4>
                <p className="text-blue-100">Auditoría de capacidades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">3. Certificación</h4>
                <p className="text-blue-100">Aprobación y registro</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">4. Activación</h4>
                <p className="text-blue-100">Inicio de operaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}