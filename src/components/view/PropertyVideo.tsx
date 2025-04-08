'use client';

import React from 'react';

const PropertyVideo = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 mt-10 shadow">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Watch Our Video</h2>
      <hr className="border-gray-300 mb-6" />

      {/* Video Section */}
      <div className="w-full aspect-video rounded-md overflow-hidden shadow">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YB_RRhM3zjU"
          title="Watch Our Property Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyVideo;
