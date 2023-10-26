"use client";

import Image from "next/image";

import BNB from "@/assets/tokens/BNB.svg";

import Button from "@/components/common/buttons/button/Button";
import PayWithCHR from "@/components/common/pay-chr/PayCHR";

const PriceCard = () => {
  return (
    <div className="flex items-center rounded-3xl relative bg-purple-dark-600 mb-6 md:mb-0 bg-opacity-60 px-8 py-6 justify-between flex-col md:flex-row">
      <div className="mb-4 md:mb-0">
        <h4 className="text-lg md:text-2xl text-white mb-2">Actual Price</h4>
        <div className="relative z-30 flex items-center gap-4 mb-3">
          <Image
            src={BNB}
            alt="crypto"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className="w-full">
            <h3 className="text-lg md:text-xl text-white">5,56 ETH</h3>
            <p className="text-sm text-gray-400">($8,678.99)</p>
          </div>
        </div>
        <p className="text-xs text-gray-400">
          This sell expires in 00 Days 00 Hours 00 Minuts 00 Seconds
        </p>
      </div>
      <div className="w-[270px] flex flex-col justify-center items-center">
        <Button full className="mb-3">
          Buy Now for 5.56 ETH
        </Button>
        <Button full variant="secondary" className="mb-4">
          Make other offert
        </Button>
        <PayWithCHR />
      </div>
    </div>
  );
};

export default PriceCard;
