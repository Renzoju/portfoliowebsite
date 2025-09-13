import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="Contact" className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center">
            <span className="text-green-500">#</span>
            <span className="text-white ml-1">contact</span>
          </h2>
          <div className="border-t-1 border-green-400 w-50 rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Text */}
          <p className="text-white text-lg font-mono mb-6 md:mb-0 md:max-w-lg">
            I'm interested in internship opportunities. However, if you have other requests or questions, don't hesitate to contact me.
          </p>

          {/* Contact Box */}
          <div className="bg-black border border-gray-400 p-6 min-w-[300px]">
            <div className="text-white font-mono mb-3 font-bold">Message me here</div>
            <div className="flex items-center gap-2 mb-2 text-white">
              <FaDiscord className="text-xl" />
              <span className="font-mono">_renzoz</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MdEmail className="text-xl" />
              <span className="font-mono">rmr.jutte@student.alfa-college.nl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}