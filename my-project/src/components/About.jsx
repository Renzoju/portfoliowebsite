import React from "react";
import { FiDownload } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 w-full mb-10">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <span className="text-green-500">#</span>
            <span className="text-white ml-1">about-me</span>
          </h2>
          <div className="flex-1 border-t border-green-400"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-16">
          
          {/* Text */}
          <article className="flex-1 max-w-md text-white space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">
              Hello, I am Renzo Jutte
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I am a second-year Software Development student. <br />
              I develop responsive websites and transform them into modern, 
              user-friendly web experiences.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I am passionate about improving my coding skills and developing 
              applications and websites. I always strive to learn more and work 
              hard to achieve my goals.
            </p>
          </article>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/src/img/cat.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
