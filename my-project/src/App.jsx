import React from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />

      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Renzo. Gemaakt met React & Tailwind.
      </footer>
    </div>
  )
}

export default App
