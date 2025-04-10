'use client';

import AdvancedFilters from '@/components/view/AdvancedFilters';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch, FaChevronDown, FaCog } from 'react-icons/fa';
import { FaHome, FaThLarge, FaListUl } from 'react-icons/fa';
import Link from 'next/link';

// Dummy property list
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
    tag: 'For Sale',
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
    tag: 'For Sale',
  },
  {
    id: 3,
    title: 'Renovated Kitchen Apartment',
    price: '$1,890/mo',
    rate: '$150.00 / ft',
    image: '/property3.jpg',
    address: 'NE 50th Terrace, Miami FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1320,
    tag: 'For Rent',
  },
  {
    id: 4,
    title: 'Luxury Penthouse',
    price: '$4,200,000',
    rate: '$1,100 / ft',
    image: '/property1.jpg',
    address: 'Ocean Dr, Miami FL',
    bedrooms: 5,
    bathrooms: 3,
    area: 6000,
    tag: 'For Sale',
  },
  {
    id: 5,
    title: 'City Studio',
    price: '$900/mo',
    rate: '$150.00 / ft',
    image: '/property2.jpg',
    address: 'Downtown Ave, Miami FL',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    tag: 'For Rent',
  },
  {
    id: 6,
    title: 'Countryside Retreat',
    price: '$750,000',
    rate: '$350 / ft',
    image: '/property3.jpg',
    address: 'Farm Rd, Miami FL',
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    tag: 'For Sale',
  },
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

// --- Dropdowns
const dropdownOptions = {
  Status: ['For Rent', 'For Sale', 'Foreclosures', 'New Construction', 'New Listing'],
  Type: ['Commercial', '- Office', '- Shop', 'Residential', '- Apartment', '- Villa'],
  Bedrooms: ['1', '2', '3', '4'],
  Bathrooms: ['1', '2', '3', '4'],
};

const Dropdown = ({
  label,
  options,
  selected,
  setSelected,
  openDropdown,
  setOpenDropdown,
}: {
  label: string;
  options: string[];
  selected: string[];
  setSelected: (val: string[]) => void;
  openDropdown: string;
  setOpenDropdown: (val: string) => void;
}) => {
  const isOpen = openDropdown === label;
  const [search, setSearch] = useState('');

  const toggleDropdown = () => setOpenDropdown(isOpen ? '' : label);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option: string) => {
    const cleanOpt = option.replace('-', '').trim();
    setSelected(
      selected.includes(cleanOpt)
        ? selected.filter((item) => item !== cleanOpt)
        : [...selected, cleanOpt]
    );
  };

  const handleSelectAll = () => {
    const actualOptions = options.filter((opt) => !opt.startsWith('-')).map((opt) => opt.trim());
    setSelected(actualOptions);
  };

  const handleDeselectAll = () => setSelected([]);

  const labelText =
    selected.length > 0 ? `${label} (${selected.length} selected)` : label;

  return (
    <div className="relative min-w-[150px] bg-white">
      <div
        onClick={toggleDropdown}
        className="flex items-center border px-2 py-2 text-sm text-gray-700 cursor-pointer justify-between"
      >
        {labelText}
        <FaChevronDown className="ml-2 text-xs" />
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg border mt-1 w-60 max-h-60 overflow-y-auto p-2 space-y-1">
          {(label === 'Status' || label === 'Type') && (
            <>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 mb-2 border border-gray-300 rounded text-sm outline-none"
              />
              <div className="flex justify-between mb-2 text-sm px-1">
                <button onClick={handleSelectAll} className="text-blue-500 hover:underline">
                  Select All
                </button>
                <button onClick={handleDeselectAll} className="text-red-500 hover:underline">
                  Deselect All
                </button>
              </div>
            </>
          )}

          {filteredOptions.map((opt, i) => {
            const cleanOpt = opt.replace('-', '').trim();
            const isSelected = selected.includes(cleanOpt);
            return (
              <div
                key={i}
                onClick={() => handleSelect(opt)}
                className={`text-sm px-2 py-1 rounded cursor-pointer ${
                  isSelected ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'
                } ${opt.startsWith('-') ? 'pl-6' : ''}`}
              >
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Sort
const SortDropdown = ({
  sortBy,
  setSortBy,
}: {
  sortBy: string;
  setSortBy: (val: string) => void;
}) => (
  <div className="mb-4 flex justify-end text-sm">
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="border px-3 py-2 rounded text-gray-700"
    >
      <option value="default">Default</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="title">Title (A-Z)</option>
    </select>
  </div>
);

// --- Property Card
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
      <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
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

// --- SearchBar (Unchanged)
const SearchBar = () => {
  const [openDropdown, setOpenDropdown] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<string[]>([]);
  const [selectedBaths, setSelectedBaths] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 mb-8 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center w-full">
        <div className="flex items-center border px-3 py-2 flex-grow sm:w-full md:w-1/3 lg:w-1/4">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter Keyword..."
            className="outline-none w-full text-sm text-gray-700"
          />
        </div>

        <Dropdown
          label="Status"
          options={dropdownOptions.Status}
          selected={selectedStatus}
          setSelected={setSelectedStatus}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
        <Dropdown
          label="Type"
          options={dropdownOptions.Type}
          selected={selectedType}
          setSelected={setSelectedType}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
        <Dropdown
          label="Bedrooms"
          options={dropdownOptions.Bedrooms}
          selected={selectedBeds}
          setSelected={setSelectedBeds}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
        <Dropdown
          label="Bathrooms"
          options={dropdownOptions.Bathrooms}
          selected={selectedBaths}
          setSelected={setSelectedBaths}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <div
          className="flex items-center text-blue-600 text-sm cursor-pointer whitespace-nowrap border px-2 py-2 sm:w-full md:w-auto"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <FaCog className="mr-1 text-sm" />
          <span>Advanced</span>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 text-sm sm:w-full md:w-auto">
          Go
        </button>
      </div>

      {showAdvanced && (
        <div className="bg-white mt-4 w-full">
          <AdvancedFilters />
        </div>
      )}
    </div>
  );
};

// --- Main Component
export default function GridFullWidthPage() {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const sorted = [...properties].sort((a, b) => {
    if (sortBy === 'priceLow') return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
    if (sortBy === 'priceHigh') return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / pageSize);
  const paginated = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <SearchBar />
      <div className="flex items-center justify-between mb-6">
      {/* Left Side: Breadcrumbs + Title */}
      <div>
        <div className="flex items-center text-sm text-gray-600 space-x-1 mb-6">
          <Link href="/" className="flex items-center text-blue-600 hover:underline">
            <FaHome className="mr-1" />
            Home
          </Link>
          <span className="mx-1 text-gray-400">{'>'}</span>
          <span className="text-gray-500">Grid Full Width</span>
        </div>
        <h1 className="text-3xl font-medium text-gray-900">Grid Full Width</h1>
      </div>

      {/* Right Side: View Switch Icons */}
      <div className="flex items-center space-x-3 text-xl text-blue-500 cursor-pointer">
        <FaListUl className="hover:text-blue-700 transition" />
        <FaThLarge className="hover:text-blue-700 transition" />
      </div>
    </div>
      <div className='flex items-center justify-between mb-4'>
<h1 className=''>52 properties</h1>
      <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {paginated.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 text-sm">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
