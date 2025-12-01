import React, { useState } from "react";

const projects = [
  {
    title: "Blackjack Game",
    description: "This was my first ever WebGame made.",
    tech: "HTML • CSS • JavaScript",
    image: "src/img/blackjack050.png",
    link: "https://github.com/Renzoju/Blackjack-Game",
  },
  {
    title: "Zuul Text Adventure",
    description: "A fully C#-based text adventure game.",
    tech: "C#",
    image: "src/img/zuul.png",
    link: "https://github.com/Renzoju/Textadventure-",
  },
  {
    title: "Webshop",
    description: "My first webshop — a great introduction to PHP & databases.",
    tech: "PHP • SQL • HTML • CSS",
    image: "src/img/Webshop.png",
    link: "https://github.com/Renzoju/webshop",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind.",
    tech: "React • JavaScript • TailwindCSS",
    image: "src/img/cool.png",
    link: "https://github.com/Renzoju/portfolio",
  },
  {
    title: "DevForum",
    description: "A forum built using the Laravel framework.",
    tech: "Laravel • PHP • Blade • JavaScript",
    image: "src/img/forum.png",
    link: "https://github.com/Renzoju/weather-app",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 w-full mb-10">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <span className="text-green-500">#</span>
            <span className="text-white ml-1">projects</span>
          </h2>

          <div className="flex-1 border-t border-green-400"></div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-400 hover:text-green-400 transition text-sm md:text-base ml-4"
          >
            {showAll ? "Show less ↑" : "View all →"}
          </button>
        </div>

       
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6 transition-all duration-700`}
        >
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="border border-white flex flex-col h-full hover:scale-[1.01] hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300"
            >
              
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />

              
              <div className="p-5 flex flex-col flex-1">
                <div>
                  <div className="pb-2 mb-4 border-b border-white">
                    <p className="text-sm text-gray-400">{project.tech}</p>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-green-500 text-green-500 text-sm rounded hover:bg-green-500 hover:text-black transition"
                  >
                    Code ↔
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
