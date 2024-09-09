import React from 'react';
import blue from "./assets/blue-image.png";

function ImageAndBonus() {
  return (
    <div className="grid grid-cols-12 gap-8 mt-2">
      {/* Image Section */}
      <div className="col-span-8">
        <img src={blue} alt="Blue Image" className="w-full" />

        {/* New Section: Transforming Robots */}
        <div className="mt-5">
          <h2 className="font-bold text-2xl mb-3 text-black">
            Transforming Robots Into Cooperative Teams with Trusted AI
          </h2>
          <ul className="mt-3 text-[23px] list-disc list-inside space-y-2 text-pretty">
            <li>
              Share information and make joint decisions: Robots analyze <span className='ml-8'>data,
              assess situations, and adapt their actions like a
              cohesive</span> <span className='ml-8'>unit.</span> 
            </li>
            <li>
              Handle the hard stuff: From hazardous inspections to disaster
            </li>
          </ul>
          <p className="mt-1 ml-8 text-[25px]">
            ...{' '}
            <a href="#" className="text-blue-600 no-underline">
              Read more
            </a>
          </p>

          {/* Leadership Section */}
          <div className="mt-10">
            <h3 className="font-semibold text-[25px] text-gray-500">Leadership</h3>
            <h2 className="font-semibold text-2xl text-black mt-10">
              Meet the Minds Behind AvaWatz: A Team Built for AI Robotics Brilliance
            </h2>
          </div>
        </div>
      </div>

      {/* Bonus Perks Section */}
      <div className="col-span-4">
        <h3 className="text-gray-500 text-3xl font-bold mb-2">Bonus perks</h3>
        <p className="text-gray-500 mb-2">
          In addition to your shares, you'll receive perks for investing in AvaWatz.
        </p>
        <div className="border border-gray-300 pb-3 pt-3 rounded-md">
          {[
            { amount: "$20,000", bonus: "5% Additional Bonus Share" },
            { amount: "$50,000", bonus: "10% Additional Bonus Shares" },
            { amount: "$100,000", bonus: "15% Additional Bonus Shares" },
            { amount: "$250,000", bonus: "25% Additional Bonus Shares" },
          ].map((perk, idx) => (
            <div
              key={idx}
              className="hover:bg-gray-100 w-full rounded-md px-4 transition-colors duration-300 group"
            >
              <p className="text-gray-600 font-medium">Invest</p>
              <h4 className="text-3xl text-blue-600 font-sans font-bold group-hover:text-blue-700">
                {perk.amount}
              </h4>
              <p className="text-gray-600 font-medium mt-2">Receive</p>
              <ul className="list-disc ml-5 mt-2">
                <li className="text-gray-600">{perk.bonus}</li>
              </ul>
              <a href="#">
                <button className="bg-white border border-gray-300 text-black w-full py-2 mt-3 font-semibold rounded-md group-hover:border-blue-500 group-hover:text-blue-500">
                  Invest {perk.amount}
                </button>
              </a>
              {idx < 3 && <hr className="border-t border-gray-200 mt-3" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageAndBonus;
