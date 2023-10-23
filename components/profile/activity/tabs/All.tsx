"use client";

import { useState } from "react";

import FilterBy from "@/components/common/filterby/FilterBy";
import SearchBar from "@/components/common/search/SearchBar";
import BarChart from "@/components/common/charts/Charts";

import { charts } from "@/data";

const All = () => {
  const [filter, setFilter] = useState<string>("");
  const [listingData, setListingData] = useState<any>([]);
  const [cancelSalesData, setCancelSalesData] = useState<any>([]);

  const handleListingData = (period: number | null) => {
    setListingData(null);

    setTimeout(() => {
      const dataChart = charts.listings.filter((item) => {
        const date = new Date(item[0]);
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (period === null) return true;
        return diffDays <= period;
      });

      setListingData(dataChart);
    }, 1000);
  };

  return (
    <div className="all">
      <div className="flex items-center gap-5 mb-5">
        <div className="w-7/12">
          <SearchBar />
        </div>
        <div className="w-5/12">
          <FilterBy setFilter={setFilter} />
        </div>
      </div>
      <div className="flex items-center w-full gap-5 mt-6">
        <BarChart
          title="Listings"
          data={listingData}
          onDateChange={handleListingData}
          width={556}
          height={292}
          className="w-full"
        />

        <BarChart
          title="Sales"
          data={listingData}
          onDateChange={handleListingData}
          width={556}
          height={292}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default All;
