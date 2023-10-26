"use client";

import { articleChart } from "@/data";

import BarChart from "@/components/common/charts/Charts";
import { useState } from "react";

const Charts = () => {
  const [listingData, setListingData] = useState<any>(null);
  const [volumenAndPrice, setVolumenAndPrice] = useState<any>(null);

  const handleListingData = (period: number | null) => {
    setListingData(null);

    setTimeout(() => {
      const dataChart = articleChart.filter((item) => {
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
    <div className="flex gap-8 flex-wrap md:flex-nowrap">
      <BarChart
        title="Listings"
        data={listingData}
        onDateChange={handleListingData}
        width={678}
        height={226}
        className="w-full"
      />
      <BarChart
        title="Volume and Price"
        currency="USD"
        data={listingData}
        onDateChange={handleListingData}
        width={678}
        height={226}
        className="w-full"
      />
    </div>
  );
};

export default Charts;
