import React from 'react';

const Hero = ({ isDark }) => {
  const accentColor = isDark ? 'text-[#ff003c]' : 'text-[#d90022]';

  return (
    <header className="relative w-full pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center">
      {/* Background brutalist typography */}
      <div className={`absolute top-10 left-[-5%] text-[15rem] leading-none opacity-5 font-black uppercase pointer-events-none ${isDark ? 'text-white' : 'text-black'}`}>
        Create
      </div>

      <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
        
        <div className="md:col-span-8 relative">
          <p className={`text-xs md:text-sm tracking-[0.4em] uppercase mb-4 font-bold ${accentColor}`}>
            {"//"} CC14
          </p>
          <h1 className="text-7xl md:text-9xl mb-2 glitch-hover leading-none tracking-tighter mix-blend-difference">
            Portfolio<br/>ni Diwi
          </h1>
        </div>

        {/* Brutalist status box */}
        <div className={`md:col-span-4 self-end brutal-border brutal-shadow p-4 ${isDark ? 'bg-[#111] text-[#c9a771]' : 'bg-white text-black'}`}>
          <div className="flex justify-between items-center border-b-2 border-current pb-2 mb-2">
            <span className="text-xs uppercase font-bold">Status</span>
            <span className={`text-xs animate-pulse ${accentColor}`}>ONLINE</span>
          </div>
          <p className="text-sm leading-tight">
            Would humans ever yearn to fly, if birds didnt exist?
          </p>
        </div>

      </div>
    </header>
  );
};

export default Hero;