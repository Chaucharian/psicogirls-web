import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Lic. Tatiana Carla Archetti',
    img: '/images/tati.png',
    desc: 'Lic. en Psicología con Orientación Sistémica. Trabaja en estrategia de género en la Fundación Puentes de Cambio. Experiencia en el equipo de salud mental del Hospital de Niños Humberto Notti, en consultorios privados y en atención a pacientes en situación de vulnerabilidad en centros de comunidad (Luz Corvalán).',
    cta: 'Sacá un turno Online conmigo',
    specialty: 'Terapia Sistémica',
    license: 'M.N. 79053'
  },
  {
    name: 'Lic. Romina Tate',
    img: '/images/romi.png',
    desc: 'Lic. en Psicología con Orientación en Terapia Breve Sistémica. 15+ años de experiencia en recursos terapéuticos de enfoque sistémico, consultorios privados y atención a niños, adolescentes y adultos en situación de vulnerabilidad. Atención con perspectiva de género.',
    cta: 'Sacá un turno Virtual conmigo',
    specialty: 'Terapia Breve Sistémica',
    license: 'M.N. 79054'
  },
  {
    name: 'Lic. Agostina Sidone',
    img: '/images/agos.png',
    desc: 'Lic. en Psicología con Orientación en Terapia Breve Sistémica. 15+ años de experiencia en recursos terapéuticos de enfoque sistémico, consultorios privados y atención a niños, adolescentes y adultos en situación de vulnerabilidad. Atención con perspectiva de género.',
    cta: 'Sacá un turno Virtual conmigo',
    specialty: 'Terapia Breve Sistémica',
    license: 'M.N. 79055'
  },
];

const Team = () => {
  return (
    <section id="nosotros" className="w-full bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">Soy Pamela Vallejos</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Psicólogas Clínicas egresadas de la Universidad de Buenos Aires, especializadas en Terapia Cognitivo Conductual y Terapias de Tercera Generación. Nuestro objetivo es habilitar un espacio de desarrollo personal adaptado a tus objetivos en el que te sientas seguro y acompañado.
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
                    className="w-32 h-32 rounded-full object-cover border-4 border-emerald-100" 
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-600 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-1">{member.specialty}</p>
                <p className="text-gray-500 text-xs">{member.license}</p>
              </div>
              
              <div className="text-gray-500 text-sm leading-relaxed mb-6">
                {member.desc}
              </div>
              
              <button className="w-full bg-white border-2 border-emerald-300 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200">
                {member.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-600 mb-6">Metodología de trabajo</h3>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-4xl mx-auto">
              A lo largo de los últimos años la psicoterapia virtual demostró distintos beneficios, otorgando en muchos casos una mejor adherencia al tratamiento debido a que permite acudir a las sesiones sin trasladarse largas distancias y adaptandose mejor a las agendas de los consultantes, demostrando la misma eficacia.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">100% online</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Profesionalismo</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Adaptabilidad horaria</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Seguimiento personalizado</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Terapias basadas en evidencia</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Comunicación fluida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 