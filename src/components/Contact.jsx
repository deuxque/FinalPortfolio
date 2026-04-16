import React from 'react';

const Contact = ({ isDark }) => {
  const accentColor = isDark ? 'text-[#ff003c]' : 'text-[#d90022]';

  return (
    <section className="mt-24 mb-12">
      <div className={`brutal-border p-8 md:p-16 text-center ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f0f0f0]'}`}>
        {/* Proper Title Case, no underscores for the Gothic header */}
        <h2 className="text-6xl mb-6">W Comms</h2>
        <p className="mb-10 text-sm md:text-base opacity-70 max-w-xl mx-auto">
          "Do not mistake this for adoration. Whatever you call loss, I was held." 
        </p>
        
        <a 
          href="mailto:void@example.com" 
          className={`inline-block px-12 py-4 text-xl brutal-border brutal-shadow font-bold uppercase transition-transform hover:translate-y-1 hover:shadow-none font-mono tracking-widest
            ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
        >
          Call me
        </a>
      </div>

      <footer className="mt-16 flex justify-between items-end border-t-2 border-current pt-4 text-xs font-bold uppercase tracking-widest">
        <div>
          <span className={accentColor}>SYS.OP:</span> Deuxque
        </div>
        <div className="text-right">
          I would name <br/> a crater after you
        </div>
      </footer>
    </section>
  );
};

export default Contact;