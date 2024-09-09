import React from 'react';
import { FaBolt } from 'react-icons/fa'; // Importing necessary icons

function InvestmentSection() {
  return (
    <div className='grid grid-cols-12 gap-12 py-10 my-9'>
      {/* Left Column: Investment Summary */}
      <div className='col-span-8'>
        {/* Investment Summary Title */}
        <h2 className="text-2xl font-semibold text-gray-500 mb-12">Investment summary</h2>
        <ul className="list-disc space-y-3 text-black text-lg ml-10">
          <li>$4.5M+ funding raised, including $2.3M+ R&D funding from US Defense</li>
          <li>The US Air Force and Army are using our technology</li>
          <li>Beta launch of GENIE: Key to Precision & Efficiency in AI/ML Model Training</li>
          <li>Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams</li>
          <li>The current Sales Pipeline is over $16M</li>
          <li>The AI market is predicted to reach $1.07 Trillion by 2027</li>
          <li>The global Robotic market is predicted to reach $141B by 2027</li>
        </ul>
      </div>

      {/* Right Column: Deal Terms */}
      <div className='col-span-4'>
        {/* Deal Terms Title with Special Button */}
        <div className="flex items-center space-x-20 mb-12">
          <h2 className="text-2xl font-semibold text-gray-500">Deal Terms</h2>
          <button>
          <div className="flex items-center px-3 py-0.5 text-[12px] bg-white text-orange-500 border border-orange-500 rounded-md font-semibold">
            <FaBolt className="mr-1" /> SPECIAL
          </div>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Funds Raised</p>
            <p className="font-semibold">$163,247</p>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between">
            <p className="text-gray-600">Allocation</p>
            <p className="font-semibold">$5M</p>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between">
            <p className="text-gray-600">Valuation</p>
            <p className="font-semibold">$80.85M</p>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Share Price</p>
            <div className="flex items-center space-x-1 font-semibold">
              <FaBolt className="text-orange-500" /> 
              <span className="text-orange-500">$3</span>
              <span className="text-gray-500 line-through">$4</span> {/* Strikethrough for $4 */}
            </div>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between">
            <p className="text-gray-600">Security Type</p>
            <p className="font-semibold">Preferred Shares</p>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between">
            <p className="text-gray-600">Minimum Investment</p>
            <p className="font-semibold">$2,500</p>
          </div>
          <hr className="border-t border-gray-200" />
          
          <div className="flex justify-between">
            <p className="text-gray-600">Deadline</p>
            <p className="font-semibold">October 1, 2024</p>
          </div>
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default InvestmentSection;
