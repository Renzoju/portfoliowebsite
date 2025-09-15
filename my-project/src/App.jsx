import React from 'react';
import { FaGithub, FaDiscord } from 'react-icons/fa'; // Importeer de benodigde iconen van React Icons

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white py-10 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          {/* GitHub icon */}
          <a href="https://github.com/Renzoju" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8 text-gray-400 hover:text-white transition" />
          </a>
          {/* Discord icon */}
          <a href="https://discord.com/users/_renzoz" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="h-8 w-8 text-gray-400 hover:text-white transition" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Renzo. Made with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
