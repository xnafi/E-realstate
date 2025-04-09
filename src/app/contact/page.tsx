'use client';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube, FaYelp, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="font-sans bg-gray-50 lg:pb-10">
      {/* Banner */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://i.postimg.cc/D0kCczs4/furniture-banner.jpg"
          alt="Contact Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form & Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 ">
        {/* Form */}
        <div className="md:col-span-2 space-y-6 p-6 bg-white  rounded-lg">
          <p className="text-gray-600 text-base">
            Design your custom contact forms with this Houzez Elementor custom widget and connect your leads with the integrated Houzez CRM.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 px-4 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" placeholder="Enter your last name" className="w-full border border-gray-300 px-4 py-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea placeholder="Message" rows={5} className="w-full border border-gray-300 px-4 py-2 rounded resize-none" />
            </div>
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </div>

        {/* Contact Sidebar */}
        <div className="space-y-8 ">
          <div className='bg-white p-6 rounded-lg '>
            <h3 className="font-semibold text-gray-900 mb-2">For inquiries contact:</h3>
            <div className="text-base text-gray-600 space-y-3">
              <div>
                <p className="font-semibold text-black text-lg">Amy Miller</p>
                <p>Public Relations Manager</p>
                <p>774 NE 84th St Miami, FL 33879</p>
                <p className="text-sky-600">amy.miller@houzez.com</p>
              </div>
              <div>
                <p className="font-semibold text-black text-lg">Kyle Parker</p>
                <p>Public Relations Associated</p>
                <p>774 NE 84th St Miami, FL 33879</p>
                <p className="text-sky-600">kyle.parker@houzez.com</p>
              </div>
            </div>
          </div>
          <div className='bg-white p-6 rounded-lg '>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Corporate Headquarters</h3>
            <p className="text-base text-gray-600">1584 Biscayne Boulevard<br />Miami FL, 33176</p>
          </div>
          <div className="flex items-center gap-3 text-sky-600 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaPinterestP />
            <FaYoutube />
            <FaYelp />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.556202205919!2d-80.19365922499149!3d25.7890950773701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69c684fb6f5%3A0xd1a3dc6fa7b7e52e!2s1584%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033132!5e0!3m2!1sen!2sus!4v1614727070503!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600 ">
          <span className="font-semibold">Address:</span> 1584 Biscayne Blvd, Miami, FL 33132 —{' '}
          <a href="https://www.google.com/maps" target="_blank" className="text-sky-600 underline">Get Directions</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
