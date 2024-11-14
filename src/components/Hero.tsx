import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-primary-600 to-black bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Specialist in AI, futures thinking, and advancing opportunities
              for women in STEM. Building bridges between technology and
              inclusive innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-black opacity-90"></div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/galeryproject-8ff43.appspot.com/o/images%2FFrida_Ruh_2.jpeg?alt=media&token=f6fc6e00-c19c-4b4d-92af-1052686f55f2"
                alt="Profile"
                className="object-cover w-full h-full mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
