"use client";
import { useState } from "react";
import Image from "next/image";
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";


import Girl from "@/assets/components/article/girl.png";
import HeartIcon from "@/assets/icons/gradiants/heart.svg";
import EyeIcon from "@/assets/icons/gradiants/eye.svg";

import NFTCard from "./NFTCard";
import PriceCard from "./PriceCard";

const NFTSection = () => {
  const [NFTSelected, setNFTSelected] = useState<string>("chrNFT");
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleMuted = () => setIsMuted(!isMuted)

  return (
    <div className="md:container mx-auto mb-6 md:mb-12 px-2.5 md:px-0">
      <div className="flex gap-8 flex-wrap md:flex-nowrap">
        {NFTSelected === "chrNFT" ? (
          <div className="relative w-full md:w-1/3">
            <video
              src="/videos/key.mp4"
              loop
              autoPlay
              width={623}
              height={543}
              muted={isMuted}
              className="h-full w-full rounded-3xl object-cover"
            ></video>
            <span
              className="absolute bottom-4 right-4 text-white z-30 cursor-pointer text-xl"
              onClick={handleMuted}
            >
              {!isMuted ? <BiSolidVolumeFull /> : <BiSolidVolumeMute />}
            </span>
          </div>
        ) : (
          <Image
            src="/images/nft-2.png"
            width={623}
            height={543}
            alt="key"
            className="h-[179px] md:h-[545px] object-cover rounded-3xl w-full md:w-1/3"
          />
        )}
        <section className="w-full">
          <div className="w-full">
            <h4 className="text-lg md:text-3xl text-white mb-1">
              Chronos Key #0001
            </h4>
            <div className="flex items-center gap-2 mb-6 justify-between">
              <Image
                src={Girl}
                width={40}
                height={40}
                alt="key"
                className="w-10 h-10 rounded-full"
              />
              <div className="w-[180px] md:w-auto">
                <p className="text-white text-sm">Preserved by</p>
                <p className="text-purple-chronos text-sm">0xa1b2c3d4e5...</p>
              </div>
              <div className="flex items-center justify-start  md:justify-end md:w-full gap-4 mb-4">
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
