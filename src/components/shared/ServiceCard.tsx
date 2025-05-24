import React from 'react';
import { Settings as SettingsIcon, Headset as HeadsetIcon, Lightbulb as LightbulbIcon, PenTool as ToolIcon, Check as CheckIcon } from 'lucide-react';
import { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SettingsIcon':
        return <SettingsIcon size={24} className="text-indigo-600" />;
      case 'HeadsetIcon':
        return <HeadsetIcon size={24} className="text-indigo-600" />;
      case 'LightbulbIcon':
        return <LightbulbIcon size={24} className="text-indigo-600" />;
      case 'ToolIcon':
        return <ToolIcon size={24} className="text-indigo-600" />;
      default:
        return <SettingsIcon size={24} className="text-indigo-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {getIcon(service.icon)}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      
      <ul className="space-y-2 mt-2">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;