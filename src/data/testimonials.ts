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
    position: "Dueño",
    company: "Tapicería La Mascara",
    content: "Compramos computadoras en GoolTec para emitir nuestras boletas electrónicas y el proceso fue muy sencillo. Nos asesoraron sobre el equipo ideal para nuestro negocio de tapicería de motos y la atención fue excelente.",
    rating: 5,
    image: "https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/494440835_723169750227082_2376945720815820394_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqidUaZJ4L_Uos8tRMVJ0PECx8IgCthuwQLHwiAK2G7Ogsj1u7s0LukJsv-ZFqBOZ-ABwZWxVV1aXnTQiIUt8V&_nc_ohc=GmJ7dDoaAl4Q7kNvwH0EQi3&_nc_oc=AdlGRiumPgffc9OtoohLjAgWU7c4z-vDLJUXHZC8VpB7A5wOXtClqITNOezFc9PC3ag&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=bwqnC60GkyNYIO1Z3adXzQ&oh=00_AfJd_L0xKFOdCygzf4jW7vvekaaYgxltwJLzCO1_TRNgUQ&oe=683867AF"
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