import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Headset as HeadsetMic, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/shared/ProductCard';
import TestimonialCard from '../components/shared/TestimonialCard';

const HomePage = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  // Get top testimonials
  const topTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Un golazo en tecnología
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Encuentra los mejores productos tecnológicos con la garantía y calidad que mereces. Tu solución tecnológica en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn bg-white text-indigo-600 hover:bg-opacity-90 font-semibold px-6 py-3">
                Ver Productos
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-6 py-3 transition-colors">
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Tecnología GoolTec" 
              className="rounded-lg shadow-2xl object-cover max-h-96 w-full animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ShoppingCart className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Amplio Catálogo</h3>
              <p className="text-gray-600">
                Encuentra los últimos productos tecnológicos de las mejores marcas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <HeadsetMic className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Soporte Técnico</h3>
              <p className="text-gray-600">
                Asistencia especializada para resolver cualquier problema con tus dispositivos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantía Extendida</h3>
              <p className="text-gray-600">
                Todos nuestros productos cuentan con garantía extendida para tu tranquilidad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Truck className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Envío Rápido</h3>
              <p className="text-gray-600">
                Entrega a domicilio en tiempo récord para que disfrutes de tus compras lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Productos Destacados</h2>
            <Link 
              to="/catalog" 
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors"
            >
              Ver todos
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Sobre GoolTec</h2>
              <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                En <span className="font-semibold">GoolTec</span> nos dedicamos a ofrecerte la mejor tecnología con un servicio excepcional. Nuestra pasión por la innovación y el compromiso con la satisfacción del cliente nos diferencia en el mercado.
              </p>
              <p className="text-gray-700 mb-6">
                Contamos con un equipo de expertos en tecnología que te guiará para encontrar la solución perfecta para tus necesidades. Ya sea que busques equipos de última generación o soporte técnico profesional, estamos aquí para ayudarte.
              </p>
              <Link to="/about" className="btn btn-primary">
                Conoce más sobre nosotros
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipo GoolTec" 
                className="rounded-lg shadow-md object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-indigo-600">+1000</p>
                <p className="text-gray-700">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor recompensa. Conoce las experiencias de quienes ya han confiado en GoolTec.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {topTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn btn-secondary">
              Ver todas las reseñas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para dar un golazo tecnológico?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Visita nuestra tienda y descubre los mejores productos tecnológicos con ofertas especiales y atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/catalog" className="btn bg-white text-indigo-600 hover:bg-opacity-90 font-semibold px-8 py-3">
              Explorar Productos
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 transition-colors">
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;