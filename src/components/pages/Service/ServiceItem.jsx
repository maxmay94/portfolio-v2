import React from "react"

const ServiceItem = (props) => {
  const { icon, icon2, icon3, icon4, icon5, icon6, title } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <h3 className="text-lg m-5 font-medium text-gray-200 mb-2">{title}</h3>

      <div className="my-4 md:mx-4 flex shadow p-6 rounded-md bg-gray-900 group hover:shadow-md items-center justify-center">
        <div>
          {
            icon &&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon}
            </div>
          }
          {
            icon2 &&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon2}
            </div>
          }
        </div>
        <div>
          {
            icon3&&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon3}
            </div>
          }
          {
            icon4 &&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon4}
            </div>
          }
        </div>
        <div>
          {
            icon5 &&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon5}
            </div>
          }
          {
            icon6 &&
            <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl m-5 mb-5 bg-gray-100 text-yellow-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
              {icon6}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ServiceItem;
