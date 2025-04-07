/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    zipCode: '',
    propertyType: '',
    maxPrice: '',
    minSize: '',
    beds: '',
    baths: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="relative min-h-[150vh] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/nLMSXjd6/interior-with-classic-design-furniture.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-60 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 text-white space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Why Houzez Is The Perfect Choice?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg">
            <div>
              <p className="text-xl font-semibold mb-1">01.</p>
              <p className="font-medium text-2xl sm:text-3xl">Perfect Solution For Designers And Agents</p>
              <p className="text-sm mt-2">
                Never miss a sale! It's never been easier to turn leads into real customers
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-1">02.</p>
              <p className="font-medium text-2xl sm:text-3xl">Design Custom Leads Capture Forms</p>
              <p className="text-sm mt-2">Someone asked a question? Get back to them right away</p>
            </div>
            <div>
              <p className="text-xl font-semibold mb-1">03.</p>
              <p className="font-medium text-2xl sm:text-3xl">Customer Relationship Management</p>
              <p className="text-sm mt-2">
                Keep track of your leads without having to pay for an external CRM
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-2/5 bg-white p-6 sm:p-8 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Real Estate Inquiry Form</h3>
          <p className="text-sm text-gray-500 mb-6">
            Design custom lead capture forms that integrate with the Houzez CRM
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Inquiry Type</label>
              <select
                name="inquiryType"
                onChange={handleChange}
                value={formData.inquiryType}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
              >
                <option value="">Select</option>
                <option value="purchase">Purchase</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
                <option value="mortgage">Mortgage</option>
                <option value="miss">Miss</option>
                <option value="evaluation">Evaluation</option>
              </select>
            </div>

            {/* Information */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Information</label>
              <select
                name="role"
                onChange={handleChange}
                value={formData.role}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
              >
                <option value="">I'm a</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
                <option value="investor">Investor</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={formData.email}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
            />

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">Select City</option>
                  <option value="newyork">New York</option>
                  <option value="losangeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                </select>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  onChange={handleChange}
                  value={formData.zipCode}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Property</label>
              <select
                name="propertyType"
                onChange={handleChange}
                value={formData.propertyType}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
              >
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </select>

              {/* Price & Size */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="Max price"
                  onChange={handleChange}
                  value={formData.maxPrice}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="minSize"
                  placeholder="Minimum size (Sq Ft)"
                  onChange={handleChange}
                  value={formData.minSize}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
              </div>

              {/* Beds & Baths */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <input
                  type="text"
                  name="beds"
                  placeholder="Number of beds"
                  onChange={handleChange}
                  value={formData.beds}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
                <input
                  type="text"
                  name="baths"
                  placeholder="Number of baths"
                  onChange={handleChange}
                  value={formData.baths}
                  className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded mt-2 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
