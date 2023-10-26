"use client";

import Activities from "../activities/Activities";
import Suggested from "../Suggested";

const Atributtes = () => {
  return (
    <div className="atributtes">
      <div className="bg-purple-dark-600 rounded-3xl w-full p-5 my-4">
        <li className="flex items-center justify-between py-3 px-5 border border-gray-500 rounded-xl mb-3">
          <span className="text-white text-sm md:text-base">Real Yield 02</span>
          <span className="text-white text-sm md:text-base">
            Stakers Revenue (100.00%)
          </span>
        </li>
        <li className="flex items-center justify-between py-3 px-5 border border-gray-500 rounded-xl">
          <span className="text-white text-sm md:text-base">Real Yield 02</span>
          <span className="text-white text-sm md:text-base">
            Secondary Royalties (100.00%)
          </span>
        </li>
      </div>
      <Activities />
      <Suggested />
    </div>
  );
};

export default Atributtes;
