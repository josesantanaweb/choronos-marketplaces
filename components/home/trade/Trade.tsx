"use client";

import React from "react";
import TradeItem from "./TradeItem";

import { trade } from "@/data";

const Trade = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl leading-none font-medium text-center text-white mb-10">
        How to trade
      </h2>
      <div className="flex items-center justify-center [&>:not(:last-child)]:mr-10 pt-12">
        {trade.map((item, index) => (
          <TradeItem item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Trade);
