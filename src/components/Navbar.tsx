'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-16 shadow-sm fixed top-0 z-50 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl text-gray-600 flex items-center font-serif">
          {/* <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">PO</span>
          </div> */}
          <span className="text-gray-600 font-serif">haciendo</span>
          <span className="text-secondary font-serif">terapia</span>
        </div>
        
        {/* Burger menu button */}
        <button 
          className="md:hidden relative w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} style={{left: '8px', top: '50%'}}></span>
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} style={{left: '8px', top: '50%'}}></span>
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} style={{left: '8px', top: '50%'}}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <li><a href="#terapia" className="hover:text-secondary transition-colors">Terapia</a></li>
          <li><a href="#online" className="hover:text-secondary transition-colors">Online</a></li>
          <li><a href="#nosotros" className="hover:text-secondary transition-colors">Nosotros</a></li>
          <li><a href="#horarios" className="hover:text-secondary transition-colors">Horarios</a></li>
          <li><a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <ul className="space-y-3 text-sm font-medium text-gray-500 px-4 py-4">
          <li><a href="#terapia" className="block hover:text-secondary transition-colors py-2">Terapia</a></li>
          <li><a href="#online" className="block hover:text-secondary transition-colors py-2">Online</a></li>
          <li><a href="#nosotros" className="block hover:text-secondary transition-colors py-2">Nosotros</a></li>
          <li><a href="#horarios" className="block hover:text-secondary transition-colors py-2">Horarios</a></li>
          <li><a href="#contacto" className="block hover:text-secondary transition-colors py-2">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;