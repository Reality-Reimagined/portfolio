import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Transitioning from Financial Services to the cutting edge of software development,
            I bring a unique blend of analytical prowess and technical skill to the world of
            generative AI (GenAI).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Projects</h3>
            <p className="text-3xl font-bold text-white">8+</p>
          </div>

          <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Experience</h3>
            <p className="text-3xl font-bold text-white">4 Years</p>
          </div>

          <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Technologies</h3>
            <p className="text-3xl font-bold text-white">15+</p>
          </div>

          <div className="p-6 bg-[#1E1E1E] rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Location</h3>
            <p className="text-3xl font-bold text-white">Windsor, ON</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            With a solid foundation in frontend development and Python, I've recently pivoted to
            specialize in generative AI (GenAI). Over the last 8 months, I've delved deep into
            GenAI, creating full-stack solutions that demonstrate the power of this technology.
          </p>
          <p className="text-sm italic text-gray-400">
            Note: Apps hosted on render.com may take up to 30 seconds to load due to the
            free hosting tier's slow boot times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
