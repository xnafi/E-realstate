"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaShareAlt,
  FaExpand,
} from "react-icons/fa";

const listings = [
  {
    id: 1,
    title: "Light And Modern Apartment",
    address: "2436 SW 8th St, Miami, FL 33135, USA",
    price: "$4,500/mo",
    bedrooms: 4,
    bathrooms: 2,
    area: 1200,
    img: "https://i.postimg.cc/5NHgzFHn/allison-saeng-ra-Bu-IBxd4-MQ-unsplash.jpg",
  },
  {
    id: 2,
    title: "Relaxing Apartment",
    address: "Marcy Ave, Brooklyn, NY, USA",
    price: "$2,800/mo",
    bedrooms: 1,
    bathrooms: 1,
    area: 2360,
    img: "https://i.postimg.cc/pdBJvf7X/steffen-lemmerzahl-XEjhbht-Yc1-A-unsplash.jpg",
  },
  {
    id: 3,
    title: "New Apartment Nice View",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "$11,000/mo",
    bedrooms: 3,
    bathrooms: 1,
    area: 1789,
    img: "https://i.postimg.cc/RZ5YVTPc/le-quan-GLFAKS5f3wc-unsplash.jpg",
  },
  {
    id: 4,
    title: "New Apartment Nice View",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "$11,000/mo",
    bedrooms: 3,
    bathrooms: 1,
    area: 1789,
    img: "https://i.postimg.cc/RZ5YVTPc/le-quan-GLFAKS5f3wc-unsplash.jpg",
  },
];

const FeaturedListings = () => {
  const [index, setIndex] = useState(0);
  const visibleListings = listings.slice(index, index + 3);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < listings.length - 3) setIndex(index + 1);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="title-header-text mb-4">
          Check Our Featured Listings
        </h2>
        <p className="title-para-text mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>

        <div className="flex justify-end gap-2 mb-4 pr-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 text-sm px-3 py-1 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-md shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src={listing.img}
                  alt={listing.title}
                  fill
                  className="object-cover rounded-t-md"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    FEATURED
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                    FOR RENT
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                  {listing.price}
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2 text-white text-2xl">
                  <FaExpand className="cursor-pointer hover:text-gray-300" />
                  <FaHeart className="cursor-pointer hover:text-gray-300" />
                  <FaShareAlt className="cursor-pointer hover:text-gray-300" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-start font-semibold text-gray-800 mb-1">
                  {listing.title}
                </h3>
                <p className="text-start text-sm text-gray-500">{listing.address}</p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t text-sm text-gray-600">
                  <div className="flex flex-col items-center border-r pr-4">
                    <div className="flex items-center gap-3 text-2xl">
                      <FaBed /> {listing.bedrooms}
                    </div>
                    <span className="text-xs">Bedrooms</span>
                  </div>

                  <div className="flex flex-col items-center border-r pr-4">
                    <div className="flex items-center gap-3 text-2xl">
                      <FaBath /> {listing.bathrooms}
                    </div>
                    <span className="text-xs">Bathrooms</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 text-2xl">
                      <FaRulerCombined /> {listing.area}
                    </div>
                    <span className="text-xs">Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
