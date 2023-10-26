"use client";

import { useState, useEffect, useRef } from "react";

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
      <div className="hidden lg:block">
        <TableHead />
      </div>

      {data.slice(0, 1).map((row, index) => (
        <TableItem key={index} row={row} />
      ))}
      {data.slice(0, 1).map((row, index) => (
        <TableItem key={index} row={row} compact={true}/>
      ))}
    </div>
  );
};

const ListingContent = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const { NFTSelected, setNFTSelected } = useListing();

  const [filter, setFilter] = useState<string>("");
  const [data, setData] = useState<INFTItem[]>([]);
  const [showActivity, setShowActivity] = useState<boolean>(false);
  const options = ["All", "Offers", "Bids", "Items", "Offered"];

  const [activityTab, setActivityTab] = useState(options[0]);
  const [listingData, setListingData] = useState<any>([]);

  const ref = useRef(null);

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

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute w-full h-[450px] bg-mountains"></div>
        <div className="md:container px-2.5 mx-auto relative z-30">
          <div className="flex justify-between gap-5 sm:gap-8 flex-col xl:flex-row">
            <ListingNFT
              NFTSelected={NFTSelected}
              setNFTSelected={setNFTSelected}
              showActivity={showActivity}
              toggleActivity={() => {
                setShowActivity(!showActivity);
                (ref.current as any)?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <ListingStats />
          </div>
        </div>
      </div>
      <div ref={ref} className="md:container px-2.5 mx-auto pt-14">
        {!showActivity && (
          <>
            <div className="flex md:items-center justify-between mx-auto mb-10 md:mb-11 flex-col md:flex-row">
              <h2 className="mb-5 md:mb-0 text-lg md:text-3xl font-medium text-white">
                Explore NFT’s
              </h2>

              <div className="w-full md:w-[436px]">
                <FilterBy setFilter={setFilter} />
              </div>
            </div>

            <div className="grid items-center justify-items-center mx-auto mb-7 md:mb-10 gap-5 sm:gap-8 grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lgMax:grid-cols-4 1xl:grid-cols-5 2xl:grid-cols-6">
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
            <div className="flex md:items-center justify-between mx-auto mb-10 xl:mb-11 flex-col xl:flex-row">
              <h2 className="mb-5 xl:mb-0 text-lg md:text-3xl font-medium text-white">
                Analytics Overview
              </h2>

              <div className="flex flex-col lg:flex-row gap-2.5 md:gap-10 pt-2.5 md:pl-10 lg:pl-6 md:pt-0 w-full xl:max-w-[1095px]">
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

            <div className="flex items-center w-full gap-5 mt-8 mb-5 flex-col 1xl:flex-row">
              <BarChart
                title="Listings"
                data={listingData}
                onDateChange={handleListingData}
                width={
                  windowWidth && windowWidth >= 1651
                    ? 1651
                    : windowWidth
                    ? windowWidth - 108
                    : 100
                }
                height={226}
                className="w-full"
              />

              <BarChart
                title="Sales"
                data={listingData}
                onDateChange={handleListingData}
                width={
                  windowWidth && windowWidth >= 1651
                    ? 1651
                    : windowWidth
                    ? windowWidth - 108
                    : 100
                }
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
          </>
        )}
      </div>
    </div>
  );
};

export default ListingContent;
