"use client";

import Image from "next/image";


import Key from "@/assets/components/article/key.png";
import Girl from "@/assets/components/article/girl.png";
import HeartIcon from "@/assets/icons/gradiants/heart.svg";
import EyeIcon from "@/assets/icons/gradiants/eye.svg";

import NFTCard from "./NFTCard";
import PriceCard from "./PriceCard";

const NFTSection = () => {

  return (
    <div className="container mx-auto mb-12">
      <div className="flex gap-8">
        <Image
          src={Key}
          width={623}
          height={543}
          alt="key"
          className="w-full h-[543px]"
        />
        <section>
          <div className="w-full">
            <h4 className="text-3xl text-white mb-1">Chronos Key #0001</h4>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={Girl}
                width={40}
                height={40}
                alt="key"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white text-sm">Preserved by</p>
                <p className="text-purple-chronos text-sm">0xa1b2c3d4e5...</p>
              </div>
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
            </div>
          </div>
          <NFTCard />
          <PriceCard />
        </section>
      </div>
    </div>
  );
};

export default NFTSection;
