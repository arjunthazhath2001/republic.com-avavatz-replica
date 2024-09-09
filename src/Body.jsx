import React from 'react';

function Body() {
  return (
    <div className='grid grid-cols-12 gap-12 py-10 mx-16'>
      {/* Left Column: Title, Tags, Video */}
      <div className='col-span-8 space-y-4'>
        {/* Title */}
        <h1 className="text-4xl font-bold text-black">Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious Tasks</h1>

        {/* Tags */}
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md">SPECIAL</span>
          <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-md">AAPI FOUNDERS</span>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md">IMMIGRANT FOUNDERS</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">WOMEN FOUNDERS</span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md">SECURITY & DEFENSE</span>
        </div>

        {/* Video */}
        <div className="relative">
          <video className="w-full h-[400px] bg-black" controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Column: Stats, Blue Button */}
      <div className='col-span-4 space-y-8'>
        {/* Committed Amount */}
        <div>
          <p className="text-lg text-red-500 font-bold">SPECIAL TERMS: 52D 17H 25M LEFT</p>
          <h2 className="text-4xl font-bold">$361,384</h2>
          <p className="text-lg">Committed</p>
        </div>

        {/* Investors and Time Left */}
        <div className="space-y-2">
          <div>
            <h3 className="text-3xl font-bold">19</h3>
            <p className="text-lg">Investors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">22 days</h3>
            <p className="text-lg">Left to invest</p>
          </div>
        </div>

        {/* Blue Invest Button */}
        <button className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-md hover:bg-blue-700 transition duration-300">
          Invest in Avawatz
        </button>
      </div>
    </div>
  );
}

export default Body;
