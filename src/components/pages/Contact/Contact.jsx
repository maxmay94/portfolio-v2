import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form className="p-8 md:mx-4 bg-gray-900 rounded-md shadow-md">
          <div className="m-3">
            <h3 className="text-2xl text-gray-200 font-bold mb-6">
              Get in Touch
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-500 rounded py-4 px-6 text-sm bg-gray-200"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-500 rounded py-4 px-6 text-sm bg-gray-200"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full border border-gray-500 rounded py-4 px-6 text-sm bg-gray-200"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full border border-gray-500 rounded py-4 px-6 text-sm bg-gray-200"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded bg-yellow-500 text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-yellow-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact;
