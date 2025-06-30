import React from 'react';
import { WppButton } from './WppButton';

const Contact = () => {
  return (
    <section id="contacto" className="w-full bg-[#F3F0F7] py-12 md:px-16 flex flex-col md:flex-row justify-between items-center relative">
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
        <button className="bg-[#BFA2DB] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a88fc2] transition mb-4">¡Reservá tus sesiones virtuales AHORA!</button>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contacto</h2>
        <div className="text-gray-700 mb-1">psionlinefem@gmail.com</div>
        <div className="text-gray-700 mb-1">+54 261 367 1618</div>
        <div className="text-gray-700 mb-1">+54 0261 76 15 14</div>
      </div>
      <div className="absolute right-10 bottom-10">
        <WppButton />
      </div>
    </section>
  );
};

export default Contact; 