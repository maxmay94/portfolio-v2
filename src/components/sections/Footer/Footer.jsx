import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Contact me at : 
          <a
            className="text-yellow-600"
            href="#0"
            rel="nofollow"
          >
            {" "}
            hey@maxmay.xyz
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
