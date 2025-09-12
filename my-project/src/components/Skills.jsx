import React from "react";
import { FaHtml5, FaPhp, FaReact, FaJsSquare, FaDatabase, FaCogs } from "react-icons/fa"; 
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "PHP", icon: <FaPhp className="h-12 w-12 text-blue-300" /> },
  { name: "C#", icon: <TbBrandCSharp className="h-12 w-12 text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="h-12 w-12 text-yellow-500" /> },
  { name: "React", icon: <FaReact className="h-12 w-12 text-blue-500" /> },
  { name: "SQL", icon: <FaDatabase className="h-12 w-12 text-orange-400" /> },
  { name: "HTML", icon: <FaHtml5 className="h-12 w-12 text-orange-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <span className="text-green-500">#</span>
              <span className="text-white ml-1">skills</span>
            </h2>
            <div className="border-t-1 border-green-400 w-150 rounded "></div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 gap-6 pt-16 mx-auto w- justify-start">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center  p-1  border-1 border-gray-500   "
            >
              {/* Icon */}
              <div className="mb-3">{skill.icon}</div> {/* Icon boven skill naam */}
              <p className="text-white font-semibold color:blue">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
