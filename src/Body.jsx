import React, { useState, useEffect } from 'react';
import logo from './assets/avawatz.jpg'; // Assuming logo is in your folder
import { FaBolt, FaStar, FaShareAlt } from 'react-icons/fa'; // Importing necessary icons
import video from './assets/avawatz-video.mp4'; // Path to the video
import thumbnail from './assets/thumbnail.jpg'; // Path to the thumbnail
import InvestmentSection from './InvestmentSection';

function Body() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const countdown = () => {
      const deadline = new Date('2024-11-01'); // Set your deadline here
      const now = new Date();
      const timeDiff = deadline - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}D ${hours}H ${minutes}M`);
    };

    countdown(); // Call once initially
    const interval = setInterval(countdown, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
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
        <div className="flex space-x-1 pb-2 pt-2 flex-wrap font-medium">
          {/* SPECIAL Tag with Thunder Icon and Hyperlink */}
          <a href="#" className="border border-orange-500 text-red-600 flex items-center px-2 py-0.5 text-[10px] rounded-sm hover:text-red-700 transition duration-300">
            <FaBolt className="text-orange-500 mr-1" /> {/* Thunderbolt Icon */}
            SPECIAL
          </a>
          <a href="#" className="bg-yellow-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">AAPI FOUNDERS</a>
          <a href="#" className="bg-orange-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">IMMIGRANT FOUNDERS</a>
          <a href="#" className="bg-blue-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">WOMEN FOUNDERS</a>
          <a href="#" className="bg-gray-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">SECURITY & DEFENSE</a>
          <a href="#" className="bg-gray-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">B2B</a>
          <a href="#" className="bg-gray-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">B2G</a>
          <a href="#" className="bg-gray-200 text-gray-500 px-2 py-0.5 text-[10px] rounded-sm hover:text-gray-700 transition duration-300">ROBOTICS</a>
        </div>

        {/* Video with Thumbnail and Play Button */}
        <div className="relative">
          <video className="h-[400px] bg-black" controls poster={thumbnail}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Right Column: Stats, Blue Button */}
      <div className='col-span-4 space-y-6 mt-2'>
        {/* Star and Share Icons */}
        <div className="flex space-x-4 justify-end">
          <button className="text-gray-400 hover:text-gray-600">
            <FaStar className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <FaShareAlt className="w-6 h-6" />
          </button>
        </div>

        {/* Special Terms with Bolt Icon - Separate from $ Committed */}
        <div>
          <div className="flex mt-[102px] items-center space-x-1 text-red-500 font-extrabold text-[10px] bg-gray-200 rounded-sm w-[200px] h-5">
            <FaBolt className="text-red-500 ml-1" />
            <p>SPECIAL TERMS: {timeLeft} LEFT</p>
          </div>
        </div>

        {/* Committed Amount with Divider */}
        <div className="space-y-1">
          <h2 className="text-4xl font-semibold">$361,384</h2>
          <p className="text-lg">Committed</p>
          <hr className="border-t border-gray-300 my-2" />
        </div>

        {/* Investors with Divider */}
        <div className="space-y-1">
          <div>
            <h3 className="text-4xl font-semibold">19</h3>
            <p className="text-lg">Investors</p>
          </div>
          <hr className="border-t border-gray-300 my-2" />
        </div>

        {/* Time Left with Divider */}
        <div className="space-y-1">
          <div>
            <h3 className="text-4xl font-semibold">22 days</h3>
            <p className="text-lg">Left to invest</p>
          </div>
          <hr className="border-t border-gray-300 my-2" />
        </div>

        {/* Blue Invest Button */}
        <div className="space-y-1 flex flex-col items-center justify-center">
          <button className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-md hover:bg-blue-700 transition duration-300">
            Invest in Avawatz
          </button>
          <span className="text-center text-gray-500 text-sm">
            <span className='font-bold'>$2,500</span> minimum investment · <a href="#" className="text-blue-500 no-underline">Form CRS</a>
          </span>
        </div>
      </div>
    </div>

    <div className="flex gap-8 font-bold">
      <button className="text-blue-600 text-xl">Pitch</button>
      <button className="text-gray-400 text-xl">Updates</button>
    </div>
    <hr className="border-t border-gray-300 mt-4 mb-6" />

    <InvestmentSection/>
    </>
  );
}

export default Body;
