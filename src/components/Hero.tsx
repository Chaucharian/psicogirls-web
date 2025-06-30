import React from 'react';

const Hero = () => {
  return (
    <section className="w-full relative flex flex-col md:flex-row items-center justify-between px-0 md:px-16 py-16 min-h-[400px]">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img src="/images/hero.png" alt="Hero Illustration" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gray-600/80"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-0 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Llegaste al lugar indicado</h1>
        <p className="text-white text-lg mb-6 max-w-lg">Muchas veces no nos sentimos muy bien y una consulta psicológica puede ser de gran ayuda.</p>
        <a href="/#contacto" className="bg-[#D6A7C2] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#c08bb0] transition">Da el primer paso hoy</a>
      </div>
    </section>
  );
};

export default Hero; 