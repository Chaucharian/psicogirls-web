import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Lic. Tatiana Carla Archetti',
    img: '/images/tati.png',
    desc: 'Lic. en Psicología especializada en Terapia Cognitivo Conductual (TCC). Experiencia en el tratamiento de ansiedad, depresión y trastornos del estado de ánimo. Formación en terapias de tercera generación y mindfulness. Atención a adolescentes y adultos con enfoque en el desarrollo de habilidades de afrontamiento y regulación emocional.',
    cta: 'Sacá un turno Online conmigo',
    specialty: 'Terapia Cognitivo Conductual',
    license: 'M.N. 79053'
  },
  {
    name: 'Lic. Romina Tate',
    img: '/images/romi.png',
    desc: 'Lic. en Psicología con enfoque ecléctico que integra diferentes corrientes terapéuticas según las necesidades de cada persona. Experiencia en terapia sistémica, cognitivo-conductual y humanista. Especializada en atención a niños, adolescentes y adultos, con perspectiva de género y abordaje personalizado para cada consultante.',
    cta: 'Sacá un turno Virtual conmigo',
    specialty: 'Terapia Ecléctica',
    license: 'M.N. 79054'
  },
  {
    name: 'Lic. Agostina Sidone',
    img: '/images/agos.jpeg',
    desc: 'Lic. en Psicología especializada en Psicoanálisis. Trabajando con el inconsciente y las asociaciones libres. Atención a niños, adolescentes y adultos, ayudando a explorar conflictos internos, traumas y patrones relacionales. Enfoque en el desarrollo personal a través del autoconocimiento.',
    cta: 'Sacá un turno Virtual conmigo',
    specialty: 'Terapia Psicoanalítica',
    license: 'M.N. 79055'
  },
];

const Team = () => {
  return (
    <section id="nosotros" className="w-full bg-gradient-to-br from-primary/20 to-secondary/20 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-600 mb-6">Somos Haciendo Terapia</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            Psicólogas Clínicas egresadas de la Universidad de Buenos Aires. Nuestro objetivo es habilitar un espacio de desarrollo personal adaptado a tus objetivos en el que te sientas seguro y acompañado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={128} 
                    height={128} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-secondary/40" 
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-600 mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-1 font-sans">{member.specialty}</p>
                <p className="text-gray-500 text-xs font-sans">{member.license}</p>
              </div>
              
              <div className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                {member.desc}
              </div>
              
              <button className="w-full bg-white border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-300 transition-all duration-200">
                {member.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-600 mb-6">Metodología de trabajo</h3>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-4xl mx-auto font-sans">
              A lo largo de los últimos años la psicoterapia virtual demostró distintos beneficios, otorgando en muchos casos una mejor adherencia al tratamiento debido a que permite acudir a las sesiones sin trasladarse largas distancias y adaptandose mejor a las agendas de los consultantes, demostrando la misma eficacia.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">100% online</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">Profesionalismo</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-blue/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">Adaptabilidad horaria</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">Seguimiento personalizado</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">Terapias basadas en evidencia</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600 font-sans">Comunicación fluida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 