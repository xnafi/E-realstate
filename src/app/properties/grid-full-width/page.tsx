'use client';

import Image from 'next/image';
import { FaSearch, FaChevronDown, FaCog } from 'react-icons/fa';

const properties = [
  {
    id: 1,
    title: 'Equestrian Villa',
    price: '$1,599,000',
    rate: '$150.00 / ft',
    image: '/property1.jpg',
    address: '3385 Pan American Dr, Miami FL',
    bedrooms: 4,
    bathrooms: 2,
    area: 1200,
    tag: 'For Sale'
  },
  {
    id: 2,
    title: 'Green House',
    price: '$3,550,000',
    rate: '$2,560 / ft',
    image: '/property2.jpg',
    address: '695 Buttonwood Ln, Miami FL',
    bedrooms: 6,
    bathrooms: 2,
    area: 5400,
    tag: 'For Sale'
  },
  {
    id: 3,
    title: 'Renovated Kitchen Apartment',
    price: '$1,890/mo',
    rate: '',
    image: '/property3.jpg',
    address: 'NE 50th Terrace, Miami FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1320,
    tag: 'For Rent'
  }
];

interface Property {
  id: number;
  title: string;
  price: string;
  rate: string;
  image: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  tag: string;
}

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="border rounded overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
    <div className="relative">
      <Image
        src={property.image}
        alt={property.title}
        width={600}
        height={400}
        className="w-full h-60 object-cover"
      />
      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
        {property.tag}
      </span>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-blue-900">{property.price}</h2>
      <p className="text-xs text-gray-500 mb-2">{property.rate}</p>
      <p className="font-medium">{property.title}</p>
      <p className="text-sm text-gray-500">{property.address}</p>
      <div className="flex justify-between text-gray-600 text-sm mt-3">
        <span>{property.bedrooms} Beds</span>
        <span>{property.bathrooms} Baths</span>
        <span>{property.area} Sq Ft</span>
      </div>
    </div>
  </div>
);

const SearchBar = () => {
  return (
    <div className=" flex flex-wrap  items-center mb-8 max-w-6xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center border  px-3 py-2 flex-grow md:flex-grow-0 md:w-1/2">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Enter Keyword..."
          className="outline-none w-full text-sm text-gray-700"
        />
      </div>

      {/* Dropdowns */}
      {['Status', 'Type', 'Bedrooms', 'Bathrooms'].map((label) => (
        <div
          key={label}
          className="flex items-center border  px-1 py-2 text-sm text-gray-500 cursor-pointer min-w-[100px] justify-between"
        >
          {label}
          <FaChevronDown className="ml-2 text-xs" />
        </div>
      ))}

      {/* Advanced */}
      <div className="flex items-center text-blue-600 text-sm cursor-pointer whitespace-nowrap border  px-2 py-2">
        <FaCog className="mr-1 text-sm" />
        <span>Advanced</span>
      </div>

      {/* Go Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2  text-sm">
        Go
      </button>
    </div>
  );
};

export default function GridFullWidthPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <SearchBar />
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Grid Full Width</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
