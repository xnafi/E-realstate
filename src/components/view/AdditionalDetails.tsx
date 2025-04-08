import { FaClock } from "react-icons/fa";

export default function AdditionalDetails() {
  return (
    <div className="space-y-10 mt-10 text-sm text-gray-700">
      {/* Details Section */}
      <div className="bg-white border rounded p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Details</h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FaClock className="text-gray-400" />
            Updated on January 13, 2022 at 2:39 pm
          </div>
        </div>

        <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-50 border rounded-md p-4">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Property ID:</span>
              <span>HZ40</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Price:</span>
              <span>$4,500/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Property Size:</span>
              <span>1200 Sq Ft</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Bedrooms:</span>
              <span>4</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Bathrooms:</span>
              <span>2</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Garage:</span>
              <span>1</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Garage Size:</span>
              <span>200 SqFt</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Year Built:</span>
              <span>2016</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Property Type:</span>
              <span>Apartment</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Property Status:</span>
              <span>For Rent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="bg-white border rounded p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Additional Details</h2>
        <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Deposit:</span>
              <span>20%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Pool Size:</span>
              <span>300 Sqft</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Last remodel year:</span>
              <span>1987</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Amenities:</span>
              <span>Clubhouse</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Additional Rooms:</span>
              <span>Guest Bath</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Equipment:</span>
              <span>Grill - Gas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Class Section */}
      <div className="bg-white border rounded p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Energy Class</h2>
        <div className="border-t pt-4 space-y-2">
          {[
            ["Energetic class:", "D"],
            ["Global Energy Performance Index:", "92.42 kWh / m²a"],
            ["Renewable energy performance index:", "45.00 kWh / m²a"],
            ["Energy performance of the building:", "98"],
            ["EPC Current Rating:", "67"],
            ["EPC Potential Rating:", "34"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        {/* Rating Bar */}
        <div className="mt-6 relative">
          <div className="flex text-xs font-semibold text-white overflow-hidden rounded">
            {["A+", "A", "B", "C", "D", "E", "F", "G", "H"].map((grade, i) => (
              <div
                key={grade}
                className={`flex-1 text-center py-1 ${
                  i === 0
                    ? "bg-green-600"
                    : i === 1
                    ? "bg-green-500"
                    : i === 2
                    ? "bg-lime-400"
                    : i === 3
                    ? "bg-yellow-300"
                    : i === 4
                    ? "bg-yellow-400 relative"
                    : i === 5
                    ? "bg-orange-400"
                    : i === 6
                    ? "bg-red-500"
                    : i === 7
                    ? "bg-red-600"
                    : "bg-red-700"
                }`}
              >
                {grade}
              </div>
            ))}
          </div>

          {/* Indicator */}
          <div className="absolute -top-6 left-[44.4%] transform -translate-x-1/2 text-xs text-gray-700">
            <div className="bg-gray-200 px-2 py-0.5 rounded shadow">
              92.42 kWh / m²a | Energy class D
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
