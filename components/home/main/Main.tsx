"use client";

import React from "react";
import Button from "@/components/common/buttons/button/Button";
import Stats from "@/components/home/stats/Stats";

const Main = () => {
  return (
    <main className="w-full relative bg-mountains bg-key overflow-hidden before:hidden lg:before:block">
      <div className="md:container px-2.5 mx-auto relative z-10 flex flex-col justify-center lg:h-full m-auto pb-6 md:pb-0">
        <div className="text-center lg:text-left mt-[70%] mb-14 lg:my-32">
          <h5 className="mb-px md:mb-4 text-lg md:text-4xl text-white">
            Chronos is awake
          </h5>
          <h1 className="mb-1.5 md:mb-3 text-[22px] md:text-5xl text-white font-medium">
            The time to trade has become
          </h1>
          <p className="mb-2 md:mb-4 text-xs md:text-2xl text-white opacity-50 font-medium">
            Sell, buy or trade your chrNFTs, veCHR and maNFTs
          </p>
          <Button
            link="listings"
            className="m-auto lg:m-0"
          >
            Trade Now
          </Button>
        </div>
        <div className="relative bg-mountains before:left-1/2 before:-translate-x-1/2 before:w-[802.667px] before:h-[311.684px] md:before:w-screen">
          <Stats />
        </div>
      </div>
    </main>
  );
};

export default React.memo(Main);
