import {
  FaBuilding,
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaCalendarAlt,
} from "react-icons/fa";

export default function PropertyDetails() {
  return (
    <div className="space-y-8 mt-8">
      {/* Overview */}
      <div className="bg-white border rounded p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="text-right text-sm text-gray-700">
            <span className="font-semibold">Property ID:</span> HZ40
          </p>
        </div>
        <div className="border-t pt-4 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="flex items-start gap-3">
            <FaBuilding className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">Apartment</p>
              <p className="text-xs text-gray-500">Property Type</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaBed className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">4</p>
              <p className="text-xs text-gray-500">Bedrooms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaBath className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">2</p>
              <p className="text-xs text-gray-500">Bathrooms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCar className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">1</p>
              <p className="text-xs text-gray-500">Garage</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaRulerCombined className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">1200</p>
              <p className="text-xs text-gray-500">Sq Ft</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCalendarAlt className="text-gray-500 mt-1" />
            <div>
              <p className="font-semibold">2016</p>
              <p className="text-xs text-gray-500">Year Built</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white border rounded p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Description</h2>
        <div className="border-t pt-4 space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat...
          </p>
          <p>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum...
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white border rounded p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Address</h2>
          <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded flex items-center gap-1">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.38-.56 2.63-1.47 3.53L12 17.6l-3.53-5.07C7.56 11.63 7 10.38 7 9zm5-2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Open on Google Maps
          </button>
        </div>

        <div className="border-t pt-4 grid grid-cols-2 gap-x-6 text-sm text-gray-700">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">Address</p>
              <p>2436 SW 8th St</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">City</p>
              <p>Miami</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">State/County</p>
              <p>Florida</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">Zip/Postal Code</p>
              <p>33140</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">Area</p>
              <p>West Flagger</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-semibold">Country</p>
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
