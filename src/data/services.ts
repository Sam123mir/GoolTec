export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Instalación y Configuración",
    description: "Instalamos y configuramos equipos, componentes, cámaras de seguridad y redes para un funcionamiento eficiente y seguro.",
    icon: "SettingsIcon",
    benefits: [
      "Instalación de hardware y software",
      "Montaje de componentes para PC",
      "Instalación de cámaras de seguridad",
      "Configuración de redes y sistemas",
      "Optimización de rendimiento",
      "Migración de datos y configuración de seguridad"
    ]
  },
  {
    id: 2,
    title: "Soporte Técnico",
    description: "Soporte técnico especializado para resolver fallos, mejorar el rendimiento y garantizar la estabilidad de tus equipos.",
    icon: "HeadsetIcon",
    benefits: [
      "Diagnóstico y solución de problemas",
      "Soporte remoto y en sitio",
      "Mantenimiento preventivo y correctivo",
      "Actualizaciones de software y firmware",
      "Copia de seguridad y recuperación de datos"
    ]
  },
  {
    id: 3,
    title: "Asesoría Tecnológica",
    description: "Te ayudamos a tomar decisiones tecnológicas inteligentes según tus necesidades, presupuesto y objetivos.",
    icon: "LightbulbIcon",
    benefits: [
      "Análisis personalizado de necesidades",
      "Recomendaciones de equipos y sistemas",
      "Optimización de inversión tecnológica",
      "Planes de renovación tecnológica",
      "Evaluación de compatibilidad entre equipos"
    ]
  },
  {
    id: 4,
    title: "Reparación de Equipos",
    description: "Reparamos computadoras, laptops y dispositivos electrónicos con garantía, repuestos de calidad y atención rápida.",
    icon: "ToolIcon",
    benefits: [
      "Reparación de fallas de hardware",
      "Solución de errores de software",
      "Reemplazo de piezas y componentes",
      "Recuperación avanzada de datos",
      "Servicio con garantía"
    ]
  }
];
