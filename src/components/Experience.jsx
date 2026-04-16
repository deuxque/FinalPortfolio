import React, { useState } from 'react';

const Experience = ({ isDark }) => {
  const [activeExp, setActiveExp] = useState(0);
  const accentColor = isDark ? 'text-[#ff003c]' : 'text-[#d90022]';

  const experiences = [
    {
      id: "LOG_01",
      year: "2025",
      role: "Videographer",
      desc: "Cameraman'd for Team Lakay in Adivay Explosion IV and 45th Grappler's Cup."
    },
    {
      id: "LOG_02",
      year: "2025",
      role: "Poster Designer", 
      desc: "Made Posters for HQ Baguio for 2 weeks."
    },
    {
      id: "LOG_03",
      year: "2020_PRESENT",
      role: "Amateur Photographer", 
      desc: "Casual hobby"
    }
  ];

  return (
    <section className="my-20">
      {/* Removed uppercase here */}
      <h2 className="text-6xl mb-8 glitch-hover">Chronicles</h2>
      
      <div className={`brutal-border p-1 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="flex flex-col md:flex-row gap-4 p-4 border-2 border-dashed border-current">
          
          <div className="md:w-1/3 flex flex-col gap-2">
            {experiences.map((exp, index) => (
              <button 
                key={index}
                onClick={() => setActiveExp(index)}
                className={`text-left p-3 brutal-border transition-all uppercase text-sm font-bold tracking-wider
                  ${activeExp === index 
                    ? `bg-current text-${isDark ? 'black' : 'white'} translate-x-2` 
                    : 'hover:bg-gray-800 hover:text-white'}`}
              >
                {exp.id} // {exp.year}
              </button>
            ))}
          </div>

          <div className="md:w-2/3 p-6 flex flex-col justify-center">
            {/* The role is now a readable Title Case Gothic font */}
            <h3 className={`text-4xl mb-4 font-normal ${accentColor}`}>{experiences[activeExp].role}</h3>
            <p className="text-lg leading-relaxed border-l-4 pl-4 border-current">
              {experiences[activeExp].desc}
            </p>
            <div className="mt-8 text-xs opacity-50 uppercase tracking-[0.2em] font-bold">
              {"<<"} END OF RECORD {">>"}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;