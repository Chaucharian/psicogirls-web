'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F8F7F6] py-4 px-4 md:px-8 shadow-sm fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800">
          <span className="text-gray-400">psi</span>online
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="black"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li><a href="#terapia" className="hover:text-purple-600">Terapia</a></li>
          <li><a href="#online" className="hover:text-purple-600">Online</a></li>
          <li><a href="#nosotros" className="hover:text-purple-600">Nosotros</a></li>
          <li><a href="#horarios" className="hover:text-purple-600">Horarios</a></li>
          <li><a href="#contacto" className="hover:text-purple-600">Contacto</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-700">
          <li><a href="#terapia" className="block hover:text-purple-600">Terapia</a></li>
          <li><a href="#online" className="block hover:text-purple-600">Online</a></li>
          <li><a href="#nosotros" className="block hover:text-purple-600">Nosotros</a></li>
          <li><a href="#horarios" className="block hover:text-purple-600">Horarios</a></li>
          <li><a href="#contacto" className="block hover:text-purple-600">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;