'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa'; 


export default function NewsLetter() {
  return (
    <footer className="bg-[#003d6a] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Discover */}
<div>
  <h3 className="text-lg font-semibold mb-4">Discover</h3>
  <ul className="space-y-4 text-sm font-bold">
    {['Miami', 'Los Angeles', 'Chicago', 'New York'].map((city) => (
      <li key={city} className="flex items-center gap-2 hover:underline cursor-pointer">
        <FaAngleRight className="text-white text-base" />
        {city}
      </li>
    ))}
  </ul>
</div>


        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              774 NE 84th St Miami, FL 33879
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-lg" />
              879 456 1349
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-lg" />
              email@houzez.co
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00aaff] hover:bg-[#0099dd] text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Submit
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-300">
          E-Realstate is a premium WordPress theme for Designers & Real Estate Agents.
          </p>
        </div>
      </div>
    </footer>
  );
}
