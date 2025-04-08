import {
    FaCheckCircle,
    FaBed,
    FaShower,
    FaChevronDown,
  } from 'react-icons/fa';
  
  const features = [
    'Air Conditioning',
    'Barbeque',
    'Dryer',
    'Gym',
    'Laundry',
    'Lawn',
    'Microwave',
    'Outdoor Shower',
    'Refrigerator',
    'Sauna',
    'Swimming Pool',
    'TV Cable',
    'Washer',
    'WiFi',
    'Window Coverings',
  ];
  
  const floorPlans = [
    {
      title: 'First Floor',
      size: '1267 Sqft',
      beds: '670 Sqft',
      baths: '530 Sqft',
      price: '$1,650',
    },
    {
      title: 'Second Floor',
      size: '1345 Sqft',
      beds: '543 Sqft',
      baths: '238 Sqft',
      price: '$1,600',
    },
  ];
  
  const PropertyDetails = () => {
    return (
      <div className="space-y-8">
        {/* Features Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Features</h2>
          <hr className="mb-4 border-gray-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 text-gray-700 text-sm">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-gray-500 text-sm" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Floor Plans Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Floor Plans</h2>
          <hr className="mb-4 border-gray-200" />
          <div>
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-200"
              >
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <FaChevronDown className="text-sm" />
                  <span>{plan.title}</span>
                </div>
                <div className="flex flex-wrap text-sm gap-x-6 gap-y-1 text-gray-700 mt-2 sm:mt-0">
                  <span>
                    Size: <span className="font-semibold">{plan.size}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBed />
                    <span className="font-semibold">{plan.beds}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaShower />
                    <span className="font-semibold">{plan.baths}</span>
                  </span>
                  <span>
                    Price: <span className="font-semibold">{plan.price}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyDetails;
  