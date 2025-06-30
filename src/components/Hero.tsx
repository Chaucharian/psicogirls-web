import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-gray-300 flex flex-col md:flex-row items-center justify-between px-0 md:px-16 py-16 min-h-[400px]" style={{background: '#A7A6A6'}}>
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Llegaste al lugar indicado</h1>
        <p className="text-white text-lg mb-6 max-w-lg">Muchas veces no nos sentimos muy bien y una consulta psicológica puede ser de gran ayuda.</p>
        <a href="#" className="bg-[#D6A7C2] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#c08bb0] transition">Da el primer paso hoy</a>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <img src="/placeholder-hero.svg" alt="Hero Illustration" className="w-[350px] h-[260px] object-contain" />
      </div>
    </section>
  );
};

export default Hero; 