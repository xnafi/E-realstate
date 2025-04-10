'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaHome, FaThLarge, FaTh } from 'react-icons/fa';

const properties = [
  { id: 1, title: 'Equestrian Villa', price: '$1,599,000', rate: '$150.00 / ft', image: '/property1.jpg', address: '3385 Pan American Dr, Miami FL', bedrooms: 4, bathrooms: 2, area: 1200, tag: 'For Sale' },
  { id: 2, title: 'Green House', price: '$3,550,000', rate: '$2,560 / ft', image: '/property2.jpg', address: '695 Buttonwood Ln, Miami FL', bedrooms: 6, bathrooms: 2, area: 5400, tag: 'For Sale' },
  { id: 3, title: 'Renovated Kitchen Apartment', price: '$1,890/mo', rate: '', image: '/property3.jpg', address: 'NE 50th Terrace, Miami FL', bedrooms: 2, bathrooms: 2, area: 1320, tag: 'For Rent' },
  { id: 4, title: 'Modern Loft Apartment', price: '$3,750/mo', rate: '', image: '/property4.jpg', address: '2450 SW 1st St, Miami FL', bedrooms: 1, bathrooms: 1, area: 1678, tag: 'For Rent' },
  { id: 5, title: 'Green View Design', price: '$3,500/mo', rate: '', image: '/property5.jpg', address: '621 Beacon Blvd, Miami FL', bedrooms: 1, bathrooms: 1, area: 1760, tag: 'For Rent' },
  { id: 6, title: 'Light And Modern Apartment', price: '$4,500/mo', rate: '', image: '/property6.jpg', address: '2456 SW 1st St, Miami FL', bedrooms: 2, bathrooms: 2, area: 1200, tag: 'For Rent' },
  { id: 7, title: 'Complex', price: '$5,600/mo', rate: '', image: '/property7.jpg', address: '2195 9th St, Miami FL', bedrooms: 5, bathrooms: 3, area: 3450, tag: 'For Rent' },
  { id: 8, title: 'Villa Relaxing Green View', price: '$7,599,000', rate: '$1,890 / ft', image: '/property8.jpg', address: '500 New 36th St, Miami FL', bedrooms: 3, bathrooms: 2, area: 2540, tag: 'For Sale' },
  { id: 9, title: 'Villa With Pool For Sale', price: '$3,900,000', rate: '$1,760 / ft', image: '/property9.jpg', address: '3600 NW 5 Ave, Miami FL', bedrooms: 2, bathrooms: 2, area: 3450, tag: 'For Sale' },
];

export default function GridFullWidth() {
  const [sortOption, setSortOption] = useState('');

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-blue-900 flex items-center">
          <FaHome className="mr-2 text-gray-600" /> Grid Full Width
        </h1>
        <div className="flex gap-3">
          <FaThLarge className="text-gray-600 cursor-pointer hover:text-blue-600" />
          <FaTh className="text-gray-600 cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Sort & Property Count */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-700">Showing {properties.length} Properties</span>
        <div className="relative">
          <select
            className="border px-2 py-1 text-sm text-gray-700 cursor-pointer"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="">Sort by: Default</option>
            <option value="priceHigh">Price - High to Low</option>
            <option value="priceLow">Price - Low to High</option>
            <option value="dateOld">Date - Old to New</option>
            <option value="dateNew">Date - New to Old</option>
          </select>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border rounded overflow-hidden shadow bg-white">
            <div className="relative">
              <Image src={property.image} alt={property.title} width={600} height={400} className="w-full h-60 object-cover" />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                {property.tag}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-900">{property.price}</h2>
              <p className="text-xs text-gray-500 mb-2">{property.rate}</p>
              <p className="font-medium">{property.title}</p>
              <p className="text-sm text-gray-500">{property.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button className="px-3 py-1 border text-gray-700 hover:bg-gray-200">«</button>
        <button className="px-3 py-1 border text-white bg-blue-600">1</button>
        <button className="px-3 py-1 border text-gray-700 hover:bg-gray-200">2</button>
        <button className="px-3 py-1 border text-gray-700 hover:bg-gray-200">3</button>
        <button className="px-3 py-1 border text-gray-700 hover:bg-gray-200">»</button>
      </div>
    </main>
  );
}
