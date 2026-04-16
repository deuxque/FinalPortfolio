import React from 'react';

const AboutMe = ({ isDark }) => {
  const accent = isDark ? 'text-[#c9a771]' : 'text-[#665033]'; 

  return (
    <section className="my-20 relative">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        
        <div className={`md:w-1/3 brutal-border p-6 flex flex-col justify-between ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f5f5f5]'}`}>
          <div>
            {/* Removed uppercase here */}
            <h2 className="text-5xl mb-4">Entity</h2>
            <div className={`text-xs tracking-widest uppercase border-l-2 pl-2 ${accent} border-current font-bold`}>
              CLASS: MULTIMEDIA ARTIST<br/>
              SECTOR: Student
            </div>
          </div>
          <div className="mt-12 text-[10px] uppercase opacity-50 break-words font-bold">
            ID: 800YR50FY3ARN1N6
          </div>
        </div>
        
        <div className={`md:w-2/3 brutal-border brutal-shadow p-8 md:p-12 ${isDark ? 'bg-[#111]' : 'bg-white'}`}>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            "I'LL DO ANYTHING IF YOU GIVE ME ENOUGH MONEY"
          </p>
          <p className="text-sm md:text-base leading-relaxed opacity-80">
            I create posters and short cinematic pieces.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;