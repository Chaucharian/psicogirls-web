'use client'

import React, { useState, useEffect } from 'react';
import { WppButton } from './WppButton';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contacto');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contacto" className="w-full bg-gradient-to-bt from-white to-accent/20 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6">¡Empecemos!</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Recordá que el objetivo de este formulario es enviarte información lo más detallada posible sobre las sesiones, no te compromete a seguir avanzando con el proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`bg-background rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-serif font-bold text-gray-600 mb-6">Enviá tu consulta</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '300ms' }}>
                  <label className="block text-sm font-medium text-gray-600 mb-2 font-sans">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-black placeholder:text-gray-400 hover:border-gray-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '400ms' }}>
                  <label className="block text-sm font-medium text-gray-600 mb-2 font-sans">Apellido</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-black placeholder:text-gray-400 hover:border-gray-300"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '500ms' }}>
                <label className="block text-sm font-medium text-gray-600 mb-2 font-sans">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-black placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '600ms' }}>
                <label className="block text-sm font-medium text-gray-600 mb-2 font-sans">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-black placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
              
              <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '700ms' }}>
                <label className="block text-sm font-medium text-gray-600 mb-2 font-sans">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-black placeholder:text-gray-400 hover:border-gray-300"
                  placeholder="Contanos brevemente sobre tu consulta..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                {/* <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-gray-500">
                  He leído y acepto la <a href="#" className="text-primary hover:text-primary/80 underline">Política de Privacidad</a>
                </label> */}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: '800ms' }}
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`bg-background rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-serif font-bold text-gray-600 mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-sans">Email</p>
                    <p className="text-gray-600 font-medium font-sans">haciendoterapia@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-sans">Teléfono</p>
                    <p className="text-gray-600 font-medium font-sans">+54 9 11 5742-8691</p>
                    <p className="text-gray-600 font-medium font-sans">+54 261 367 1618</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border border-primary/40 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-serif font-bold text-gray-600 mb-4">¡Reservá tus sesiones virtuales AHORA!</h3>
              <p className="text-gray-500 mb-6 font-sans">
                Da el primer paso hacia tu bienestar emocional. Nuestras profesionales están listas para acompañarte en tu proceso de crecimiento personal.
              </p>
              <button 
                onClick={() => {
                  const whatsappNumbers = ["5491157428691", "542613671618"];
                  const randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
                  const selectedNumber = whatsappNumbers[randomIndex];
                  window.open(`https://wa.me/${selectedNumber}`, '_blank');
                }}
                className="w-full bg-white border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
              >
                Agendar consulta
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WppButton />
      </div>
    </section>
  );
};

export default Contact; 