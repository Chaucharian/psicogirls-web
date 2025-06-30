import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F8F7F6] py-4 px-8 flex justify-between items-center shadow-sm">
      <div className="font-bold text-xl text-gray-800">
        <span className="text-gray-400">psi</span>online
      </div>
      <ul className="flex space-x-8 text-sm font-medium text-gray-700">
        <li><a href="#terapia" className="hover:text-purple-600">Terapia</a></li>
        <li><a href="#online" className="hover:text-purple-600">Online</a></li>
        <li><a href="#nosotros" className="hover:text-purple-600">Nosotros</a></li>
        <li><a href="#horarios" className="hover:text-purple-600">Horarios</a></li>
        <li><a href="#contacto" className="hover:text-purple-600">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 