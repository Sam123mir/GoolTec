import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+51925252599'; // Replace with your actual WhatsApp number
  const message = 'Hola mucho gusto GoolTec, me gustaría obtener más información sobre sus productos.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;