import React from 'react';

const About = () => {
  return (
    <section id="terapia" className="w-full bg-background py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6">¿Cómo podemos ayudarte?</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Trabajamos con diferentes enfoques terapéuticos, incluyendo Terapia Cognitivo Conductual, Psicoanálisis y Terapias de Tercera Generación, desarrollando planes de tratamiento adaptados a tus objetivos y necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Ansiedad Generalizada</h3>
            <p className="text-gray-500 text-sm font-sans">Te ayudamos a manejar la ansiedad y encontrar calma en tu día a día.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-accent/20 hover:bg-accent/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Depresión</h3>
            <p className="text-gray-500 text-sm font-sans">Acompañamos tu proceso de recuperación y bienestar emocional.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-accent-blue/20 hover:bg-accent-blue/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-accent-blue/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Estrés</h3>
            <p className="text-gray-500 text-sm font-sans">Aprendemos técnicas efectivas para manejar el estrés cotidiano.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-accent/20 hover:bg-accent/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Ansiedad Social</h3>
            <p className="text-gray-500 text-sm font-sans">Desarrollamos confianza y habilidades sociales.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-primary/20 hover:bg-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Desarrollo Personal</h3>
            <p className="text-gray-500 text-sm font-sans">Crecimiento personal y autoconocimiento.</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-semibold text-gray-600 mb-2">Bienestar Integral</h3>
            <p className="text-gray-500 text-sm font-sans">Acompañamiento holístico para tu salud mental.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
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