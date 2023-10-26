"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/common/buttons/button/Button";

import PriceInfo from "./PriceInfo";

import { INFTItem } from "@/interfaces";

import USDT from "@/assets/tokens/USDT.svg";
import CHR from "@/assets/tokens/CHR.svg";

import twMerge from "@/utils/tw-merge-custom";

export interface ICardProps {
  nft: INFTItem;
  className?: string;
}

const Card = (props: ICardProps) => {
  const { nft, className = "" } = props;
  const [viewInfo, setViewInfo] = useState<boolean>(false);

  const handleMouseOver = () => setViewInfo(true);

  const handleMouseOut = () => setViewInfo(false);

  return (
    <div
      className={twMerge(
        "w-full relative overflow-hidden bg-purple-dark-800 rounded-b-lg rounded-t-15 md:rounded-3xl max-w-[180px] md:max-w-[320px] text-white",
        className
      )}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Image
        src={`/images/${nft.imagen}.png`}
        alt="nft"
        width={292}
        height={260}
        className="w-full h-[158.04px] sm:h-[280px] object-cover"
      />

      <div className="p-2.5 sm:p-4">
        <h6 className="text-xs sm:text-sm font-medium line-clamp-1">{nft.name}</h6>
        <p className="text-[10px] sm:text-sm opacity-50 mb-2.5 line-clamp-1">
          {nft.category}
        </p>
        <PriceInfo price={nft.price} />
      </div>

      <div
        className={`absolute w-full bg-purple-dark-800 left-0 bottom-0 transition-opacity p-3 ${
          viewInfo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h6 className="text-xs sm:text-sm font-medium">{nft.name}</h6>
        <p className="text-[10px] sm:text-sm opacity-50 mb-2.5">
          {nft.category}
        </p>

        <div className="hidden sm:block">
          {nft.category === "Chronos maNFT" && (
            <>
              <div className="mb-4">
                <div>
                  <h5 className="mb-2 text-xs text-white">Position</h5>
                  <div className="flex items-center gap-3">
                    <p className="flex items-center text-xs text-white">
                      <Image
                        src={CHR}
                        alt="crypto"
                        className="mr-2"
                        width={20}
                        height={20}
                      />
                      1.000,00 CHR
                    </p>
                    <p className="flex items-center text-xs text-white">
                      <Image
                        src={USDT}
                        alt="crypto"
                        className="mr-2"
                        width={20}
                        height={20}
                      />
                      $6.000,00 USDT
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h5 className="text-xs text-white">Maturity Boost</h5>
                  <p className="text-xs text-gray-400">x0,33</p>
                </div>
                <div>
                  <h5 className="text-xs text-white">Current APR</h5>
                  <p className="text-xs text-gray-400">O,00%</p>
                </div>
                <div>
                  <h5 className="text-xs text-white">Level</h5>
                  <p className="text-xs text-gray-400">01</p>
                </div>
              </div>
            </>
          )}
          {nft.category === "The Lost Keys of Chronos" && (
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h5 className="text-xs text-white">Real Yield 02</h5>
                <p className="text-xs text-gray-400">Stakers Revenue</p>
              </div>
              <div>
                <h5 className="text-xs text-white">Real Yield 02</h5>
                <p className="text-xs text-gray-400">Secondary Royalties</p>
              </div>
            </div>
          )}
          {nft.category === "Chronos veCHR" && (
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h5 className="text-xs text-white">Balance</h5>
                <p className="flex items-center text-xs text-gray-400">
                  <Image
                    src={CHR}
                    alt="crypto"
                    className="mr-1"
                    width={12}
                    height={12}
                  />
                  1.000,00 veCHR
                </p>
              </div>
              <div>
                <h5 className="text-xs text-white">Votes</h5>
                <p className="text-xs text-gray-400">0,00%</p>
              </div>
              <div>
                <h5 className="text-xs text-white">Influence</h5>
                <p className="text-xs text-gray-400">0,00%</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-2">
          <PriceInfo price={nft.price} />
        </div>
        <Button size="small" full link="article">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
