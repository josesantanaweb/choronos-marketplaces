"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/common/buttons/button/Button";

import BNB from "@/assets/tokens/BNB.svg";
import Girl from "@/assets/components/profile/girl.png";

const OfferItem = () => {
  return (
    <div className="flex items-center justify-between bg-opacity-50 bg-purple-dark-200 rounded-3xl px-4 py-3 mb-4">
      <div className="flex items-center gap-3">
        <Image
          width={45}
          height={45}
          className="w-12 h-12"
          alt="usdt"
          src={BNB}
        />
        <div className="flex flex-col">
          <h5 className="text-lg text-white">1,36 ETH</h5>
          <p className="text-sm text-gray-400">($8,678.99)</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <p className="text-white text-sm">Expiry: in 5 days</p>
        <div className="flex items-center gap-5">
          <Image
            src={Girl}
            alt="crypto"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <div>
            <h4 className="text-base text-white">Offered by</h4>
            <p className="text-xs text-purple-chronos">0xa1b2c3d4e5...</p>
          </div>
        </div>
        <Button>Accept the Offer</Button>
      </div>
    </div>
  );
};

export default OfferItem;
