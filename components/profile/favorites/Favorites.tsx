"use client";

import { useState } from "react";

import FilterBy from "@/components/common/filterby/FilterBy";
import SearchBar from "@/components/common/search/SearchBar";
import Card from "@/components/common/card/Card";

import { recently } from "@/data";

const Favorites = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="offers">
      <h4 className="text-white text-2xl mb-4">User Favorites</h4>
      <div className="flex items-center gap-5 mb-5">
        <div className="w-7/12">
          <SearchBar />
        </div>
        <div className="w-5/12">
          <FilterBy setFilter={setFilter} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {recently.map((nft, index: number) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
