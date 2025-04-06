'use client';

import Image from 'next/image';

const cityData = [
  {
    name: 'Chicago',
    properties: 3,
    image: 'https://i.postimg.cc/yxX4JDwn/mumbai-skyline-skyscrapers-construction.jpg',
  },
  {
    name: 'Los Angeles',
    properties: 14,
    image: 'https://i.postimg.cc/nhw8QbP8/office-buildings.jpg',
  },
  {
    name: 'Miami',
    properties: 15,
    image: 'https://i.postimg.cc/W4c1bZ8L/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers.jpg',
  },
  {
    name: 'New York',
    properties: 10,
    image: 'https://i.postimg.cc/Qt3fFfhG/urban-traffic-with-cityscape.jpg',
  },
];

export default function ExploreCities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="title-header-text mb-4">
          Explore Cities
        </h2>
        <p className="title-para-text mb-12">
          Discover properties in popular cities across the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityData.map((city, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-60 sm:h-64 md:h-72 lg:h-64 relative">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-2 sm:px-4">
                <h3 className="text-lg sm:text-xl font-semibold">{city.name}</h3>
                <p className="text-xs sm:text-sm">{city.properties} PROPERTIES</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
