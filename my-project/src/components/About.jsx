import React from 'react';
import { FiDownload } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 w-full mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <span className="text-green-500">#</span>
            <span className="text-white ml-1">about-me</span>
          </h2>
          <div className="border-t-1 w-120 rounded border-green-400"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start gap-18">
          {/* Text links */}
          <article className="flex-1 max-w-xs text-white space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Hello, i'm Renzo Jutte</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I’m a second-year Software Development student.<br />
              I can develop responsive websites<br />
              and raise them into modern user-friendly web experiences.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              <br />
              I am passionate about improving my coding skills & developing applications & websites.<br />
              I always strive to learn more and wanna reach my goals.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2 border border-green-500 text-sm rounded hover:bg-green-400 hover:text-black transition mt-2"
                >
                Resume <FiDownload className="inline ml-2" />
            </a>
          </article>
          {/* Image rechts */}
          <div className=" w-200 h-115  s/flex-1 flex justify-center items-center">
            <img
              src="/src/img/cat.jpg"
              alt="Profile"
              className=" w-100 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
