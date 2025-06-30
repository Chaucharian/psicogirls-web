import React from 'react';

const AvailabilityForm = () => {
  return (
    <section id="horarios" className="w-full flex flex-col md:flex-row justify-center items-start py-16 px-4 bg-white">
      <div className="flex-1 max-w-md mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Disponibilidad horaria</h2>
        <p className="text-gray-700 mb-2">Si ya te decidiste a empezar terapia, dejanos un mensaje y empezamos a recorrer juntos este camino. Contanos tu disponibilidad horaria y te asignaremos un turno en menos de 24 horas.</p>
      </div>
      <form className="flex-1 max-w-md bg-[#FBEFEF] rounded-xl p-8 shadow flex flex-col gap-4 w-full">
        <input type="text" placeholder="Nombre" className="px-4 py-2 rounded bg-[#F8F7F6] border border-gray-200 focus:outline-none" />
        <input type="text" placeholder="Código de área" className="px-4 py-2 rounded bg-[#F8F7F6] border border-gray-200 focus:outline-none" />
        <input type="text" placeholder="Teléfono" className="px-4 py-2 rounded bg-[#F8F7F6] border border-gray-200 focus:outline-none" />
        <input type="email" placeholder="Mail" className="px-4 py-2 rounded bg-[#F8F7F6] border border-gray-200 focus:outline-none" />
        <label className="flex items-center text-xs text-gray-600">
          <input type="checkbox" className="mr-2" />
          Conozco que sus Psicólogas atienden sólo de forma virtual
        </label>
        <button type="submit" className="bg-[#BFA2DB] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#a88fc2] transition mt-2">Enviar</button>
      </form>
    </section>
  );
};

export default AvailabilityForm; 