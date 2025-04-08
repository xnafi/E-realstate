import { FaClock } from "react-icons/fa";

export default function AdditionalDetails() {
  return (
    <div className="space-y-10 mt-10 text-sm text-gray-700 px-4 sm:px-6 lg:px-0">
      {/* Details Section */}
      <div className="bg-white border rounded-lg p-4 sm:p-6 shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-2 gap-2">
          <h2 className="text-base sm:text-lg font-semibold">Details</h2>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <FaClock className="text-gray-400" />
            <span>Updated on January 13, 2022 at 2:39 pm</span>
          </div>
        </div>

        <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 border rounded-md p-4">
          {/* Left Column */}
          <div className="space-y-2">
            {[
              ["Property ID:", "HZ40"],
              ["Price:", "$4,500/mo"],
              ["Property Size:", "1200 Sq Ft"],
              ["Bedrooms:", "4"],
              ["Bathrooms:", "2"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2 text-sm sm:text-base">
                <span className="font-semibold">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {[
              ["Garage:", "1"],
              ["Garage Size:", "200 SqFt"],
              ["Year Built:", "2016"],
              ["Property Type:", "Apartment"],
              ["Property Status:", "For Rent"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2 text-sm sm:text-base">
                <span className="font-semibold">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="bg-white border rounded-lg p-4 sm:p-6 shadow">
        <h2 className="text-base sm:text-lg font-semibold mb-4">Additional Details</h2>
        <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            {[
              ["Deposit:", "20%"],
              ["Pool Size:", "300 Sqft"],
              ["Last remodel year:", "1987"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2 text-sm sm:text-base">
                <span className="font-semibold">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              ["Amenities:", "Clubhouse"],
              ["Additional Rooms:", "Guest Bath"],
              ["Equipment:", "Grill - Gas"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b pb-2 text-sm sm:text-base">
                <span className="font-semibold">{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy Class Section */}
      <div className="bg-white border rounded-lg p-4 sm:p-6 shadow">
        <h2 className="text-base sm:text-lg font-semibold mb-4">Energy Class</h2>
        <div className="border-t pt-4 space-y-2">
          {[
            ["Energetic class:", "D"],
            ["Global Energy Performance Index:", "92.42 kWh / m²a"],
            ["Renewable energy performance index:", "45.00 kWh / m²a"],
            ["Energy performance of the building:", "98"],
            ["EPC Current Rating:", "67"],
            ["EPC Potential Rating:", "34"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border-b py-2 text-sm sm:text-base">
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        {/* Rating Bar */}
        <div className="mt-14 sm:mt-16 relative">
          <div className="flex text-xs font-semibold text-white overflow-hidden rounded h-6 sm:h-7">
            {["A+", "A", "B", "C", "D", "E", "F", "G", "H"].map((grade, i) => (
              <div
                key={grade}
                className={`flex-1 text-center flex items-center justify-center ${
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
          <div className="absolute -top-10 left-[44.4%] transform -translate-x-1/2 text-xs text-gray-700">
            <div className="bg-gray-200 px-2 py-0.5 rounded shadow text-center whitespace-nowrap">
              92.42 kWh / m²a | Energy class D
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
