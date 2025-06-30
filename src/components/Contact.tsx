import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="w-full bg-[#F3F0F7] py-12 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
        <button className="bg-[#BFA2DB] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a88fc2] transition mb-4">¡Reservá tus sesiones virtuales AHORA!</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contacto</h2>
        <div className="text-gray-700 mb-1">psionlinefem@gmail.com</div>
        <div className="text-gray-700 mb-1">+54 261 367 1618</div>
        <div className="text-gray-700 mb-1">+54 0261 76 15 14</div>
      </div>
      <div className="flex-1 flex justify-end w-full">
        <a href="https://wa.me/542613671618" target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded-full p-4 shadow hover:bg-green-600 transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32" height="32"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.38 5.08L2 22l5.08-1.38A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-3.01.82.82-3.01-.17-.32A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.23-.18.18-.7.68-.7 1.65 0 .97.71 1.91.81 2.05.1.13 1.39 2.13 3.37 2.91.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Contact; 