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
    description: "Instalación profesional y configuración de equipos, software y redes para un funcionamiento óptimo.",
    icon: "SettingsIcon",
    benefits: [
      "Instalación de hardware y software",
      "Configuración de redes y sistemas",
      "Optimización de rendimiento",
      "Migración de datos",
      "Configuración de seguridad"
    ]
  },
  {
    id: 2,
    title: "Soporte Técnico",
    description: "Soporte técnico especializado para resolver problemas y mantener tus dispositivos funcionando correctamente.",
    icon: "HeadsetIcon",
    benefits: [
      "Diagnóstico y resolución de problemas",
      "Soporte remoto y presencial",
      "Mantenimiento preventivo",
      "Actualizaciones de sistema",
      "Respaldo de datos"
    ]
  },
  {
    id: 3,
    title: "Asesoría Tecnológica",
    description: "Consultoría personalizada para ayudarte a elegir las mejores soluciones tecnológicas para tus necesidades.",
    icon: "LightbulbIcon",
    benefits: [
      "Análisis de necesidades tecnológicas",
      "Recomendaciones personalizadas",
      "Optimización de presupuesto",
      "Planificación de actualización",
      "Evaluación de compatibilidad"
    ]
  },
  {
    id: 4,
    title: "Reparación de Equipos",
    description: "Servicio técnico especializado para reparar tus dispositivos electrónicos con garantía y rapidez.",
    icon: "ToolIcon",
    benefits: [
      "Reparación de hardware",
      "Solución de problemas de software",
      "Reemplazo de componentes",
      "Recuperación de datos",
      "Garantía en reparaciones"
    ]
  }
];