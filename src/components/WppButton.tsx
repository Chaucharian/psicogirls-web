'use client'

export const WppButton = () => {
  const whatsappNumbers = [
    "542613671618",
    "540261761514"
  ];
  
  const handleWhatsAppClick = () => {
    const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    const randomNumber = whatsappNumbers[randomIndex];
    window.open(`https://wa.me/${randomNumber}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="bg-secondary rounded-full p-4 shadow hover:bg-secondary/80 transition flex items-center"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="white" 
        viewBox="0 0 24 24" 
        width="48" 
        height="48"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.08L2 22l5.08-1.38A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-3.01.82.82-3.01-.17-.32A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.23-.18.18-.7.68-.7 1.65 0 .97.71 1.91.81 2.05.1.13 1.39 2.13 3.37 2.91.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
      </svg>
    </button>
  );
};