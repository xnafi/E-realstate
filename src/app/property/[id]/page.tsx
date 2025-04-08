import Image from "next/image";
import { FaHome, FaHeart, FaShareAlt, FaExpand } from "react-icons/fa";

const listings = [
  {
    id: 1,
    title: "Light And Modern Apartment",
    address: "2436 SW 8th St, Miami, FL 33135, USA",
    price: "$4,500/mo",
    image: "https://i.postimg.cc/5NHgzFHn/allison-saeng-ra-Bu-IBxd4-MQ-unsplash.jpg",
  },
  {
    id: 2,
    title: "Relaxing Apartment",
    address: "Marcy Ave, Brooklyn, NY, USA",
    price: "$2,800/mo",
    image: "https://i.postimg.cc/pdBJvf7X/steffen-lemmerzahl-XEjhbht-Yc1-A-unsplash.jpg",
  },
  {
    id: 3,
    title: "New Apartment Nice View",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "$11,000/mo",
    image: "https://i.postimg.cc/RZ5YVTPc/le-quan-GLFAKS5f3wc-unsplash.jpg",
  },
];

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = listings.find((item) => item.id === parseInt(params.id));

  if (!property) return <div className="text-center mt-20 text-xl">Property not found.</div>;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
      {/* Breadcrumb with Home icon */}
      <div className="flex items-center text-sm text-gray-500 gap-1">
        <FaHome className="text-gray-600" />
        <span>Home</span> / <span>Apartment</span> / <span className="text-black">{property.title}</span>
      </div>

      {/* Title and status */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{property.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">FEATURED</span>
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">FOR RENT</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">{property.address}</p>
        </div>

        {/* Icons and price */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3 text-gray-600 text-xl">
            <FaExpand className="hover:text-black cursor-pointer" />
            <FaHeart className="hover:text-black cursor-pointer" />
            <FaShareAlt className="hover:text-black cursor-pointer" />
          </div>
          <div className="text-2xl font-semibold">{property.price}</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="w-full lg:w-[70%] relative h-[500px]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="rounded object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[30%] border rounded p-4 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="https://i.postimg.cc/YChT8hJn/images16.jpg"
              alt="Agent"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">Samuel Palmer</p>
              <a href="#" className="text-blue-500 text-sm">View Listings</a>
            </div>
          </div>

          <form className="space-y-3">
            <input type="text" placeholder="Name" className="w-full border px-3 py-2 rounded text-sm" />
            <input type="text" placeholder="Phone" className="w-full border px-3 py-2 rounded text-sm" />
            <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded text-sm" />
            <textarea
              rows={4}
              className="w-full border px-3 py-2 rounded text-sm"
              defaultValue={`Hello, I am interested in [${property.title}]`}
            />
            <select className="w-full border px-3 py-2 rounded text-sm">
              <option value="">Select</option>
              <option value="buyer">I am a buyer</option>
              <option value="agent">I am an agent</option>
              <option value="other">Other</option>
            </select>
            <p className="text-xs text-gray-500">
              By submitting this form I agree to <a href="#" className="text-blue-500">Terms of Use</a>
            </p>
            <div className="flex gap-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded text-sm">Send Message</button>
              <button type="button" className="border border-green-600 text-green-600 px-4 py-2 rounded text-sm">Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
