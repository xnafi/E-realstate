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
    <section className="bg-[#f8f9fb] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Get In Touch With Us</h2>
        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                <Image
                  src={agent.img}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#2c9bf3] font-semibold">{agent.name}</h3>
              <p className="text-gray-700 text-sm font-medium mt-1 mb-3">
                {agent.title}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta justo eget risus consectetur,...
              </p>
              <a
                href="#"
                className="text-[#2c9bf3] font-medium text-sm hover:underline"
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
