import React from 'react';

interface LogoGoolTecProps {
  className?: string;
}

const LogoGoolTec: React.FC<LogoGoolTecProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg 
        width="auto" 
        height="100%" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M100 0L50 29.5L0 59V141L50 170.5L100 200L150 170.5L200 141V59L150 29.5L100 0ZM150 141L100 170.5L50 141V59L100 29.5L150 59V141Z" 
          fill="url(#gradient)"
        />
        <path 
          d="M100 50L75 65V95L100 110L125 95V65L100 50ZM75 125V95L100 110V140L75 125ZM125 125L100 140V110L125 95V125Z" 
          fill="url(#gradient2)"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="75" y1="50" x2="125" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
        GoolTec
      </div>
    </div>
  );
};

export default LogoGoolTec;