import { services } from '../data/services';
import ServiceCard from '../components/shared/ServiceCard';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="pt-16 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl opacity-90">
              Soluciones tecnológicas integrales diseñadas para satisfacer tus necesidades.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Servicios Tecnológicos Profesionales</h2>
            <p className="text-gray-600">
              En GoolTec ofrecemos una amplia gama de servicios tecnológicos para particulares y empresas, todos respaldados por nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-gray-600">
              Seguimos un proceso estructurado para garantizar la mejor experiencia y resultados para nuestros clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow z-10 relative">
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold mt-4 mb-3">Consulta Inicial</h3>
                <p className="text-gray-600">
                  Evaluamos tus necesidades tecnológicas y te ofrecemos asesoramiento personalizado.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-indigo-200 -z-10 transform -translate-y-1/2"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow z-10 relative">
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold mt-4 mb-3">Diagnóstico</h3>
                <p className="text-gray-600">
                  Analizamos en profundidad la situación actual y determinamos la mejor solución.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-indigo-200 -z-10 transform -translate-y-1/2"></div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow z-10 relative">
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold mt-4 mb-3">Implementación</h3>
                <p className="text-gray-600">
                  Ejecutamos la solución acordada con los más altos estándares de calidad.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-indigo-200 -z-10 transform -translate-y-1/2"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow z-10 relative">
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold mt-4 mb-3">Seguimiento</h3>
                <p className="text-gray-600">
                  Verificamos que todo funcione correctamente y ofrecemos soporte continuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros servicios tecnológicos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Qué tipos de equipos reparan?</h3>
              <p className="text-gray-600">
                Reparamos todo tipo de dispositivos electrónicos: computadoras, laptops, tablets, smartphones, monitores, impresoras y más. Nuestros técnicos están capacitados para solucionar problemas tanto de hardware como de software.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Cuánto tiempo toma una reparación?</h3>
              <p className="text-gray-600">
                El tiempo de reparación varía según el tipo de problema y la disponibilidad de repuestos. La mayoría de las reparaciones básicas se completan en 24-48 horas, mientras que las más complejas pueden tomar de 3 a 5 días hábiles.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Ofrecen garantía en sus servicios?</h3>
              <p className="text-gray-600">
                Sí, todos nuestros servicios incluyen garantía. Las reparaciones tienen una garantía de 90 días que cubre tanto las piezas reemplazadas como la mano de obra. Las instalaciones de sistemas y redes cuentan con 1 año de garantía.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Realizan servicios a domicilio?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos servicios a domicilio para instalaciones, configuraciones y diagnósticos iniciales. También contamos con soporte remoto para problemas que puedan resolverse sin necesidad de una visita presencial.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Qué incluye el soporte técnico?</h3>
              <p className="text-gray-600">
                Nuestro soporte técnico incluye diagnóstico de problemas, solución de errores de software, eliminación de malware, optimización del sistema, actualizaciones de seguridad y asesoramiento personalizado.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">¿Ofrecen planes de mantenimiento?</h3>
              <p className="text-gray-600">
                Sí, contamos con planes de mantenimiento preventivo para empresas y particulares. Estos incluyen revisiones periódicas, optimizaciones, respaldos de información y atención prioritaria ante cualquier incidencia.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              ¿No encuentras respuesta a tu pregunta? Contáctanos directamente.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              <Phone size={18} className="mr-2" />
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>
      
      {/* Business Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Servicios para Empresas</h2>
              <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Ofrecemos soluciones tecnológicas integrales diseñadas específicamente para impulsar el crecimiento y la productividad de tu empresa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Implementación y gestión de redes empresariales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Soluciones de ciberseguridad y protección de datos</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Servicios de hosting y soluciones en la nube</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Mantenimiento preventivo y soporte técnico continuo</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Asesoría en transformación digital y optimización de procesos</span>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Solicitar Cotización
              </Link>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Servicios empresariales" 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas ayuda con tus dispositivos?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Nuestro equipo de expertos está listo para ofrecerte la mejor solución tecnológica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-indigo-600 hover:bg-opacity-90 font-semibold px-8 py-3">
              Solicitar Servicio
            </Link>
            <a 
              href="tel:+51912345678" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 transition-colors inline-flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              +51 912 345 678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;