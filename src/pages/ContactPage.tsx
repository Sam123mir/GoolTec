import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/shared/ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-16 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl opacity-90">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y responderemos a todas tus consultas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ubicación</h3>
              <p className="text-gray-600 mb-2">Av. Tecnológica 123</p>
              <p className="text-gray-600">Ciudad Tech, CP 12345</p>
            </div>
            
            {/* Contact */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Teléfono & Email</h3>
              <p className="text-gray-600 mb-2">
                <a href="tel:+51912345678" className="hover:text-indigo-600 transition-colors">+51 912 345 678</a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:contacto@gooltec.com" className="hover:text-indigo-600 transition-colors">contacto@gooltec.com</a>
              </p>
            </div>
            
            {/* Hours */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Clock className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
              <p className="text-gray-600 mb-2">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
            
            {/* Map and Additional Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Encuéntranos</h2>
              {/* Map placeholder - in a real app, use Google Maps or similar */}
              <div className="bg-gray-200 h-80 rounded-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">Mapa interactivo</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Otras formas de contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <MessageCircle className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Chat en vivo</h4>
                      <p className="text-gray-600 text-sm">
                        Chatea directamente con nuestros asesores en tiempo real a través de nuestro WhatsApp.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Mail className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Soporte técnico</h4>
                      <p className="text-gray-600 text-sm">
                        Para asistencia técnica, escríbenos a <a href="mailto:soporte@gooltec.com" className="text-indigo-600 hover:underline">soporte@gooltec.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Mail className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Ventas corporativas</h4>
                      <p className="text-gray-600 text-sm">
                        Para consultas empresariales, escríbenos a <a href="mailto:empresas@gooltec.com" className="text-indigo-600 hover:underline">empresas@gooltec.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600">
              Respuestas a las consultas más comunes sobre nuestros servicios y productos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">¿Cuáles son los métodos de pago aceptados?</h3>
              <p className="text-gray-600">
                Aceptamos pagos con tarjetas de crédito/débito, transferencias bancarias, PayPal y efectivo para compras en tienda.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">¿Cuánto tiempo tarda el envío?</h3>
              <p className="text-gray-600">
                Los envíos locales suelen tardar de 1 a 3 días hábiles. Para zonas más alejadas, puede tomar entre 3 y 5 días hábiles.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">¿Tienen garantía los productos?</h3>
              <p className="text-gray-600">
                Todos nuestros productos cuentan con garantía del fabricante. Además, ofrecemos garantía adicional en productos seleccionados.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">¿Cómo puedo hacer un seguimiento de mi pedido?</h3>
              <p className="text-gray-600">
                Una vez realizado tu pedido, recibirás un correo con un número de seguimiento para rastrear tu envío en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Nuestro equipo está listo para ayudarte con todas tus necesidades tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+51912345678" 
              className="btn bg-white text-indigo-600 hover:bg-opacity-90 font-semibold px-8 py-3 inline-flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              Llamar Ahora
            </a>
            <a 
              href="https://wa.me/51912345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;