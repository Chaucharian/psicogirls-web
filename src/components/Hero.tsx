import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full relative flex items-center justify-center px-4 md:px-16 py-24 min-h-[600px] mt-16">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-emerald-100/20"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-6 leading-tight">
          Este es un espacio para crecer
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Te acompañamos a desarrollar habilidades para vivir una vida más plena. 
          Muchas veces no nos sentimos muy bien y una consulta psicológica puede ser de gran ayuda.
        </p>
        <Link 
          href="/#contacto" 
          className="inline-flex items-center px-8 py-4 border-2 border-emerald-300 text-emerald-600 bg-white rounded-lg font-semibold shadow-sm hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Respondo tus dudas
        </Link>
      </div>
    </section>
  );
};

export default Hero;