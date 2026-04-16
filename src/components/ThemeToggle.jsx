import React from 'react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-[60] p-2 brutal-border brutal-shadow transition-all font-bold uppercase text-xs tracking-widest
        ${isDark 
          ? 'text-[#ff003c] border-[#ff003c] hover:bg-[#ff003c] hover:text-black' 
          : 'text-[#111] border-[#111] hover:bg-[#111] hover:text-white'}`}
    >
      [SYS.{isDark ? 'VOID' : 'LUMINOUS'}]
    </button>
  );
};

export default ThemeToggle;