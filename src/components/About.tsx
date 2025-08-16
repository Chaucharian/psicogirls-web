'use client'

import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('terapia');
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
    <section id="terapia" className="w-full bg-background py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6 animate-fade-in">¿Cómo podemos ayudarte?</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans animate-fade-in-delay">
            Trabajamos con diferentes enfoques terapéuticos, incluyendo Terapia Cognitivo Conductual, Psicoanálisis y Terapias de Tercera Generación, desarrollando planes de tratamiento adaptados a tus objetivos y necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "Ansiedad Generalizada",
              description: "Te ayudamos a manejar la ansiedad y encontrar calma en tu día a día.",
              bgColor: "bg-primary/20 hover:bg-primary/30",
              iconBg: "bg-primary/50",
              iconColor: "text-primary"
            },
            {
              icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              title: "Depresión",
              description: "Acompañamos tu proceso de recuperación y bienestar emocional.",
              bgColor: "bg-secondary/20 hover:bg-secondary/30",
              iconBg: "bg-secondary/50",
              iconColor: "text-secondary"
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Estrés",
              description: "Aprendemos técnicas efectivas para manejar el estrés cotidiano.",
              bgColor: "bg-accent/20 hover:bg-accent/30",
              iconBg: "bg-accent/50",
              iconColor: "text-accent"
            },
            {
              icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              title: "Ansiedad Social",
              description: "Desarrollamos confianza y habilidades sociales.",
              bgColor: "bg-primary/20 hover:bg-primary/30",
              iconBg: "bg-primary/50",
              iconColor: "text-primary"
            },
            {
              icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              title: "Desarrollo Personal",
              description: "Crecimiento personal y autoconocimiento.",
              bgColor: "bg-secondary/20 hover:bg-secondary/30",
              iconBg: "bg-secondary/50",
              iconColor: "text-secondary"
            },
            {
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Bienestar Integral",
              description: "Acompañamiento holístico para tu salud mental.",
              bgColor: "bg-accent/20 hover:bg-accent/30",
              iconBg: "bg-accent/50",
              iconColor: "text-accent"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl ${item.bgColor} transition-all duration-700 ease-out transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110`}>
                <svg className={`w-8 h-8 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                </svg>
              </div>
              <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-sans">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-t from-[#faf3ed] to-white rounded-2xl p-8 md:p-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-600 mb-4">¿Cuándo buscar profesional?</h3>
            <p className="text-gray-500 mb-4 leading-relaxed font-sans">
              Hay momentos en la vida en que sentimos angustia, depresión, miedo recurrente o ansiedad y es posible que no contemos, tratemos o logremos superar informaciones acerca de acontecimientos pasados, conflictos en las relaciones interpersonales, entre otros. La baja autoestima también es un factor.
            </p>
            <p className="text-gray-500 mb-4 leading-relaxed font-sans">
              Si bien muchas veces el espacio cotidiano diverso nos ayuda, consultar con un profesional puede transformar y dar una nueva perspectiva.
            </p>
            <p className="text-gray-500 leading-relaxed font-sans">
              La consulta inicial se realiza online, en familia y siguiendo los protocolos de higiene solicitados por el Ministerio de Salud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;