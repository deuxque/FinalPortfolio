import React, { useState } from 'react';
import './index.css';

import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  // Void vs Concrete backgrounds
  const bgClass = isDark ? 'bg-[#050505] text-[#e0e0e0]' : 'bg-[#e5e5e5] text-[#111111]';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 relative overflow-hidden selection:bg-[#ff003c] selection:text-white`}>
      {/* Cyberpunk CRT overlay */}
      <div className="fixed inset-0 scanlines z-50 mix-blend-overlay opacity-40"></div>
      
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <Hero isDark={isDark} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <AboutMe isDark={isDark} />
        
        {/* Brutalist Divider */}
        <div className={`w-full h-2 my-20 ${isDark ? 'bg-[#ff003c]' : 'bg-[#111]'}`}></div>
        
        <Experience isDark={isDark} />
        <Skills isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
    </div>
  );
}

export default App;