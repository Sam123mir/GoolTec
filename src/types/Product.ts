export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
  specifications?: Record<string, string>;
  cameraSpecs?: {
    resolution?: string;
    aperture?: string;
    opticalZoom?: string;
    features?: string[];
  };
};
