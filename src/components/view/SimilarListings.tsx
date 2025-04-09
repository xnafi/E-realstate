'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaHeart, FaExpand, FaBed, FaBath, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import { PiRulerLight } from 'react-icons/pi';

const listings = [
  {
    title: 'Green View Design',
    address: '621 Beacom Blvd, Miami, FL 33135, USA',
    price: '$3,500/mo',
    images: [
      'https://i.postimg.cc/xdVRr90Y/034.jpg',
      'https://i.postimg.cc/DZ2PZ5JM/045.jpg',
    ],
    bed: 1,
    bath: 1,
    size: 1760,
  },
  {
    title: 'Modern Loft Apartment',
    address: '2450 SW 1st St, Miami, FL 33135, USA',
    price: '$3,750/mo',
    images: [
      'https://i.postimg.cc/76mMT7SY/012.jpg',
      'https://i.postimg.cc/pLzfJ3KS/008.jpg',
    ],
    bed: 1,
    bath: 1,
    size: 1678,
  },
  {
    title: 'Premium Kitchen Space',
    address: '498 Ocean Dr, Miami, FL 33139, USA',
    price: '$1,890/mo',
    images: [
      'https://i.postimg.cc/pLzfJ3KS/008.jpg',
      'https://i.postimg.cc/xdVRr90Y/034.jpg',
    ],
    bed: 1,
    bath: 1,
    size: 1600,
  },
  {
    title: 'Cozy Studio Loft',
    address: '123 NE 2nd Ave, Miami, FL 33132, USA',
    price: '$5,600/mo',
    images: [
      'https://i.postimg.cc/DZ2PZ5JM/045.jpg',
      'https://i.postimg.cc/76mMT7SY/012.jpg',
    ],
    bed: 1,
    bath: 1,
    size: 1700,
  },
];

const SimilarListings = () => {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b py-2">Similar Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            {/* Image Slider */}
            <div className="relative">
              <Swiper navigation modules={[Navigation]} className="w-full h-[230px]">
                {item.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={item.title}
                      width={500}
                      height={230}
                      className="w-full h-[230px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* FOR RENT tag */}
              <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs px-3 py-1 rounded-md z-10">
                FOR RENT
              </span>

              {/* Price tag */}
              <div className="absolute bottom-3 left-3 text-white font-semibold text-lg px-3 py-1 rounded-md z-10">
                {item.price}
              </div>

              {/* Icons group */}
              <div className="absolute bottom-3 right-3 flex gap-2 z-10 ">
                <button className=" p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <FaHeart className="text-gray-700 text-xl" />
                </button>
                <button className=" p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <FaExpand className="text-gray-700 text-xl" />
                </button>
                <button className=" p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <FaShareAlt className="text-gray-700 text-xl" />
                </button>
              </div>
            </div>

            {/* Listing Info */}
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.address}</p>

              <div className="flex justify-between text-xs text-gray-600 mt-3 pt-2 border-t">
                <div className="flex items-center gap-1">
                  <FaBed className="text-sm" /> <span>{item.bed}</span>
                  <span className="ml-1">Bedroom</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBath className="text-sm" /> <span>{item.bath}</span>
                  <span className="ml-1">Bathroom</span>
                </div>
                <div className="flex items-center gap-1">
                  <PiRulerLight className="text-sm" /> <span>{item.size}</span>
                  <span className="ml-1">Sq Ft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarListings;
