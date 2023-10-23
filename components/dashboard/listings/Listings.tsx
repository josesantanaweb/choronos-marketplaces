"use client";

import { useState } from "react";
import Tabs from "@/components/common/tabs/Tabs";
import FilterBy from "@/components/common/filterby/FilterBy";
import Card from "@/components/common/card/Card";
import Offers from "./Offers";

import { recently } from "@/data";

const Listings = () => {
  const [selected, setSelected] = useState<string>("All");
  const [filter, setFilter] = useState<string>("");
  const options = ["All", "Offers", "Bids", "Items"];
  return (
    <div className="listings">
      <Offers />
      <h4 className="mb-4 text-2xl text-white">Listings</h4>
      <div className="flex items-center gap-3 mb-6">
        <Tabs options={options} selected={selected} setSelected={setSelected} numberTabs={4}/>
        <FilterBy setFilter={setFilter} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {recently.map((nft, index: number) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
