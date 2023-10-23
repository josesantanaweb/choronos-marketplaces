"use client";

import { useState, useEffect } from "react";

import Card from "@/components/common/card/Card";
import Loading from "@/components/common/loading/Loading";
import FilterBy from "@/components/common/filterby/FilterBy";
import ListingStats from "@/components/listing/ListingStats";
import ListingDropdown from "@/components/listing/ListingDropdown";
import ListingNFT from "@/components/listing/ListingNFT";
import Stat from "@/components/home/stats/Stat";
import Tabs from "@/components/common/tabs/Tabs";
import BarChart from "@/components/common/charts/Charts";
import TableItem from "@/components/common/table/TableItem";
import TableHead from "@/components/common/table/TableHead";

import { BiUserCircle } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import { PiDatabase } from "react-icons/pi";

import { formatNumber } from "@/utils/format-number";

import { INFTItem } from "@/interfaces";

import { useListing } from "@/hooks/useListing";

import {
  chrNFTItems,
  maNFTItems,
  veCHRItems,
  charts,
  bilds,
  cancel,
  offers,
  listing,
} from "@/data";

const ActivityTable = (props: { data: any[] }) => {
  const { data } = props;

  return (
    <div className="w-full mt-12">
      <h3 className="text-white text-xl mb-4">Activities</h3>
      <TableHead />
      {data.map((row, index) => (
        <TableItem key={index} row={row} />
      ))}
    </div>
  );
};

const ListingContent = () => {
  const { NFTSelected, setNFTSelected } = useListing();

  const [filter, setFilter] = useState<string>("");
  const [data, setData] = useState<INFTItem[]>([]);
  const [showActivity, setShowActivity] = useState<boolean>(false);
  const options = ["All", "Offers", "Bids", "Items", "Offered"];

  const [activityTab, setActivityTab] = useState(options[0]);
  const [listingData, setListingData] = useState<any>([]);

  const owners = 2345;
  const listings = 20;
  const traded = 92.35;
  const stats = {
    last_week_sales: 13321.546,
    total_trade: 21123.354,
    list_trade: 123201.12,
  };

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
  useEffect(() => {
    if (NFTSelected === "chrNFT") {
      setData(chrNFTItems);
    }
    if (NFTSelected === "maNFT") {
      setData(maNFTItems);
    }
    if (NFTSelected === "veCHR") {
      setData(veCHRItems);
    }
  }, [NFTSelected]);

  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute w-full h-[450px] bg-mountains"></div>
        <div className="container mx-auto relative z-30">
          <div className="flex justify-between gap-8 mb-20">
            <ListingNFT
              NFTSelected={NFTSelected}
              setNFTSelected={setNFTSelected}
              showActivity={showActivity}
              toggleActivity={() => setShowActivity(!showActivity)}
            />
            <ListingStats />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {!showActivity && (
          <>
            <div className="flex items-center justify-between mb-10">
              <h6 className="mb-4 text-3xl text-white">Explore NFT’s</h6>
              <div className="w-2/5">
                <FilterBy setFilter={setFilter} />
              </div>
            </div>
            <div className="grid items-center grid-cols-5 gap-8">
              {data.map((nft, index) => (
                <Card nft={nft} key={index} />
              ))}
            </div>
            <div className="flex items-center justify-center my-8">
              <Loading />
            </div>
          </>
        )}
        {showActivity && (
          <>
            <div className="relative container mx-auto z-10">
              <div className="flex items-center mx-auto mb-6 gap-5">
                <h3 className="text-2xl leading-none mr-auto text-white">Analytics Overview</h3>

                <div className="flex gap-10 py-1 w-full max-w-[1095px]">
                  <Stat
                    title="Last Week Sales"
                    text={formatNumber(stats.last_week_sales, {
                      currency: "ETH",
                    })}
                    icon="jet"
                  />
                  <Stat
                    title="Total Trade"
                    text={formatNumber(stats.total_trade, { currency: "ETH" })}
                    icon="arrows"
                  />
                  <Stat
                    title="List Trade"
                    text={formatNumber(stats.list_trade) + " veCHRs"}
                    icon="hourglass"
                  />
                </div>
              </div>

              <Tabs
                numberTabs={5}
                selected={activityTab}
                setSelected={setActivityTab}
                options={options}
              />

              <div className="flex items-center w-full gap-5 mt-8 mb-5">
                <BarChart
                  title="Listings"
                  data={listingData}
                  onDateChange={handleListingData}
                  width={683}
                  height={226}
                  className="w-full"
                />

                <BarChart
                  title="Sales"
                  data={listingData}
                  onDateChange={handleListingData}
                  width={683}
                  height={226}
                  className="w-full"
                />
              </div>

              <BarChart
                title="Volume and Price"
                data={listingData}
                onDateChange={handleListingData}
                width={1478}
                height={269}
                className="w-full"
              />

              <ActivityTable data={listing} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListingContent;
