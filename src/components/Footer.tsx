import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-emerald-100 to-teal-100 py-8 px-4 md:px-16 border-t border-emerald-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">PV</span>
          </div>
          <div className="font-bold text-xl text-gray-600">
            <span className="text-gray-500">psi</span>
            <span className="text-emerald-600">online</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>psionlinefem@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>+54 261 367 1618</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
              Política de Privacidad
            </a>
            <span className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} psionline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 