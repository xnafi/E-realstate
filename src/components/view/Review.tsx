"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const sortOptions = [
  "Default Order",
  "Date (Old to New)",
  "Date (New to Old)",
  "Ratings (High to Low)",
  "Ratings (Low to High)",
];

const MySwal = withReactContent(Swal);

const Review = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, title, rating, review });

    // Reset form
    setEmail("");
    setTitle("");
    setRating("");
    setReview("");

    // Show success popup
    MySwal.fire({
      icon: "success",
      title: "Review Submitted",
      text: "Thank you for your feedback!",
      confirmButtonColor: "#16a34a",
    });
  };

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg sm:text-xl font-medium text-gray-800">
            0 Review
          </h3>

          <div className="flex items-center gap-3 text-sm relative">
            <button
              type="button"
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
            >
              Sort by:
              <span className="font-medium text-gray-800">{sortBy}</span>
              <FaChevronDown className="text-xs" />
            </button>

            {showSortOptions && (
              <ul className="absolute z-10 top-full mt-1 right-20 bg-white border border-gray-200 rounded shadow w-56">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        setSortBy(option);
                        setShowSortOptions(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        sortBy === option
                          ? "font-medium text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded transition">
              Leave a Review
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded shadow p-6 sm:p-8">
          <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-6">
            Leave A Review
          </h4>
          <hr className="mb-6" />

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block font-medium text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Title & Rating */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block font-medium text-sm text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter a title"
                  className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium text-sm text-gray-700 mb-1">
                  Rating
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full border rounded px-4 py-2 text-sm appearance-none text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Review */}
            <div>
              <label className="block font-medium text-sm text-gray-700 mb-1">
                Review
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write a review"
                className="w-full border rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-2 rounded transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
