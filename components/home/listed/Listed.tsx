"use client"

import { useState } from "react";

import Button from "@/components/common/buttons/button/Button";
import Card from "@/components/common/card/Card";
import FilteBy from "@/components/common/filterby/FilterBy";

import { recently } from "@/data";

const RecentListed = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <section className="pt-10 px-2.5 md:container mx-auto">
      <div className="flex md:items-center justify-between mx-auto mb-10 md:mb-11 flex-col md:flex-row">
        <h3 className="mb-5 md:mb-0 text-lg md:text-3xl font-medium text-white">Recent Listed</h3>
        <div className="w-full md:w-[436px]">
          <FilteBy setFilter={setFilter} />
        </div>
      </div>
      <div className="grid items-center justify-items-center mx-auto mb-7 md:mb-10 gap-5 sm:gap-8 grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lgMax:grid-cols-4 1xl:grid-cols-5 2xl:grid-cols-6">
        {recently.map((nft, index) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button link="listings">Trade Now</Button>
      </div>
    </section>
  );
};

export default RecentListed;
