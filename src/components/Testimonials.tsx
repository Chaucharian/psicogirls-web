import React from 'react';

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F8F7F6] py-8 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Algunos de los pacientes que hemos acompañado en estos años opinan esto sobre nuestro trabajo</h3>
        <div className="bg-white rounded-lg shadow p-6 mx-auto">
          <blockquote className="italic text-gray-600 mb-2">“Atención muy profesional y agradable. Altamente recomendable.”</blockquote>
          <div className="text-right text-sm text-gray-500">- Osvaldo Huarteonte</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 