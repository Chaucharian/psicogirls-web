'use client'

import React, { useState, useEffect } from 'react';

const AvailabilityForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('horarios');
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

  const faqItems = [
    {
      question: "¿Cómo es la terapia?",
      answer: "Nuestras sesiones se realizan de forma virtual a través de plataformas seguras. Utilizamos enfoques basados en evidencia como la Terapia Cognitivo Conductual y Terapias de Tercera Generación.",
      bgColor: "bg-secondary/20",
      borderColor: "border-secondary/40",
      textColor: "text-secondary"
    },
    {
      question: "¿Qué necesito para hacer terapia virtual?",
      answer: "Solo necesitas un dispositivo con conexión a internet, un espacio privado y tranquilo, y la disposición para trabajar en tu bienestar emocional.",
      bgColor: "bg-accent/20",
      borderColor: "border-accent/40",
      textColor: "text-accent"
    },
    {
      question: "¿Qué frecuencia tienen las sesiones?",
      answer: "La frecuencia se adapta a tus necesidades. Generalmente comenzamos con sesiones semanales y ajustamos según tu progreso y objetivos.",
      bgColor: "bg-accent-blue/20",
      borderColor: "border-accent-blue/40",
      textColor: "text-accent-blue"
    },
    {
      question: "¿Cuánto duran las sesiones?",
      answer: "Las sesiones tienen una duración de 50 minutos, tiempo suficiente para trabajar en profundidad en tus objetivos terapéuticos.",
      bgColor: "bg-accent/20",
      borderColor: "border-accent/40",
      textColor: "text-accent"
    },
    {
      question: "¿Qué pasa si falto a una sesión? ¿Debo abonar igual?",
      answer: "Te pedimos que canceles con al menos 24 horas de anticipación. En caso de cancelación tardía, se puede reprogramar la sesión según disponibilidad.",
      bgColor: "bg-primary/20",
      borderColor: "border-primary/40",
      textColor: "text-primary"
    }
  ];

  return (
    <section id="horarios" className="w-full bg-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6">Preguntas frecuentes</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Resolvemos las dudas más comunes sobre nuestras sesiones de terapia virtual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={`${item.bgColor} rounded-xl p-6 border ${item.borderColor} transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-md ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2 flex items-center">
                  <span className={`${item.textColor} mr-2 transition-transform duration-300 group-hover:scale-110`}>&gt;</span>
                  {item.question}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Availability Form */}
          <div className={`bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 shadow-sm border border-primary/40 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-xl font-serif font-bold text-gray-600 mb-6">Disponibilidad horaria</h3>
            <p className="text-gray-500 mb-6 leading-relaxed font-sans">
              Si ya te decidiste a empezar terapia, dejanos un mensaje y empezamos a recorrer juntos este camino. Contanos tu disponibilidad horaria y te asignaremos un turno en menos de 24 horas.
            </p>
            
            <form className="space-y-4">
              <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '600ms' }}>
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white text-black placeholder:text-gray-400 hover:border-gray-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '700ms' }}>
                  <input 
                    type="text" 
                    placeholder="Código de área" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white text-black placeholder:text-gray-400 hover:border-gray-300"
                  />
                </div>
                <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '800ms' }}>
                  <input 
                    type="text" 
                    placeholder="Teléfono" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white text-black placeholder:text-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>
              <div className="transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '900ms' }}>
                <input 
                  type="email" 
                  placeholder="Mail" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-white text-black placeholder:text-gray-400 hover:border-gray-300"
                />
              </div>
              
              <div className="flex items-start space-x-3 transition-all duration-500 ease-out transform hover:scale-105" style={{ transitionDelay: '1000ms' }}>
                <input 
                  type="checkbox" 
                  id="virtual" 
                  className="mt-1 h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded transition-all duration-300 hover:scale-110"
                />
                <label htmlFor="virtual" className="text-sm text-gray-500 font-sans">
                  Conozco que sus Psicólogas atienden sólo de forma virtual
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-white border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: '1100ms' }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityForm; 