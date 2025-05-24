import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/shared/TestimonialCard';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ReviewsPage = () => {
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReviewFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por compartir tu opinión! Tu reseña ha sido enviada correctamente.'
    });
    
    // Reset form after successful submission
    setReviewFormData({
      name: '',
      email: '',
      rating: 5,
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <div className="pt-16 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reseñas de Clientes</h1>
            <p className="text-xl opacity-90">
              Descubre lo que nuestros clientes dicen sobre GoolTec y comparte tu experiencia con nosotros.
            </p>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600">
              Nos enorgullecemos de ofrecer un servicio excepcional y productos de calidad. Estas son algunas de las experiencias compartidas por nuestros clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Leave a Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comparte tu experiencia</h2>
              <p className="text-gray-600">
                Tu opinión es muy importante para nosotros. Comparte tu experiencia con GoolTec y ayúdanos a seguir mejorando.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={reviewFormData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={reviewFormData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Ingresa tu correo"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                    Calificación *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={reviewFormData.rating}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="5">5 estrellas - Excelente</option>
                    <option value="4">4 estrellas - Muy bueno</option>
                    <option value="3">3 estrellas - Bueno</option>
                    <option value="2">2 estrellas - Regular</option>
                    <option value="1">1 estrella - Malo</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tu opinión *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={reviewFormData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input resize-none"
                    placeholder="Comparte tu experiencia con nosotros"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Enviar Reseña
                  </button>
                </div>
                
                {formStatus && (
                  <div className={`rounded-md p-4 ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué confiar en GoolTec?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En GoolTec nos comprometemos a brindar la mejor experiencia de compra y servicio. Esto es lo que nos diferencia:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 text-4xl font-bold mb-2">100%</div>
              <h3 className="text-lg font-semibold mb-2">Satisfacción Garantizada</h3>
              <p className="text-gray-600 text-sm">
                Nos aseguramos de que cada cliente quede completamente satisfecho con nuestros productos y servicios.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 text-4xl font-bold mb-2">5+</div>
              <h3 className="text-lg font-semibold mb-2">Años de Experiencia</h3>
              <p className="text-gray-600 text-sm">
                Contamos con más de 5 años de experiencia en el sector tecnológico, brindando soluciones de calidad.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 text-4xl font-bold mb-2">4.8</div>
              <h3 className="text-lg font-semibold mb-2">Calificación Promedio</h3>
              <p className="text-gray-600 text-sm">
                Nuestra calificación promedio de 4.8/5 refleja nuestro compromiso con la excelencia.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 text-4xl font-bold mb-2">24h</div>
              <h3 className="text-lg font-semibold mb-2">Soporte Rápido</h3>
              <p className="text-gray-600 text-sm">
                Respondemos a todas las consultas en un plazo máximo de 24 horas para garantizar tu satisfacción.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para vivir la experiencia GoolTec?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Únete a miles de clientes satisfechos y descubre por qué somos la mejor opción en tecnología.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/catalog" className="btn bg-white text-indigo-600 hover:bg-opacity-90 font-semibold px-8 py-3">
              Explorar Productos
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 transition-colors">
              Contactarnos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;