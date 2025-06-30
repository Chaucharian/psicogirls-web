import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8F7F6] py-6 px-8 flex justify-between items-center border-t border-gray-200">
      <div className="font-bold text-xl text-gray-800">
        <span className="text-gray-400">psi</span>online
      </div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} psionline</div>
    </footer>
  );
};

export default Footer; 