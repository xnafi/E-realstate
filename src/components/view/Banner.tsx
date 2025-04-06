'use client';

import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [status, setStatus] = useState<'all' | 'rent' | 'sale'>('all');

  return (
    <section className="relative max-w-[1400px] mx-auto h-[90vh]  flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://i.postimg.cc/YCB4QQcz/urban-city-architecture.jpg"
        alt="City View"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome To E-Realstate</h1>
        <p className="mt-2 text-lg md:text-xl">
          Highly Customizable Real Estate Platform
        </p>

        {/* Status Tabs */}
        <div className="flex justify-center gap-1 mt-6 flex-wrap">
          <button
            onClick={() => setStatus('all')}
            className={`px-4 py-2 text-sm font-medium rounded-tl rounded-bl ${
              status === 'all'
                ? 'bg-white text-black'
                : 'bg-gray-200 text-gray-600 hover:bg-white hover:text-black'
            }`}
          >
            All Status
          </button>
          <button
            onClick={() => setStatus('rent')}
            className={`px-4 py-2 text-sm font-medium ${
              status === 'rent'
                ? 'bg-sky-500 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-sky-500 hover:text-white'
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => setStatus('sale')}
            className={`px-4 py-2 text-sm font-medium rounded-tr rounded-br ${
              status === 'sale'
                ? 'bg-sky-600 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-sky-600 hover:text-white'
            }`}
          >
            For Sale
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-6 max-w-4xl mx-auto bg-white rounded shadow-md flex flex-col md:flex-row items-stretch w-full overflow-hidden">
          {/* City Dropdown */}
          <select className="text-sm px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300 text-gray-700 focus:outline-none">
            <option>All Cities</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Khulna</option>
            <option>Sylhet</option>
          </select>

          {/* Keyword Input */}
          <div className="flex items-center flex-1 px-4 py-3 gap-2 border-b md:border-b-0 md:border-r border-gray-300">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Enter Keyword..."
              className="w-full text-sm focus:outline-none text-gray-800"
            />
          </div>

          {/* Search Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-medium">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
