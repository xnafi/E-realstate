'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TourSchedule = () => {
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [tourType, setTourType] = useState<'in-person' | 'video'>('in-person');
  const sliderRef = useRef<HTMLDivElement>(null);

  const dates = [
    { day: 'Fri', date: '07', month: 'Mar' },
    { day: 'Sat', date: '08', month: 'Mar' },
    { day: 'Sun', date: '09', month: 'Mar' },
    { day: 'Mon', date: '10', month: 'Mar' },
    { day: 'Tue', date: '11', month: 'Mar' },
    { day: 'Wed', date: '12', month: 'Mar' },
    { day: 'Thu', date: '13', month: 'Mar' },
    { day: 'Fri', date: '14', month: 'Mar' },
    { day: 'Sat', date: '15', month: 'Mar' },
    { day: 'Sun', date: '16', month: 'Mar' },
    { day: 'Mon', date: '17', month: 'Mar' },
    { day: 'Tue', date: '18', month: 'Mar' },
    { day: 'Wed', date: '19', month: 'Mar' },
    { day: 'Thu', date: '20', month: 'Mar' },
    { day: 'Fri', date: '21', month: 'Mar' },
    { day: 'Sat', date: '22', month: 'Mar' },
    { day: 'Sun', date: '23', month: 'Mar' },
    { day: 'Mon', date: '24', month: 'Mar' },
    { day: 'Tue', date: '25', month: 'Mar' },
    { day: 'Wed', date: '26', month: 'Mar' },
    { day: 'Thu', date: '27', month: 'Mar' },
    { day: 'Fri', date: '28', month: 'Mar' },
    { day: 'Sat', date: '29', month: 'Mar' },
    { day: 'Sun', date: '30', month: 'Mar' },
    { day: 'Mon', date: '31', month: 'Mar' },
    { day: 'Tue', date: '01', month: 'Apr' },
    { day: 'Wed', date: '02', month: 'Apr' },
    { day: 'Thu', date: '03', month: 'Apr' },
    { day: 'Fri', date: '04', month: 'Apr' },
    { day: 'Sat', date: '05', month: 'Apr' },
    { day: 'Sun', date: '06', month: 'Apr' },
  ];
  

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -120 : 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side Image */}
        <div className="lg:w-1/2 h-full">
          <div className="relative w-full h-full min-h-[570px] rounded-md overflow-hidden shadow">
            <Image
              src="https://i.postimg.cc/3JYmTDBN/digital-art-style-light-lamp-design.jpg"
              alt="Tour"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule A Tour</h2>

          {/* Date Slider */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <button onClick={() => scrollSlider('left')} className="text-gray-500 hover:text-blue-500">
              <FaChevronLeft />
            </button>
            <div
              ref={sliderRef}
              className="flex gap-2 overflow-x-auto no-scrollbar flex-1"
            >
              {dates.map((d, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedDate(index)}
                  className={`min-w-[80px] border text-center py-2 rounded cursor-pointer transition-all text-sm ${
                    selectedDate === index
                      ? 'bg-blue-50 border-blue-500 text-blue-600 font-medium'
                      : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  <div>{d.day}</div>
                  <div className="text-lg font-semibold">{d.date}</div>
                  <div>{d.month}</div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollSlider('right')} className="text-gray-500 hover:text-blue-500">
              <FaChevronRight />
            </button>
          </div>

          {/* Tour Type */}
          <div className="flex mb-4">
            <button
              className={`flex-1 border px-4 py-2 rounded-l text-sm ${
                tourType === 'in-person'
                  ? 'bg-blue-50 border-blue-500 text-blue-600 font-medium'
                  : 'bg-white border-gray-300 text-gray-600'
              }`}
              onClick={() => setTourType('in-person')}
            >
              In Person
            </button>
            <button
              className={`flex-1 border px-4 py-2 rounded-r text-sm ${
                tourType === 'video'
                  ? 'bg-blue-50 border-blue-500 text-blue-600 font-medium'
                  : 'bg-white border-gray-300 text-gray-600'
              }`}
              onClick={() => setTourType('video')}
            >
              Video Chat
            </button>
          </div>

          {/* Form Fields */}
          <form className="space-y-3 text-sm">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              defaultValue=""
            >
              <option value="" disabled>
                Time
              </option>
              <option value="10am">10:00 AM</option>
              <option value="12pm">12:00 PM</option>
              <option value="2pm">2:00 PM</option>
              <option value="4pm">4:00 PM</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <textarea
              placeholder="Enter your Message"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
            />
            <p className="text-xs text-gray-500">
              By submitting this form I agree to{' '}
              <span className="text-blue-600 underline cursor-pointer">Terms of Use</span>
            </p>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-semibold"
            >
              Submit a Tour Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourSchedule;
