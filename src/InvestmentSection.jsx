import React from 'react';
import { FaBolt, FaFileAlt } from 'react-icons/fa'; // Importing necessary icons

function InvestmentSection() {
  return (
    <div className="grid grid-cols-12 gap-12 py-4 my-2">
      {/* Left Column: Investment Summary */}
      <div className="col-span-8">
        <h2 className="text-2xl font-semibold text-gray-600 mb-12">Investment Summary</h2>
        <ul className="list-disc space-y-3 text-black text-lg ml-10">
          <li>$4.5M+ funding raised, including $2.3M+ R&D funding from US Defense</li>
          <li>The US Air Force and Army are using our technology</li>
          <li>Beta launch of GENIE: Key to Precision & Efficiency in AI/ML Model Training</li>
          <li>Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams</li>
          <li>The current Sales Pipeline is over $16M</li>
          <li>The AI market is predicted to reach $1.07 Trillion by 2027</li>
          <li>The global Robotic market is predicted to reach $141B by 2027</li>
        </ul>

        {/* Disclaimer Section */}
        <div className="disclaimer-section text-center mx-auto mt-20 space-y-6 text-black text-sm italic">
          <p>
            OpenDeal Broker LLC charges you a two percent (2%) administrative fee on the gross principal transaction with a minimum fee of $5 and a maximum of $300. The fee is added to the total amount of your investment at checkout.
          </p>
          <p>
            Past financial results are no guarantee of future performance. <a href="#" className="text-blue-500 no-underline">Click here for important information regarding Financial Projections</a> which are not guaranteed.
          </p>
          <p>
            Investments in private companies are particularly risky and may result in total loss of invested capital.
          </p>
          <p>
            <a href="#" className="text-blue-500 no-underline">Risks of early stage investment.</a> Not an offer to buy or sell securities. This is a long-term speculative illiquid investment. Investment is not FDIC or SIPC insured.
          </p>
          <p>
            There may be other available opportunities that are similar to this investment but have different terms or risks. <a href="#" className="text-blue-500 no-underline">Read more</a>
          </p>
        </div>

        {/* Pitch Section */}
        <div className="pitch-section mt-16">
          <h3 className="text-gray-500 font-bold text-2xl mb-10">Pitch</h3>
          <h2 className="text-black text-2xl font-semibold mt-4">AvaWatz: Unlocking the Power of AI Robotics</h2>
          <p className="text-black text-[23px] mt-6">
            At AvaWatz, we aim to unlock the true potential of robotics with our trusted AI platform. Our AI empowers robots to work together like teammates in harsh, unpredictable environments, freeing humans from danger and high-risk tasks. We aim to make robots smarter and safer, boosting efficiency and keeping humans out of harm's way. Think advanced AI for robotics that tackles inspections, maintenance, and more, all delivered through our easy-to-use platform.
          </p>
        </div>
      </div>

      {/* Right Column: Deal Terms */}
      <div className="col-span-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold text-gray-600">Deal Terms</h2>
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
              <span className="text-gray-500 line-through">$4</span>
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

        {/* Documents Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-500 mb-4">Documents</h2>
          <div className="border border-gray-300 rounded-md p-4">
            <p className="text-gray-500 mb-3">
              Capital R (OpenDeal Broker LLC, CRD #291387) is hosting this Reg S securities offering by AvaWatz Company.
            </p>
            <hr className="border-b border-gray-300 my-2" />
            <p className="text-gray-400 mt-4 mb-2 font-normal">Company documents</p>
            <div className="space-y-3">
              {[
                { name: "Subscription Agreement", link: "#" },
                { name: "AvaWatz IOM Supplement #3.pdf", link: "#" },
                { name: "AvaWatz IOM Supplement #2.pdf", link: "#" },
                { name: "AvaWatz Reg S IOM Supplement #1 (05.28.24).pdf", link: "#" },
                { name: "AvaWatz Company IOM.pdf", link: "#" },
                { name: "Form CRS.pdf", link: "#" },
                { name: "Disclosures & Disclaimers.pdf", link: "#" },
                { name: "Additional Risk Disclosures.pdf", link: "#" },
              ].map((doc, idx) => (
                <a
                  href={doc.link}
                  key={idx}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-200 transition-colors duration-300 group"
                >
                  <FaFileAlt className="text-black group-hover:text-blue-500" />
                  <span className="text-black group-hover:text-blue-500">{doc.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentSection;
