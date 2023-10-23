"use client";

import Image from "next/image";

import Button from "@/components/common/buttons/button/Button";
import PayCHR from "@/components/common/pay-chr/PayCHR";

import Art from "@/assets/components/profile/art-key.png";
import BNB from "@/assets/tokens/BNB.svg";
import HeartIcon from "@/assets/icons/gradiants/heart.svg";
import EyeIcon from "@/assets/icons/gradiants/eye.svg";
import FlameIcon from "@/assets/icons/gradiants/flame.svg";

const NFTCard = () => {
  return (
    <div className="flex items-center gap-5 overflow-hidden rounded-3xl mb-7 bg-purple-dark-900 h-52">
      <Image src={Art} alt="art" width={200} height={200} className="h-full" />
      <div className="flex items-center justify-between w-full p-4">
        <div className="w-2/3">
          <h6 className="flex items-center gap-4 mb-2 text-white">
            <Image src={FlameIcon} alt="art" width={18} height={18} />
            Highlighted by User
          </h6>
          <h4 className="mb-5 text-xl text-white">Chronos Key #1203043</h4>
          <div className="flex items-center gap-3 mb-6">
            <Image src={BNB} alt="art" width={45} height={45} />
            <div className="cas">
              <h6 className="text-lg text-white">18,526 ETH</h6>
              <p className="text-sm text-gray-400">($81,678.99)</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            This sell expires in 00 Days 00 Hours 00 Minuts 00 Seconds
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/3">
          <div className="flex items-center justify-end w-full gap-4 mb-4">
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <Image src={HeartIcon} alt="art" width={24} height={24} />
              325
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <Image src={EyeIcon} alt="art" width={24} height={24} />
              555
            </p>
          </div>
          <Button full>Buy Now</Button>
          <PayCHR onClick={() => ({})} />
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
