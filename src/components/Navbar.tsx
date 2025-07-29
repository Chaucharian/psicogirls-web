'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-16 shadow-sm fixed top-0 z-50 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl text-gray-600 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">PV</span>
          </div>
          <span className="text-gray-600">psi</span>
          <span className="text-emerald-600">online</span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6 text-gray-500" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <li><a href="#terapia" className="hover:text-emerald-600 transition-colors">Terapia</a></li>
          <li><a href="#online" className="hover:text-emerald-600 transition-colors">Online</a></li>
          <li><a href="#nosotros" className="hover:text-emerald-600 transition-colors">Nosotros</a></li>
          <li><a href="#horarios" className="hover:text-emerald-600 transition-colors">Horarios</a></li>
          <li><a href="#contacto" className="hover:text-emerald-600 transition-colors">Contacto</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-100 py-4">
          <ul className="space-y-3 text-sm font-medium text-gray-500 px-4">
            <li><a href="#terapia" className="block hover:text-emerald-600 transition-colors py-2">Terapia</a></li>
            <li><a href="#online" className="block hover:text-emerald-600 transition-colors py-2">Online</a></li>
            <li><a href="#nosotros" className="block hover:text-emerald-600 transition-colors py-2">Nosotros</a></li>
            <li><a href="#horarios" className="block hover:text-emerald-600 transition-colors py-2">Horarios</a></li>
            <li><a href="#contacto" className="block hover:text-emerald-600 transition-colors py-2">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;