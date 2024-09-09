import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import red from './assets/red-matte.png';
import logo from './assets/republic-logo.png';
import globeIcon from './assets/globe-icon.png';  // Assuming you have an icon for the globe

function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='min-w-full flex flex-col'>
      {/* First div with background image and overlayed text */}
      <div className='relative h-[60px] cursor-pointer flex items-center justify-center'>
        <img src={red} className="w-full h-full object-cover" alt="Red background" />
        {/* Flexbox container with centered NEW button and text */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex items-center space-x-2'>
            <button className='bg-blue-700 w-10 h-5 mt-1 rounded-sm text-[11px] text-center font-semibold text-white mr-[6px]'>
              NEW
            </button>
            <p className='text-[16px] font-normal text-white'>
              Put your name in the credits. Introducing film investing.
            </p>
          </div>
        </div>

        {/* Right aligned button */}
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
          <button className='bg-transparent w-[190px] h-[34px] border-opacity-50 border border-white rounded-sm text-[14px] text-center font-semibold text-white transform transition hover:border-opacity-100'>
            Lights, camera, invest!
          </button>
        </div>
      </div>

      {/* Second main navbar div */}
      <nav className='bg-white border flex flex-row items-center justify-between border-solid border-black border-opacity-10 h-20 px-16'>
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <img src={logo} className='w-[160px]' alt="Republic Logo" />

          {/* Links for Investors, Businesses */}
          <div className="flex items-center space-x-10">
            <a className="text-black text-[17px] hover:text-gray-600" href="#">Investors</a>
            <a className="text-black text-[17px] hover:text-gray-600" href="#">Businesses</a>

            {/* Search bar */}
            <div className="relative">
              <input 
                type="text" 
                className="w-[200px] h-10 pl-10 pr-4 bg-gray-100 text-[16px] rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400" 
                placeholder="Search" 
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32" 
                width="18" 
                height="18" 
                strokeWidth="3" 
                stroke="currentcolor" 
                fill="none" 
                aria-hidden="true"
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Globe icon and Links */}
        <div className="flex items-center space-x-6 pr-6">
          {/* Globe icon with US */}
          <div className="relative">
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition-colors duration-200" 
              onClick={handleDropdownToggle}
            >
              <img src={globeIcon} className="w-6 h-6" alt="Globe Icon" />
              <span className="text-black text-[17px] font-semibold">US</span>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <p className="block px-4 py-2 text-sm text-gray-700">Region preference</p>
                    <p className="block px-4 py-2 text-sm text-gray-500">You are viewing the US site</p>
                    <hr />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Global</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">US</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Europe</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Login and Sign up */}
          <a className="text-black text-[17px] font-semibold hover:text-gray-600" href="#">Log in</a>
          <a className="text-black text-[17px] font-semibold hover:text-gray-600" href="#">Sign up</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
