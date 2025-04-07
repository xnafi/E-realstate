"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaShareAlt, FaExpand } from "react-icons/fa";

const properties = [
  {
    id: 1,
    title: "Historic Villa",
    address: "3401 NW 7th Ave, Miami, FL 33127, USA",
    price: "$3,700,000",
    sqft: "$9,900/sq ft",
    bed: 2,
    bath: 2,
    area: 2170,
    img: "https://i.postimg.cc/XvfgjqP0/close-up-old-villa-city.jpg",
    featured: false,
  },
  {
    id: 2,
    title: "Villa For Sale",
    address: "278 NW 36th St, Miami, FL 33127, USA",
    price: "$1,750,000",
    sqft: "$7,500/sq ft",
    bed: 4,
    bath: 2,
    area: 4100,
    img: "https://i.postimg.cc/N0nQ0G2p/beautiful-shot-big-farmhouse-clear-blue-sky.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Villa With Pool For Sale",
    address: "3606 NW 5 Ave, Miami, FL 33127, USA",
    price: "$3,900,000",
    sqft: "$17,500/sq ft",
    bed: 5,
    bath: 2,
    area: 3450,
    img: "https://i.postimg.cc/W3mYHXVg/reflection-castle-pond-autumn.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Villa With Pool For Sale",
    address: "3606 NW 5 Ave, Miami, FL 33127, USA",
    price: "$3,900,000",
    sqft: "$17,500/sq ft",
    bed: 5,
    bath: 2,
    area: 3450,
    img: "https://i.postimg.cc/W3mYHXVg/reflection-castle-pond-autumn.jpg",
    featured: false,
  },
];

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = properties.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentIndex < properties.length - 3) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="title-header-text mb-4">
          Properties For Sale
        </h2>
        <p className="title-para-text mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <div className="flex justify-end space-x-4 text-blue-500 text-sm font-medium pr-4">
          <button onClick={handlePrev} className="hover:underline">
            Prev
          </button>
          <button onClick={handleNext} className="hover:underline">
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleCards.map((property) => (
          <div key={property.id} className="bg-white rounded-md shadow-sm overflow-hidden">
            <div className="relative h-64">
              <Image
                src={property.img}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />

              <div className="absolute top-2 right-2 flex gap-2">
                {property.featured && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    FEATURED
                  </span>
                )}
                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <div className="absolute bottom-2 left-2 text-white">
                <p className="text-lg font-bold">{property.price}</p>
                <p className="text-sm">{property.sqft}</p>
              </div>

              <div className="absolute bottom-2 right-2 flex gap-2 text-white text-2xl">
                <FaExpand className="cursor-pointer hover:text-gray-300" />
                <FaShareAlt className="cursor-pointer hover:text-gray-300" />
                <FaHeart className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{property.title}</h3>
              <p className="text-gray-500 text-sm">{property.address}</p>

              <div className="flex justify-between mt-4 text-gray-700 text-sm border-t pt-4">
                <div className="flex-col items-center gap-1 border-r pr-4">
                    <div className="flex items-center gap-3 text-2xl">

                  <FaBed /> {property.bed}
                    </div>
                  <div>
                  <span className="text-xs mt-2">Bedrooms</span>
                    </div>  
                </div>
                <div className="flex-col items-center gap-1 border-r pr-4">
                <div className="flex items-center gap-3 text-2xl">
                  <FaBath /> {property.bath} 
                  </div>
                  <div>
                  <span className="text-xs mt-2">Bathrooms</span>
                </div>
                </div>
                <div className="flex-col items-center gap-1 ">
                <div className="flex items-center gap-3 text-2xl">  
                  <FaRulerCombined /> {property.area} 
                  </div> 
                  <div> 
                  <span className="text-xs mt-2">Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
