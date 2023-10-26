"use client";

import { useState } from "react";

import FilterBy from "@/components/common/filterby/FilterBy";
import SearchBar from "@/components/common/search/SearchBar";

const Cancel = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="offers">
      <div className="flex items-center gap-5 mb-5 flex-col md:flex-row">
        <div className="w-full md:w-7/12">
          <SearchBar />
        </div>
        <div className="w-full md:w-5/12">
          <FilterBy setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
};

export default Cancel;
