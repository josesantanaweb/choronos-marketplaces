"use client";

import React from "react";
import TradeItem from "./TradeItem";

import { trade } from "@/data";

const Trade = () => {
  return (
    <section className="pt-10 md:container mx-auto px-2.5">
      <h2 className="text-lg md:text-3xl leading-none font-medium text-center text-white mb-6 md:mb-10">
        How to trade
      </h2>

      <div className="flex items-center justify-center md:gap-2.5 flex-col lgMax:flex-row">
        {trade.map((item, index) => (
          <TradeItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Trade);
