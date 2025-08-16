import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 py-8 px-4 md:px-16 border-t border-primary/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="font-bold text-xl text-gray-600 transition-all duration-300 hover:scale-105">
          <span className="text-gray-600 font-serif">haciendo</span>
          <span className="text-secondary font-serif">terapia</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 group">
              <svg className="w-4 h-4 text-emerald-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="transition-colors duration-300 group-hover:text-emerald-700">haciendoterapia@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 group">
              <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="transition-colors duration-300 group-hover:text-blue-700">+54 9 11 5742-8691</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-secondary hover:text-secondary/80 text-sm font-medium transition-all duration-300 hover:scale-105">
              Política de Privacidad
            </a>
            <span className="text-gray-400 text-xs transition-all duration-300 hover:text-gray-500">&copy; {new Date().getFullYear()} haciendoterapia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 