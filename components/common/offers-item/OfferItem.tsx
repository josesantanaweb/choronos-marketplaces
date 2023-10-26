"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Button from "@/components/common/buttons/button/Button";

import BNB from "@/assets/tokens/BNB.svg";
import Girl from "@/assets/components/profile/girl.png";

const OfferItem = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  const openClass = !open ? "hidden" : "flex";

  return (
    <div className="flex items-center justify-between bg-opacity-50 bg-purple-dark-200 rounded-3xl px-4 py-3 mb-4 flex-wrap">
      <div className="flex items-center gap-3">
        <Image
          width={45}
          height={45}
          className="w-8 h-8 md:w-12 md:h-12"
          alt="usdt"
          src={BNB}
        />
        <div className="flex flex-col">
          <h5 className="text-base md:text-lg text-white">1,36 ETH</h5>
          <p className="text-sm text-gray-400">($8,678.99)</p>
        </div>
      </div>

      <div className="items-center gap-2 flex">
        <Image
          src={Girl}
          alt="crypto"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <div className="overflow-hidden">
          <h4 className="text-base text-white">Offered by</h4>
          <p className="text-xs text-purple-chronos truncate">
            0xa1b2c3d4e5a12
          </p>
        </div>
      </div>

      <div className="text-white flex justify-center items-center w-8 text-lg md:hidden">
        {open ? (
          <FiChevronUp onClick={handleOpen} />
        ) : (
          <FiChevronDown onClick={handleOpen} />
        )}
      </div>

      <div
        className={`gap-2 md:gap-10 flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 w-full md:w-auto flex ${openClass}`}
      >
        <p className="text-white text-sm">Expiry: in 5 days</p>
        <div className="items-center gap-2 hidden md:flex">
          <Image
            src={Girl}
            alt="crypto"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <div className="overflow-hidden">
            <h4 className="text-base text-white">Offered by</h4>
            <p className="text-xs text-purple-chronos truncate">
              0xa1b2c3d4e5123132
            </p>
          </div>
        </div>
        <Button full>Accept the Offer</Button>
      </div>
    </div>
  );
};

export default OfferItem;
