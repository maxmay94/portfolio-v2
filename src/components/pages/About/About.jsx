import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8 ">
      <div className="flex flex-wrap md:px-4 bg-gray-900/[] rounded-md">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-200 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I am a full-stack software engineer and former bartender. Throughout my career, I’ve found that every challenge can be overcome with a solid work ethic, strong communication, and a committed team. I love the creative and intellectual stimulation of solving a tough coding problem. I look forward to bringing my work-ethic and creativity with me into a new role as a software engineer.
            </p>

          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
