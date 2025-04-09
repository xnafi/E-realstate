'use client';

import { useState } from 'react';
import {
  FaCheckCircle,
  FaBed,
  FaShower,
} from 'react-icons/fa';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Image from "next/image";

const features = [
  'Air Conditioning',
  'Barbeque',
  'Dryer',
  'Gym',
  'Laundry',
  'Lawn',
  'Microwave',
  'Outdoor Shower',
  'Refrigerator',
  'Sauna',
  'Swimming Pool',
  'TV Cable',
  'Washer',
  'WiFi',
  'Window Coverings',
];

const floorPlans = [
  {
    title: 'First Floor',
    size: '1267 Sqft',
    beds: '670 Sqft',
    baths: '530 Sqft',
    price: '$1,650',
    image: 'https://i.postimg.cc/ZR4HdybQ/plan-1.jpg',
    description: 'This spacious first-floor layout includes a large living area, kitchen, and dining space ideal for family gatherings and entertaining guests.',
  },
  {
    title: 'Second Floor',
    size: '1345 Sqft',
    beds: '543 Sqft',
    baths: '238 Sqft',
    price: '$1,600',
    image: 'https://i.postimg.cc/rmjJCFzw/plan-2.jpg',
    description: 'The second floor features cozy bedrooms and a modern bathroom setup, perfect for a comfortable and private living experience.',
  },
];

const PropertyDetails = () => {
  const [openPlan, setOpenPlan] = useState<number | null>(null);

  const togglePlan = (index: number) => {
    setOpenPlan(openPlan === index ? null : index);
  };

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-0 py-10">
      {/* Features Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Features</h2>
        <hr className="mb-4 border-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 text-gray-700 text-sm">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-500 text-xs sm:text-sm" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Floor Plans</h2>
        <hr className="mb-4 border-gray-200" />
        <div className="space-y-4">
          {floorPlans.map((plan, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 sm:gap-y-0 cursor-pointer"
                onClick={() => togglePlan(index)}
              >
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <MdOutlineArrowDropDownCircle className={`text-base transition-transform duration-300 ${openPlan === index ? 'rotate-180' : ''}`} />
                  <span>{plan.title}</span>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap text-sm gap-x-6 gap-y-1 text-gray-700">
                  <span>
                    Size: <span className="font-semibold">{plan.size}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBed className="text-xs" />
                    <span className="font-semibold">{plan.beds}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaShower className="text-xs" />
                    <span className="font-semibold">{plan.baths}</span>
                  </span>
                  <span>
                    Price: <span className="font-semibold">{plan.price}</span>
                  </span>
                </div>
              </div>

              {openPlan === index && (
                <div className="mt-4 space-y-3 transition-all duration-300">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} Image`}
                    width={800}
                    height={400}
                    unoptimized
                    className="rounded w-full object-cover max-h-[400px]"
                  />
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
