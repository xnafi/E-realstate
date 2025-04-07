"use client";

import Image from "next/image";
import React from "react";

const agents = [
  {
    name: "Vincent Fuller",
    title: "Company Agent , Country House Real Estate",
    img: "https://i.postimg.cc/YChT8hJn/images16.jpg",
  },
  {
    name: "Brittany Watkins",
    title: "Company Agent , All American Real Estate",
    img: "https://i.postimg.cc/QxN296Sr/photo-15.jpg",
  },
  {
    name: "Michelle Ramirez",
    title: "Company Agent , Modern House Real Estate",
    img: "https://i.postimg.cc/tg6wQ8RF/nicolas-horn-MTZTGv-Ds-HFY-unsplash.jpg",
  },
  {
    name: "Samuel Palmer",
    title: "Company Agent , Modern House Real Estate",
    img: "https://i.postimg.cc/MH6FBT7Y/sigmund-jzz-3j-WMz-HA-unsplash.jpg",
  },
];

const GetInTouch = () => {
  return (
    <section className="bg-[#f8f9fb] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="title-header-text mb-4">Get In Touch With Us</h2>
        <p className="title-para-text mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-md shadow-sm text-center flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus-within:scale-105 focus-within:shadow-md"
              tabIndex={0}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative rounded-full overflow-hidden mb-4 ring-1 ring-gray-200">
                <Image
                  src={agent.img}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#2c9bf3] text-base sm:text-lg font-semibold">
                {agent.name}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-sm font-medium mt-1 mb-3 px-1">
                {agent.title}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...
              </p>
              <a
                href="#"
                className="text-[#2c9bf3] text-sm font-medium hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
