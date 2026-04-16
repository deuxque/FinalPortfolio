import React from 'react';

const Skills = ({ isDark }) => {
  const accent = isDark ? 'text-[#ff003c]' : 'text-[#d90022]';
  const borderDim = isDark ? 'border-[#333]' : 'border-[#ccc]';

  const skillModules = [
    {
      id: "MOD_01",
      title: "Video/Cinematographer",
      description: "Paid in Experience T_T",
      tags: ["Composition", "Colorgrade", "Angles"],
      img: "src/assets/unpaid.jpg", 
    },
    {
      id: "MOD_02",
      title: "Photography",
      description: "Right place Right time Wrong person (HDR)",
      tags: ["Rules", "Editing", "Ratios"],
      img: "src/assets/IMG_2075.jpg", 
    },
    {
      id: "MOD_03",
      title: "Graphic Designer",
      description: "Rejected HQ Baguio Poster",
      tags: ["Assets", "Texture", "Layers"],
      img: "src/assets/cs.png", 
    }
  ];

  
  return (
    <section className="my-32">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-24">
        <h2 className="text-5xl glitch-hover">Visual Data</h2>
        <div className={`h-px flex-grow ${isDark ? 'bg-[#ff003c]' : 'bg-black'}`}></div>
        <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">3_FILES_FOUND</span>
      </div>
      
      {/* Staggered Alternating Layout (Massive Images) */}
      <div className="flex flex-col gap-32">
        
        {skillModules.map((module, idx) => {
          // Determine if the image should be on the left or right
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={idx} 
              className={`flex flex-col gap-8 md:gap-16 items-center group cursor-crosshair
                ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              
              {/* 1. MASSIVE IMAGE SIDE (Takes up 40-50% of the width) */}
              <div className="w-full md:w-5/12 shrink-0 relative">
                
                {/* System ID Tag overlapping the image container */}
                <div className={`absolute -top-4 ${isEven ? '-left-4' : '-right-4'} z-20 px-4 py-2 text-xs font-bold tracking-widest uppercase border-2 brutal-shadow
                  ${isDark ? 'bg-[#ff003c] text-white border-[#ff003c]' : 'bg-black text-white border-black'}`}>
                  {module.id}
                </div>

                <div className={`w-full aspect-[3/4] brutal-border brutal-shadow relative overflow-hidden bg-black transition-all duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-none
                  ${isDark ? 'border-[#555] group-hover:border-[#ff003c]' : 'border-black'}`}
                >
                  <div className="absolute inset-0 scanlines opacity-50 z-10 pointer-events-none"></div>
                  <img 
                    src={module.img} 
                    alt={module.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>
              </div>

              {/* 2. TEXT & DETAILS SIDE */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                
                <div className={`pb-4 mb-8 border-b-2 ${borderDim}`}>
                  <h3 className={`text-4xl md:text-5xl font-bold tracking-wide mb-2 ${accent}`}>
                    {module.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg leading-relaxed opacity-80 mb-10 font-medium">
                  {module.description}
                </p>
                
                {/* Tags are bigger and more spaced out now */}
                <div className="flex flex-wrap gap-3">
                  {module.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className={`text-xs px-3 py-2 font-bold tracking-widest uppercase border-2 border-current
                        ${isDark ? 'hover:bg-[#ff003c] hover:text-white hover:border-[#ff003c]' : 'hover:bg-black hover:text-white'} transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Skills;