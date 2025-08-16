'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-16 shadow-sm fixed top-0 z-50 border-b border-gray-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl text-gray-600 flex items-center font-serif transition-all duration-300 hover:scale-105">
          {/* <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">PO</span>
          </div> */}
          <span className="text-gray-600 font-serif">haciendo</span>
          <span className="text-secondary font-serif">terapia</span>
        </div>
        
        {/* Burger menu button */}
        <button 
          className="md:hidden relative w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} style={{left: '8px', top: '50%'}}></span>
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} style={{left: '8px', top: '50%'}}></span>
          <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} style={{left: '8px', top: '50%'}}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          {[
            { href: "#terapia", text: "Terapia" },
            { href: "#online", text: "Online" },
            { href: "#nosotros", text: "Nosotros" },
            { href: "#horarios", text: "Horarios" },
            { href: "#contacto", text: "Contacto" }
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="hover:text-secondary transition-all duration-300 relative group"
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 transition-all duration-500 ease-in-out transform ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <ul className="space-y-3 text-sm font-medium text-gray-500 px-4 py-4">
          {[
            { href: "#terapia", text: "Terapia" },
            { href: "#online", text: "Online" },
            { href: "#nosotros", text: "Nosotros" },
            { href: "#horarios", text: "Horarios" },
            { href: "#contacto", text: "Contacto" }
          ].map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="block hover:text-secondary transition-all duration-300 py-2 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;