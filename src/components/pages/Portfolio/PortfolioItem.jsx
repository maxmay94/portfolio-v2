import React from "react"
import { FaRegEye } from "react-icons/fa"

const PortfolioItem = (props) => {
  const { image, title, link, description, github, github2 } = props.portfolio
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-gray-900 bg-opacity-100 group hover:shadow-md">
        <div className="relative mb-6 w-full h-48 bg-yellw-200 rounded-md overflow-hidden">
          <img
            src={image}
            alt="coverImage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute opacity-0 transition duration-200 bg-gray-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-10 text-xl text-yellow-500 flex items-center justify-center border-2 border-yellow-500 rounded hover:text-white hover:bg-yellow-500"
                >
                  <FaRegEye />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <br />
        <a 
          href={github}
          className="text-green-500 hover:text-yellow-500"
          target="_blank"
          rel="noreferrer"
        >
          Link to GitHub page
        </a>
        {
          github2 &&
          <div>
            <a 
              href={github2}
              className="text-green-500 hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              Link to back-end GitHub page
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default PortfolioItem