import React from 'react';
import logo from './assets/avawatz.jpg'; // Assuming logo is in your folder

function Body() {
  return (
    <div className='grid grid-cols-12 gap-12 py-10 my-9'>
      {/* Left Column: Logo, Title, Subheading, Tags, Video */}
      <div className='col-span-8 space-y-2'>
        {/* Logo and Title */}
        <div className="flex items-baseline space-x-2">
          <img src={logo} alt="Avawatz Logo" className="w-10 h-10 border border-solid border-black border-opacity-10 rounded-md" />
          <h1 className="text-5xl font-semibold text-black">Avawatz</h1>
        </div>

        {/* Subheading */}
        <p className="text-xl text-gray-500 font-normal">
          Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious Tasks
        </p>

        {/* Tags */}
        <div className="flex space-x-2 pt-2 flex-wrap font-medium">
          <span className="border border-orange-500 text-red-600 px-2 py-0.5 text-[10px] rounded-sm">SPECIAL</span>
          <span className="bg-yellow-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">AAPI FOUNDERS</span>
          <span className="bg-orange-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">IMMIGRANT FOUNDERS</span>
          <span className="bg-blue-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">WOMEN FOUNDERS</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">SECURITY & DEFENSE</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">B2B</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">B2G</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm">ROBOTICS</span>
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
