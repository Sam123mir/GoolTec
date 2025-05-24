export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    position: "Director de Tecnología",
    company: "Innova Solutions",
    content: "GoolTec ha sido un socio tecnológico excepcional. Su asesoría nos permitió implementar soluciones que aumentaron nuestra productividad en un 30%. Además, el soporte técnico es rápido y eficiente.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Ana Luisa Jiménez",
    position: "Diseñadora Gráfica",
    company: "Freelance",
    content: "Compré mi laptop en GoolTec y la experiencia fue fantástica. Me asesoraron perfectamente según mis necesidades de diseño y el equipo ha superado mis expectativas. El servicio post-venta también es excelente.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Roberto Sánchez",
    position: "Gerente General",
    company: "RS Consulting",
    content: "La implementación de nuestro sistema de redes por parte de GoolTec fue impecable. Cumplieron con los plazos prometidos y el resultado final supera lo que esperábamos. Definitivamente seguiremos trabajando con ellos.",
    rating: 4,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Lucía Morales",
    position: "Estudiante de Ingeniería",
    content: "Encontré en GoolTec justo lo que necesitaba para mis estudios a un precio accesible. El equipo me orientó perfectamente y me ofrecieron un plan de financiamiento que se adaptaba a mi presupuesto.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];