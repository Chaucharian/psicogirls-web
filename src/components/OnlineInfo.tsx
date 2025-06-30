import React from 'react';

const features = [
  {
    icon: '👋',
    title: 'Psicólogas de habla hispana.',
  },
  {
    icon: '⏱️',
    title: '45 minutos por sesión con el especialista que elijas.',
  },
  {
    icon: '💖',
    title: 'Tu información personal siempre segura.',
  },
  {
    icon: '💵',
    title: 'El pago se realiza previo a la sesión y puede ser por diversos medios de pago',
  },
];

const OnlineInfo = () => {
  return (
    <section id="online" className="w-full flex flex-col items-center py-16 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Online</h2>
      <p className="text-gray-700 max-w-2xl text-center mb-6">
        La pandemia nos demostró que podemos hacer mucho más cosas online de lo que imaginábamos a comienzos de 2020. Te ofrecemos acompañarte desde donde estés, ya sea por primera vez o si ya estás en consulta previa. Recuerda reservar tu sesión de 45 minutos para que el tiempo sea para ti y el consultorio.
      </p>
      <a href="#" className="bg-[#BFA2DB] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a88fc2] transition mb-8">Gestioná tu turno virtual ACA</a>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center max-w-xs">
            <div className="text-4xl mb-2">{f.icon}</div>
            <div className="font-semibold text-gray-800 mb-1">{f.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineInfo; 