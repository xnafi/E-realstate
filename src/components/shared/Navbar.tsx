'use client';

import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaYelp,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Properties', 'Property', 'Realtor', 'Others'];

  return (
    <header className="border-b max-w-[1400px] mx-auto">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 text-sm text-gray-700">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-900 flex items-center gap-2 mb-4 lg:mb-0">
          <HiOutlineLocationMarker className="text-blue-600 text-4xl" />
          <span>E-Realstate</span>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
          {/* Phone & Email */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <FaPhoneAlt className="text-blue-600 text-3xl mt-2" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-blue-900 mb-2">1 800 987 6543</span>
              <span className="text-gray-500">info@houzez.com</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <HiOutlineLocationMarker className="text-blue-600 text-3xl mt-2" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-blue-900 mb-2">Oceanview Hall</span>
              <span className="text-gray-500">Miami, FL 33141</span>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <FiClock className="text-blue-600 text-3xl mt-2" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-blue-900 mb-2">9 am to 6 pm</span>
              <span className="text-gray-500">Monday to Friday</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0 text-blue-900 text-2xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaPinterestP />
          <FaYoutube />
          <FaYelp />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white text-sm font-semibold">
        <div className="flex items-center justify-between px-6 py-3 lg:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="px-6 py-4 flex flex-col gap-4 lg:hidden bg-blue-900">
            {navItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="hover:underline">{item}</span>
                <FaChevronDown className="text-xs" />
              </div>
            ))}
           <Link href="/contact" className="hover:underline">Contact</Link>


            <div className="flex flex-col gap-2 mt-4">
              <Link href="#" className="hover:underline">Login</Link>
              <Link href="#" className="hover:underline">Register</Link>
              <Link href="#" className="hover:underline">Favorites <span className="text-xs">(0)</span></Link>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded">
                Create a Listing
              </button>
            </div>
          </div>
        )}

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between px-6 py-3">
          {/* Left Nav */}
          <div className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                <button className="hover:underline relative flex items-center gap-1">
                  {item}
                  <FaChevronDown className="text-xs mt-0.5" />
                </button>
                <div className="absolute hidden group-hover:block bg-white text-black py-2 px-4 mt-2 rounded shadow-lg z-10">
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#">Option 1</Link></li>
                    <li><Link href="#">Option 2</Link></li>
                    <li><Link href="#">Option 3</Link></li>
                  </ul>
                </div>
              </div>
            ))}
            <Link href="/contact" className="hover:underline">Contact</Link>

          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Login</Link>
            <Link href="#" className="hover:underline">Register</Link>
            <Link href="#" className="hover:underline">Favorites <span className="text-xs">(0)</span></Link>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded">
              Create a Listing
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
