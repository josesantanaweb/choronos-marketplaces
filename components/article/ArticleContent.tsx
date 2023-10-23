"use client";

import { useState } from "react";

import Tabs from "@/components/common/tabs/Tabs";
import Atributtes from "./tabs/Atributtes";
import Offers from "./tabs/Offers";
import Bids from "./tabs/Bids";

import NFTSection from "./nft/NFTSection";

const ArticleContent = () => {
  const [selected, setSelected] = useState<string>("Atributtes");
  const options = ["Atributtes", "Offers", "Bids", "Information"];

  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute w-full h-[600px] bg-mountains"></div>
        <div className="relative z-40">
          <NFTSection />
          <div className="container mx-auto relative z-30">
            <Tabs
              options={options}
              selected={selected}
              setSelected={setSelected}
              numberTabs={4}
            />
            {selected === "Atributtes" && <Atributtes />}
            {selected === "Offers" && <Offers />}
            {selected === "Bids" && <Bids />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
