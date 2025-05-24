import React from 'react';
// Importa tu imagen. La ruta debe ser relativa a este archivo.
// Si LogoGoolTec.tsx está en `src/components/`, y tu imagen está en `src/assets/`,
// entonces la ruta correcta es `../assets/logo-gooltec.png`.
// En src/components/shared/LogoGoolTec.tsx
import gooltecLogo from '../../assets/logo-gooltec.png'; // <-- ¡Cambio aquí!

interface LogoGoolTecProps {
  className?: string;
}

const LogoGoolTec: React.FC<LogoGoolTecProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Reemplazamos el SVG con la etiqueta <img> */}
      <img
        src={gooltecLogo} // Vite se encarga de la URL de la imagen importada
        alt="Logo GoolTec" // Texto alternativo para accesibilidad y SEO
        className="h-full w-auto object-contain -mt-6" // Añadimos -mt-2 para mover hacia arriba
      />
      {/* El texto "GoolTec" debajo del logo se mantiene */}
      <div className="text-xl font-bold mt-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
        GoolTec
      </div>
    </div>
  );
};

export default LogoGoolTec;