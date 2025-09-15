import React from 'react';
import { FiDownload } from "react-icons/fi";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-6"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-center">
        {/* Tekst */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I am <span className="text-green-500">Renzo Jutte</span> <br />
            I am a <span className="text-green-500">software developer</span>
          </h1>
          <p className="mt-2 text-lg text-gray-400 max-w-md">
            i'm currently into ethical hacking, Frontend Dev,
            backend Dev
          </p>

          <div className="mt-8">
            <a
              href="#projects"
              className=" rounded inline-block px-3 py-1 border border-green-500 text-white items-center gap-2 hover:bg-green-500 hover:text-black transition w-fit"
            >
              Scroll Down <FiDownload className="inline ml-2"/>
            </a>
          </div>
        </div>

        {/* Foto / Afbeelding */}
        <div className="flex justify-center">
          <img
            src="src/img/unnamed.png"
            alt="Renzo"
            className="w-150 h-150 object-contain rounded-2xl shadow-lg move-up-down"
          />
        </div>
      </div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-black px-6 pb-20 "
      ></section>
    </section>
  );
}
