import React from "react"
import { FaCode, FaReact, FaPython, FaDatabase, FaJsSquare } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import ServiceItem from "./ServiceItem"

const serviceData = [
  {
    id: 1,
    icon: <FaJsSquare />,
    title: "JavaScript",
    description:
      "My Language of choice. JavaScript is easy to work with and quick to get from idea to a finished product. Its ability to adapt to whatever you could want to do with it makes it hard not to love.",
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "React / Express",
    description:
      "React really is incredible! There are, of course, many other libraries and frameworks I'd love to learn, but React seems to be limitless.",
  },
  {
    id: 3,
    icon: <SiTailwindcss />,
    title: "Tailwind / Bootstrap CSS ",
    description:
      "Tailwind is my go-to for styling. I'm well acquainted with Bootstrap and vanilla CSS as well, but I love the simple elegance of Tailwind.",
  },
  {
    id: 4,
    icon: <FaPython />,
    title: "Python",
    description:
      "Python is an incredibly simple and powerful language. I'm excited to get to know it better and experiment with TensorFlow and other interesting libraries.",
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "REST / CRUD",
    description:
      "The internet is built on RESTful foundations and we interact with it using CRUD. These two concepts are paramount and their importance can’t be overstated.",
  },
  {
    id: 6,
    icon: <FaDatabase />,
    title: "Mongo DB / PostgreSQL",
    description:
      "The ability to perform CRUD operations on persistent data makes the internet a much more interesting and usable place.",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  )
}

export default Service
