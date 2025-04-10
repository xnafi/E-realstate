'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';

const cities = ['New York', 'Miami', 'Milan'];
const areas = ['Garden - New York', 'Park - Miami', 'Mall - Milan'];
const otherFeatures = [
  'Air Conditioning', 'Barbeque', 'Dryer', 'Gym', 'Laundry',
  'Lawn', 'Microwave', 'Outdoor Shower', 'Refrigerator',
  'Sauna', 'Swimming Pool', 'TV Cable', 'Washer', 'WiFi', 'Window Coverings'
];

export default function AdvancedFilters() {
  const [showAdvanced] = useState(true);
  const [cityOpen, setCityOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [showFeatures, setShowFeatures] = useState(false);
  const [features, setFeatures] = useState<string[]>([]);

  const [priceRange, setPriceRange] = useState([200, 2500000]);

  const cityRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) setCityOpen(false);
      if (areaRef.current && !areaRef.current.contains(e.target as Node)) setAreaOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFeature = (feature: string) => {
    setFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    const [min, max] = priceRange;
    if (event.target.name === 'min') {
      if (value <= max) {
        setPriceRange([value, max]);
      }
    } else if (event.target.name === 'max') {
      if (value >= min) {
        setPriceRange([min, value]);
      }
    }
  };

  return (
    <div className=" bg-white p-4">
      {showAdvanced && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {/* All Cities Dropdown */}
            <div className="relative" ref={cityRef}>
              <button
                onClick={() => {
                  setCityOpen(!cityOpen);
                  setAreaOpen(false);
                }}
                className="w-full border px-3 py-2 rounded-md flex justify-between items-center"
              >
                {selectedCity} <FaChevronDown className="ml-2 text-sm" />
              </button>
              {cityOpen && (
                <div className="absolute bg-white border w-full mt-1 z-10 shadow">
                  {cities.map(city => (
                    <div
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setCityOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* All Areas Dropdown */}
            <div className="relative" ref={areaRef}>
              <button
                onClick={() => {
                  setAreaOpen(!areaOpen);
                  setCityOpen(false);
                }}
                className="w-full border px-3 py-2 rounded-md flex justify-between items-center"
              >
                {selectedArea} <FaChevronDown className="ml-2 text-sm" />
              </button>
              {areaOpen && (
                <div className="absolute bg-white border w-full mt-1 z-10 shadow">
                  {areas.map(area => (
                    <div
                      key={area}
                      onClick={() => {
                        setSelectedArea(area);
                        setAreaOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Min Area */}
            <input
              type="number"
              placeholder="Min. Area"
              className="border px-3 py-2 rounded-md"
            />

            {/* Max Area */}
            <input
              type="number"
              placeholder="Max. Area"
              className="border px-3 py-2 rounded-md"
            />

            {/* Property ID */}
            <input
              type="text"
              placeholder="Property ID"
              className="border px-3 py-2 rounded-md"
            />

            {/* Sort Price */}
            <select className="border px-3 py-2 rounded-md">
              <option value="high">Price: High to Low</option>
              <option value="low">Price: Low to High</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="mt-4 mb-2 text-sm font-semibold">
            Price Range From <span className="text-blue-600">${priceRange[0]}</span> To{' '}
            <span className="text-blue-600">${priceRange[1]}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <input
              type="range"
              name="min"
              min="200"
              max="2500000"
              value={priceRange[0]}
              onChange={handlePriceChange}
              className="w-full"
            />
            <input
              type="range"
              name="max"
              min="200"
              max="2500000"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
          </div>

          {/* Other Features Toggle */}
          <div
            onClick={() => setShowFeatures(!showFeatures)}
            className="flex items-center gap-2 cursor-pointer text-sm font-semibold"
          >
            {showFeatures ? <FaMinus /> : <FaPlus />} Other Features
          </div>

          {/* Features Grid */}
          {showFeatures && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
              {otherFeatures.map(feature => (
                <label key={feature} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
