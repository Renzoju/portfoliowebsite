import React from 'react';

import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about-me", label: "About-me" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
  <header className="sticky top-0 z-50 bg-black">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-bold tracking-tight text-xl text-white">
          Renzo<span className="text-green-500">.</span>
        </a>

        {/* Desktop menu */}
  <nav className="hidden md:flex gap-4 text-lg font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition"
            >
              <span className="text-green-500">#</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-green-500/10 text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-green-500/30 bg-black">
          <ul className="px-4 py-3 space-y-2 text-gray-300">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-1 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-green-500">#</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
  