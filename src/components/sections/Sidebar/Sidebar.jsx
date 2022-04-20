import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/maxmay94",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/maximillian-may/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/maymaximillian/",
  },
]

const Sidebar = () => {
  return (
    <aside className="sticky top-0 md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-200 font-bold mb-1">Maximillian May</h1>
        <p className="text-sm text-gray-400 mb-3">
          Full-Stack Software Engineer
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-yellow-500 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-yellow-600"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-200">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
        I am a full-stack software engineer and former bartender. Throughout my career, I’ve found that every challenge can be overcome with a solid work ethic, strong communication, and a committed team. I love the creative and intellectual stimulation of software engineering, and I look forward to new opportunities to grow in the field.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar

const SocialIcon = (props) => {
  const { icon, link } = props.social
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-gray-800 rounded text-gray-200 flex items-center justify-center hover:text-gray-100 hover:bg-yellow-500"
      >
        {icon}
      </a>
    </li>
  )
}
