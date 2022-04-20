import React from "react";

const ServiceItem = (props) => {
  const { icon, title, description } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-gray-900 group hover:shadow-md">
        <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-gray-100 text-green-600 transition duration-200 group-hover:bg-green-600 group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
