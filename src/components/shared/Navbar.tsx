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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: 'Home',
      dropdown: ['Default', 'With Video']
    },
    {
      label: 'Properties',
      dropdown: [
        {
          label: 'Grid Layout',
          subDropdown: ['Grid Default', 'Grid Full Width 3cols']
        },
        { label: 'List Layout' }
      ]
    },
    {
      label: 'Property',
      dropdown: ['Default']
    },
    {
      label: 'Realtor',
      dropdown: ['Agents']
    },
    {
      label: 'Others',
      dropdown: ['About']
    }
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
    setOpenSubDropdown(null); // reset sub-dropdown when switching main menu
  };

  const toggleSubDropdown = (label: string) => {
    setOpenSubDropdown(prev => (prev === label ? null : label));
  };

  return (
    <header className="border-b max-w-[1400px] mx-auto z-50 relative">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 text-sm text-gray-700">
        <div className="text-3xl font-bold text-blue-900 flex items-center gap-2 mb-4 lg:mb-0">
          <HiOutlineLocationMarker className="text-blue-600 text-4xl" />
          <span>E-Realstate</span>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <FaPhoneAlt className="text-blue-600 text-3xl mt-2" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-blue-900 mb-2">1 800 987 6543</span>
              <span className="text-gray-500">info@houzez.com</span>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <HiOutlineLocationMarker className="text-blue-600 text-3xl mt-2" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-blue-900 mb-2">Oceanview Hall</span>
              <span className="text-gray-500">Miami, FL 33141</span>
            </div>
          </div>
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
      <nav className="bg-blue-900 text-white text-sm font-semibold relative z-50">
        {/* Mobile Toggle */}
        <div className="flex items-center justify-between px-6 py-3 lg:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="px-6 py-4 flex flex-col gap-4 lg:hidden bg-blue-900">
            {navItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <FaChevronDown className="text-xs" />
                </div>
                {openDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropItem: string | { label: string; subDropdown?: string[] }, idx: number) => {
                      if (typeof dropItem === 'string') {
                        return (
                          <Link key={idx} href="#" className="block">
                            {dropItem}
                          </Link>
                        );
                      } else {
                        return (
                          <div key={idx}>
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => toggleSubDropdown(dropItem.label)}
                            >
                              <span>{dropItem.label}</span>
                              <FaChevronDown className="text-xs" />
                            </div>
                            {openSubDropdown === dropItem.label && (
                              <div className="ml-4 mt-1 space-y-1">
                                {(dropItem.subDropdown ?? []).map((subItem: string, subIdx: number) => (
                                  <Link key={subIdx} href="#" className="block text-sm">
                                    {subItem}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact">Contact</Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="#">Login</Link>
              <Link href="#">Register</Link>
              <Link href="#">Favorites <span className="text-xs">(0)</span></Link>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded">
                Create a Listing
              </button>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between px-6 py-3 relative">
          <div className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <div key={i} className="relative">
                <button
                  className="flex items-center gap-1"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <FaChevronDown className="text-xs mt-0.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white text-black py-2 px-4 mt-2 rounded shadow-lg z-50 min-w-[180px]">
                    <ul className="space-y-2 text-sm">
                      {item.dropdown.map((dropItem: string | { label: string; subDropdown?: string[] }, idx: number) => {
                        if (typeof dropItem === 'string') {
                          return (
                            <li key={idx}>
                              <Link href="#" className="block hover:underline">
                                {dropItem}
                              </Link>
                            </li>
                          );
                        } else {
                          return (
                            <li key={idx}>
                              <button
                                className="flex items-center gap-1 w-full"
                                onClick={() => toggleSubDropdown(dropItem.label)}
                              >
                                {dropItem.label}
                                <FaChevronDown className="text-xs" />
                              </button>
                              {openSubDropdown === dropItem.label && (
                                <ul className="ml-4 mt-1 space-y-1">
                                  {(dropItem.subDropdown ?? []).map((subItem: string, subIdx: number) => (
                                    <li key={subIdx}>
                                      <Link href="#" className="block hover:underline">
                                        {subItem}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

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
