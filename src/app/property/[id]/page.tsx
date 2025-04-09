"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FaHome,
  FaHeart,
  FaShareAlt,
  FaExpand,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AdditionalDetails from "@/components/view/AdditionalDetails";
import FloorPlans from "@/components/view/FloorPlans";
import PropertyDetails from "@/components/view/PropertyDetails";
import PropertyVideo from "@/components/view/PropertyVideo";
import TourSchedule from "@/components/view/TourSchedule";
import Review from "@/components/view/Review";
import SimilarListings from "@/components/view/SimilarListings";

interface Listing {
  id: number;
  title: string;
  address: string;
  price: string;
  image: string;
  images?: string[];
}

const listings: Listing[] = [
  {
    id: 1,
    title: "Light And Modern Apartment",
    address: "2436 SW 8th St, Miami, FL 33135, USA",
    price: "$4,500/mo",
    image: "https://i.postimg.cc/5NHgzFHn/allison-saeng-ra-Bu-IBxd4-MQ-unsplash.jpg",
    images: [
      "https://i.postimg.cc/5NHgzFHn/allison-saeng-ra-Bu-IBxd4-MQ-unsplash.jpg",
      "https://i.postimg.cc/wv6d0KZT/036-1170x877.jpg",
      "https://i.postimg.cc/6qqxxrBk/047-1170x877.jpg",
    ],
  },
  {
    id: 2,
    title: "Relaxing Apartment",
    address: "Marcy Ave, Brooklyn, NY, USA",
    price: "$2,800/mo",
    image: "https://i.postimg.cc/pdBJvf7X/steffen-lemmerzahl-XEjhbht-Yc1-A-unsplash.jpg",
    images: [
      "https://i.postimg.cc/pdBJvf7X/steffen-lemmerzahl-XEjhbht-Yc1-A-unsplash.jpg",
      "https://i.postimg.cc/wv6d0KZT/036-1170x877.jpg",
      "https://i.postimg.cc/6qqxxrBk/047-1170x877.jpg",
    ],
  },
  {
    id: 3,
    title: "New Apartment Nice View",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "$11,000/mo",
    image: "https://i.postimg.cc/RZ5YVTPc/le-quan-GLFAKS5f3wc-unsplash.jpg",
    images: [
      "https://i.postimg.cc/RZ5YVTPc/le-quan-GLFAKS5f3wc-unsplash.jpg",
      "https://i.postimg.cc/wv6d0KZT/036-1170x877.jpg",
      "https://i.postimg.cc/6qqxxrBk/047-1170x877.jpg",
    ],
  },
];

export default function PropertyPage() {
  const params = useParams();
  const propertyId = parseInt(params?.id as string, 10);
  const property = listings.find((item) => item.id === propertyId);

  if (isNaN(propertyId) || !property) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 gap-1 flex-wrap">
          <FaHome className="text-gray-600" />
          <span>Home</span> / <span>Apartment</span> /{" "}
          <span className="text-black">{property.title}</span>
        </div>

        {/* Title + Meta */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{property.title}</h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">FEATURED</span>
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded">FOR RENT</span>
            </div>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
              <FaMapMarkerAlt className="text-green-600" />
              {property.address}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex gap-3 text-gray-600 text-xl">
              <FaExpand className="hover:text-black cursor-pointer" />
              <FaHeart className="hover:text-black cursor-pointer" />
              <FaShareAlt className="hover:text-black cursor-pointer" />
            </div>
            <div className="text-2xl font-semibold">{property.price}</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left */}
          <div className="w-full lg:w-[70%] overflow-auto border-b-2 py-2">
            {/* Swiper Slider */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="h-full"
              >
                {property.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={property.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Top Right Icons */}
              <div className="absolute top-4 right-4 flex gap-3 text-white text-lg z-10">
                {[FaExpand, FaHeart, FaShareAlt].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:text-green-400 transition"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

            <PropertyDetails />
            <AdditionalDetails />
            <FloorPlans />
            <TourSchedule />
            <PropertyVideo />
            <Review />
            <SimilarListings />
          </div>

          {/* Right (Sticky Contact Form) */}
          <div className="w-full lg:w-[30%]">
            <div className="sticky top-20 border rounded p-4 space-y-4 bg-white shadow">
              <div className="flex items-center gap-3">
                <Image
                  src="https://i.postimg.cc/YChT8hJn/images16.jpg"
                  alt="Agent"
                  width={40}
                  height={40}
                  unoptimized
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">Samuel Palmer</p>
                  <a href="#" className="text-blue-500 text-sm">
                    View Listings
                  </a>
                </div>
              </div>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
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
                  By submitting this form I agree to{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Use
                  </a>
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm transition duration-300 hover:bg-green-700"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="border border-green-600 text-green-600 px-4 py-2 rounded text-sm transition duration-300 hover:bg-green-600 hover:text-white"
                  >
                    Call
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
