import React from 'react';

const About = () => {
  return (
    <section id="terapia" className="w-full flex flex-col md:flex-row items-center justify-center bg-[#FBEFEF] py-16 px-4 md:px-0">
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <img src="/images/hero2.png" alt="About Illustration" className="w-[260px] h-[260px] object-contain rounded-full bg-[#FFF3F3]" />
      </div>
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">¿Cuándo buscar profesional?</h2>
        <p className="text-gray-700 mb-2">Hay momentos en la vida en que sentimos angustia, depresión, miedo recurrente o ansiedad y es posible que no contemos, tratemos o logremos superar informaciones acerca de acontecimientos pasados, conflictos en las relaciones interpersonales, entre otros. La baja autoestima también es un factor.</p>
        <p className="text-gray-700 mb-2">Si bien muchas veces el espacio cotidiano diverso nos ayuda, consultar con un profesional puede transformar y dar una nueva perspectiva.</p>
        <p className="text-gray-700">La consulta inicial se realiza online, en familia y siguiendo los protocolos de higiene solicitados por el Ministerio de Salud.</p>
      </div>
    </section>
  );
};

export default About; 