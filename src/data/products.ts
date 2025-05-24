import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop GoolTec Pro",
    description: "Potente laptop con procesador de última generación, perfecta para trabajo y gaming.",
    price: 1299.99,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Laptops",
    inStock: true,
    featured: true,
    specifications: {
      "Procesador": "Intel Core i7 12700H",
      "RAM": "16GB DDR4",
      "Almacenamiento": "512GB SSD",
      "Pantalla": "15.6\" FHD IPS",
      "Tarjeta Gráfica": "NVIDIA RTX 3060 6GB"
    }
  },
  {
    id: 2,
    name: "Smartphone GoolTec X2",
    description: "Smartphone de gama alta con cámara profesional y batería de larga duración.",
    price: 799.99,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Smartphones",
    inStock: true,
    featured: true,
    specifications: {
      "Procesador": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Almacenamiento": "256GB",
      "Pantalla": "6.7\" AMOLED 120Hz",
      "Cámara": "108MP + 48MP + 12MP"
    }
  },
  {
    id: 3,
    name: "Tablet GoolPad Air",
    description: "Tablet ultraligera con pantalla de alta resolución ideal para creativos.",
    price: 499.99,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Tablets",
    inStock: true,
    featured: false,
    specifications: {
      "Procesador": "A14 Bionic",
      "RAM": "8GB",
      "Almacenamiento": "128GB",
      "Pantalla": "11\" Retina Display",
      "Batería": "10,000 mAh"
    }
  },
  {
    id: 4,
    name: "Auriculares GoolTec Sound Pro",
    description: "Auriculares inalámbricos con cancelación de ruido activa y sonido envolvente.",
    price: 199.99,
    image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Audio",
    inStock: true,
    featured: false,
    specifications: {
      "Tipo": "Over-ear",
      "Conectividad": "Bluetooth 5.2",
      "Autonomía": "30 horas",
      "Cancelación de ruido": "Activa",
      "Micrófono": "Incorporado"
    }
  },
  {
    id: 5,
    name: "Monitor GoolTec UltraWide",
    description: "Monitor curvo ultrawide para una experiencia inmersiva de trabajo y gaming.",
    price: 449.99,
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Monitores",
    inStock: true,
    featured: true,
    specifications: {
      "Tamaño": "34\"",
      "Resolución": "3440x1440",
      "Tasa de refresco": "144Hz",
      "Tiempo de respuesta": "1ms",
      "Panel": "IPS"
    }
  },
  {
    id: 6,
    name: "Teclado Mecánico GoolTec K1",
    description: "Teclado mecánico RGB con switches Cherry MX para gamers exigentes.",
    price: 129.99,
    image: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Periféricos",
    inStock: true,
    featured: false,
    discount: 15,
    specifications: {
      "Tipo": "Mecánico",
      "Switches": "Cherry MX Red",
      "Iluminación": "RGB personalizable",
      "Conectividad": "USB-C desmontable",
      "Layout": "Español"
    }
  },
  {
    id: 7,
    name: "Smart TV GoolTec 55\"",
    description: "Televisor inteligente 4K con tecnología QLED y asistente de voz integrado.",
    price: 699.99,
    image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Televisores",
    inStock: true,
    featured: true,
    specifications: {
      "Tamaño": "55\"",
      "Resolución": "4K UHD",
      "Tecnología": "QLED",
      "Smart TV": "Android TV",
      "Conectividad": "4x HDMI, 2x USB, Wi-Fi, Bluetooth"
    }
  },
  {
    id: 8,
    name: "Router GoolTec Mesh",
    description: "Sistema Wi-Fi mesh para cobertura total en hogares grandes.",
    price: 249.99,
    image: "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Redes",
    inStock: true,
    featured: false,
    specifications: {
      "Velocidad": "AX5400",
      "Cobertura": "Hasta 500m²",
      "Unidades": "3 nodos",
      "Ethernet": "2x Gigabit por nodo",
      "Tecnología": "Wi-Fi 6"
    }
  }
];

export const categories = [
  "Laptops",
  "Smartphones",
  "Tablets",
  "Audio",
  "Monitores",
  "Periféricos",
  "Televisores",
  "Redes"
];