'use client';

import AdvancedFilters from '@/components/view/AdvancedFilters';
import Image from 'next/image';
import { useState } from 'react';
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
    rate: '',
    image: '/property3.jpg',
    address: 'NE 50th Terrace, Miami FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1320,
    tag: 'For Rent',
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
    const actualOptions = options
      .filter((opt) => !opt.startsWith('-'))
      .map((opt) => opt.trim());
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
                <button
                  onClick={handleSelectAll}
                  className="text-blue-500 hover:underline"
                >
                  Select All
                </button>
                <button
                  onClick={handleDeselectAll}
                  className="text-red-500 hover:underline"
                >
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
  const [openDropdown, setOpenDropdown] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<string[]>([]);
  const [selectedBaths, setSelectedBaths] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 mb-8 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center w-full">
        <div className="flex items-center border px-3 py-2 flex-grow md:flex-grow-0 md:w-1/3">
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
          className="flex items-center text-blue-600 text-sm cursor-pointer whitespace-nowrap border px-2 py-2"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <FaCog className="mr-1 text-sm" />
          <span>Advanced</span>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 text-sm">
          Go
        </button>
      </div>

      {showAdvanced && (
        <div className=" bg-white  mt-4 ">
          <AdvancedFilters />
        </div>
      )}
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
