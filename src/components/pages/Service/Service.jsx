import React from "react"
import { FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3, FaNodeJs, FaJava } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import ServiceItem from "./ServiceItem"

const serviceData = [
  {
    id: 1,
    icon: <FaJsSquare />,
    icon2: <FaPython />,
    icon3: <FaHtml5 />,
    icon4: <FaCss3/>,
    icon5: <FaJava/>,
    icon6: <i class="devicon-processing-plain-wordmark"></i>,
    title: "Languages",
  },
  {
    id: 2,
    icon: <FaReact />,
    icon2: <i class="devicon-flask-original"></i>,
    icon3: <FaNodeJs />,
    icon4: <i class="devicon-express-original"></i>,
    icon5: <SiTailwindcss />,
    icon6: <i class="devicon-bootstrap-plain"></i>,
    title: "Frameworks / Libraries",
  },
  {
    id: 3,
    icon: <i class="devicon-mongodb-plain"></i>,
    icon2: <i class="devicon-postgresql-plain"></i>,
    icon3: <i class="devicon-arduino-plain"></i>,
    icon4: <i class="devicon-bash-plain"></i>,
    icon5: <i class="devicon-github-original"></i>,
    icon6: <i class="devicon-vscode-plain"></i>,
    title: "Miscellaneous",
  },
]

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
