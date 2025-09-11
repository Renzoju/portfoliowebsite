import React from "react";

const projects = [
  {
    title: "Blackjack Game",
    description: "This was my first ever WebGame made",
    tech: "HTML CSS JS ",
    image: "src/img/blackjack050.png",
    link: "#",
  },
  {
    title: "Zuul Text Adventure",
    description: "my Textadventure game fully made With C#",
    tech: "C#",
    image: "src/img/zuul.png",
    link: "#",
  },
  {
    title: "Webshop",
    description: "My first webshop It was a Great way to explore PHP",
    tech: "PHP SQL HTML CSS ",
    image: "src/img/Webshop.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <span className="text-green-500">#</span>
              <span className="text-white ml-1">projects</span>
            </h2>
            <div className="border-t-1 border-green-400 w-150 rounded"></div>
          </div>

          <a
            href="#"
            className="text-gray-400 hover:text-green-400 transition text-sm md:text-base"
          >
            View all →
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 pt-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-white flex flex-col h-full"
            >
              {/* Image Container with Masking */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="pb-2 mb-4 border-b border-white">
                    <p className="text-sm text-gray-400 w-full">{project.tech}</p>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 ">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-col items-start">
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 border border-green-500 text-green-500 text-sm rounded hover:bg-green-500 hover:text-black transition"
                  >
                    Live ↔
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
