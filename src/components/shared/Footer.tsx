'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYelp,
  FaYoutube,
  FaArrowUp
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white text-sm relative">
      {/* Top Social Icons Row */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 px-4 py-6 text-xs sm:text-sm">
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaFacebookF /> Facebook
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaTwitter /> Twitter
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaGooglePlusG /> Google +
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaLinkedinIn /> Linkedin
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaInstagram /> Instagram
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaPinterestP /> Pinterest
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaYelp /> Yelp
        </Link>
        <Link href="#" className="flex items-center gap-1 hover:underline">
          <FaYoutube /> Youtube
        </Link>
      </div>

      {/* Middle Logo */}
      <div className="flex justify-center items-center flex-col gap-2 py-4 px-2 text-center">
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
          <HiOutlineLocationMarker className="text-white" />
          <span>E-Realstate</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 mt-4 mb-6">
          © E-Realstate - All rights reserved
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-600 p-3 rounded-full cursor-pointer shadow-md"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-white text-base sm:text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
