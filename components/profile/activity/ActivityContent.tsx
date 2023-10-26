"use client";

import React, { useState } from "react";

import All from "./tabs/All";
import Offers from "./tabs/Offers";
import Bids from "./tabs/Bids";
import Cancel from "./tabs/Cancel";
import Listing from "./tabs/Listing";
import Tabs from "@/components/common/tabs/Tabs";

import { useProfile } from "@/hooks/useProfile";

import { bilds, cancel, offers, listing } from "@/data";

import TableItem from "@/components/common/table/TableItem";
import TableHead from "@/components/common/table/TableHead";

const ActivityContent = () => {
  const { activityTab, setActivityTab } = useProfile();

  const options = ["All", "Offers", "Bids", "Cancel", "Listing"];

  const TabsContent: Record<any, React.ReactElement> = {
    All: <All />,
    Offers: <Offers />,
    Bids: <Bids />,
    Cancel: <Cancel />,
    Listing: <Listing />,
  };

  const TabsData: any = {
    All: offers,
    Offers: offers,
    Bids: bilds,
    Cancel: cancel,
    Listing: listing,
  };

  return (
    <>
      <div className="mt-6 w-full md:w-[73%]">
        <Tabs
          numberTabs={5}
          selected={activityTab}
          setSelected={setActivityTab}
          options={options}
          className="mb-5"
        />

        {TabsContent[activityTab]}
      </div>
      <div className="w-full my-6">
        <h3 className="text-white text-base md:text-xl mb-4">Activities</h3>
        <TableHead />
        {TabsData[activityTab].map((row: any, index: number) => (
          <TableItem key={index} row={row} />
        ))}
      </div>
    </>
  );
};

export default ActivityContent;
