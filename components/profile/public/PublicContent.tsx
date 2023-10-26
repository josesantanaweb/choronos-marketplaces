"use client";

import { useState } from "react";

import NFTCard from "./NFTCard";
import NFTCardMobile from "./NFTCardMobile";
import All from "./tabs/All";
import Offers from "./tabs/Offers";
import Bids from "./tabs/Bids";
import Items from "./tabs/Items";
import Offered from "./tabs/Offered";
import Tabs from "@/components/common/tabs/Tabs";

const PublicContent = () => {
  const [tabActive, setTabActive] = useState<string>("All");

  const options = ["All", "Offers", "Bids", "Items", "Offered"];

  return (
    <div className="nfts">
      <NFTCard />
      <NFTCardMobile />
      <div className="mb-5">
        <Tabs selected={tabActive} setSelected={setTabActive} options={options} numberTabs={5}/>
      </div>
      {tabActive === "All" && <All />}
      {tabActive === "Offers" && <Offers />}
      {tabActive === "Bids" && <Bids />}
      {tabActive === "Items" && <Items />}
      {tabActive === "Offered" && <Offered />}
    </div>
  );
};

export default PublicContent;
