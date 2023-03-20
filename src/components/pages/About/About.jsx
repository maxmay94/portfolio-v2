import React from "react"
import Skills from "./Skills/Skills"

const About = () => {
  return (
    <section className="py-8 ">
      <div className="flex flex-wrap md:px-4 bg-gray-900/[] rounded-md">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-200 font-bold mb-4">About Me</h3>

            <p className="text-sm text-gray-400 leading-6 mb-3">I am the lead engineer and founding developer of SpinCycle, a Boston based startup.</p>
            
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Throughout my career, I’ve found that every challenge can be overcome with a solid work ethic, strong communication, and a committed team. I love finding interesting solutions to tough coding problems. I’m bringing my creativity, curiosity, and ambition to software engineering.
            </p>

          </div>
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default About
