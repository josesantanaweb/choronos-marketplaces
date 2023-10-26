"use client";

import { useState } from "react";

import Tabs from "@/components/common/tabs/Tabs";
import FilterBy from "@/components/common/filterby/FilterBy";
import Activity from "./Activity";
import Charts from "./Charts";

import { offers } from "@/data";

const Activities = () => {
  const [selected, setSelected] = useState<string>("Activities");
  const options = ["Activities", "Charts"];
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="bg-purple-dark-900 mb-10 py-6">
      <div className="md:container mx-auto relative px-2.5 md:px-0 z-30">
        <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Tabs
              options={options}
              selected={selected}
              setSelected={setSelected}
              numberTabs={2}
            />
          </div>
          <div className="w-full md:w-1/3">
            <FilterBy setFilter={setFilter} />
          </div>
        </div>
        {selected === "Activities" && <Activity />}
        {selected === "Charts" && <Charts />}
      </div>
    </div>
  );
};

export default Activities;
