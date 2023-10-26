"use client";

import { useState } from "react";

import FilterBy from "@/components/common/filterby/FilterBy";
import SearchBar from "@/components/common/search/SearchBar";
import Card from "@/components/common/card/Card";

import { recently } from "@/data";

const Items = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="items">
      <div className="flex items-center gap-5 mb-5 flex-col md:flex-row">
        <div className="w-full md:w-7/12">
          <SearchBar />
        </div>
        <div className="w-full md:w-5/12">
          <FilterBy setFilter={setFilter} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
        {recently.map((nft, index: number) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Items;
