"use client";

import { useState } from "react";

import Card from "@/components/common/card/Card";
import Loading from "@/components/common/loading/Loading";
import FilteBy from "@/components/common/filterby/FilterBy";

import { recently } from "@/data";

const SearchContent = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="container mx-auto py-14">
      <h3 className="mb-4 text-3xl text-gray-400">Search Results for</h3>
      <div className="flex items-center justify-between mb-10">
        <h6 className="mb-4 text-3xl text-white">Chronos veCHR</h6>
        <FilteBy setFilter={setFilter} />
      </div>
      <div className="grid items-center grid-cols-5 gap-8">
        {recently.map((nft, index) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Loading />
      </div>
    </div>
  );
};

export default SearchContent;
