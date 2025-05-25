import { Award, Target, Clock, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre GoolTec</h1>
            <p className="text-xl opacity-90">
              Somos tu aliado tecnológico, comprometidos con brindarte los mejores productos y servicios para satisfacer tus necesidades digitales.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Iniciamos el 15 de septiembre de 2021 como SuperTec Peru Sac, y luego evolucionamos para convertirnos en GoolTec, revolucionando nuestra propuesta tecnológica en la región.
              </p>
              <p className="text-gray-700 mb-4">
                Desde nuestros inicios, nos hemos comprometido con la excelencia en el servicio al cliente y con mantenernos a la vanguardia de las innovaciones tecnológicas. Nuestro equipo de expertos está constantemente capacitándose para ofrecerte la mejor asesoría y los productos más avanzados del mercado.
              </p>
              <p className="text-gray-700">
                Hoy, GoolTec es sinónimo de confianza y calidad. Nos enorgullece haber ayudado a miles de clientes a encontrar las soluciones tecnológicas que necesitan para sus hogares y negocios.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/image1.png"
                alt="Historia de GoolTec" 
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-4xl font-bold gradient-text">2021</p>
                <p className="text-gray-600">Año de fundación</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Misión, Visión y Valores</h2>
            <p className="text-gray-600">
              Nuestros principios guían cada decisión que tomamos y cada servicio que ofrecemos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Target className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Misión</h3>
              <p className="text-gray-700">
                Proporcionar soluciones tecnológicas innovadoras y accesibles que mejoren la calidad de vida de nuestros clientes, acompañadas de un servicio excepcional y personalizado.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos como el referente tecnológico preferido por los consumidores, destacando por nuestra innovación, calidad de servicio y compromiso con la satisfacción del cliente.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integridad y transparencia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Innovación constante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Excelencia en el servicio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compromiso con el cliente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Responsabilidad social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600">
              Contamos con un equipo de profesionales apasionados por la tecnología y comprometidos con brindarte el mejor servicio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/476605647_10234658851882864_5433380884732273704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEAkTP3pED7MozsRwnQFYl9zZnAK3670pLNmcArfrvSkg7_LuZeC9OUkdVLUshHGCaXFpeKz8Tr2no58eGkTaUZ&_nc_ohc=UZQsPeu1eJkQ7kNvwH3vcyS&_nc_oc=AdmA1NQMp_VKMPsexRXvs07HQ-mUGjtm6nZRT1mKBzesbZHgr4J7CYFVkQURabdtlsE&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=SNwN8Ryfuh-TBlD6K6UwdQ&oh=00_AfJ-byq2Ublp71boTAVcIscb95O7uMsgYn3x7rrxIrXcNA&oe=68386EC1" 
                  alt="Jose Quiroz" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1">Jose Manuel Quiroz Chavez</h3>
                <p className="text-indigo-600 mb-2">CEO & Fundador</p>
                <p className="text-gray-600 text-sm">
                  Con más de 15 años de experiencia en el sector empresarial.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Harold Aguilar Alegría" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1">Harold Aguilar Alegría</h3>
                <p className="text-indigo-600 mb-2">Técnico Especialista</p>
                <p className="text-gray-600 text-sm">
                  Especialista en diagnóstico y reparación de laptops, computadoras y celulares, brindando soluciones rápidas y confiables.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Roberto Sánchez" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1">Roberto Sánchez</h3>
                <p className="text-indigo-600 mb-2">Jefe de Soporte Técnico</p>
                <p className="text-gray-600 text-sm">
                  Experto en soluciones de hardware y software.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lucía Morales" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1">Lucía Morales</h3>
                <p className="text-indigo-600 mb-2">Asesora de Ventas</p>
                <p className="text-gray-600 text-sm">
                  Especializada en asesoría personalizada al cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-lg opacity-90">Años de experiencia</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg opacity-90">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Productos disponibles</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-lg opacity-90">Técnicos certificados</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para conocernos mejor?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visita nuestra tienda o contáctanos para descubrir cómo podemos ayudarte con tus necesidades tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary px-8 py-3">Contáctanos</a>
            <a href="/catalog" className="btn btn-secondary px-8 py-3">Ver Productos</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;