import React from 'react';

const team = [
  {
    name: 'Lic. Tatiana Carla Archetti',
    img: '/images/tati.png',
    desc: 'Lic. en Psicología con Orientación Sistémica. Trabaja en estrategia de género en la Fundación Puentes de Cambio. Experiencia en el equipo de salud mental del Hospital de Niños Humberto Notti, en consultorios privados y en atención a pacientes en situación de vulnerabilidad en centros de comunidad (Luz Corvalán).',
    cta: 'Sacá un turno Online conmigo',
  },
  {
    name: 'Lic. Romina Tate',
    img: '/images/romi.png',
    desc: 'Lic. en Psicología con Orientación en Terapia Breve Sistémica. 15+ años de experiencia en recursos terapéuticos de enfoque sistémico, consultorios privados y atención a niños, adolescentes y adultos en situación de vulnerabilidad. Atención con perspectiva de género.',
    cta: 'Sacá un turno Virtual conmigo',
  },
  {
    name: 'Lic. Agostina Sidone',
    img: '/images/agos.png',
    desc: 'Lic. en Psicología con Orientación en Terapia Breve Sistémica. 15+ años de experiencia en recursos terapéuticos de enfoque sistémico, consultorios privados y atención a niños, adolescentes y adultos en situación de vulnerabilidad. Atención con perspectiva de género.',
    cta: 'Sacá un turno Virtual conmigo',
  },
];

const Team = () => {
  return (
    <section id="nosotros" className="w-full bg-[#F3F0F7] py-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Nosotros</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between max-w-sm w-full min-h-[500px]">
           <div className='flex flex-col items-center'> 
            <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#E5E7EB]" />
            <div className="font-bold text-lg text-gray-800 mb-2 text-center">{member.name}</div>
            <div className="text-gray-700 text-sm mb-4 text-center">{member.desc}</div>
          </div>
            <a href="#" className="bg-[#BFA2DB] text-center text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-[#a88fc2] transition text-sm">{member.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 