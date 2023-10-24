"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Tabs from "@/components/common/tabs/Tabs";
import Card from "@/components/common/card/Card";
import ArrowRightGradientIcon from "@/assets/icons/gradiants/arrow-right.svg";

import { recently } from "@/data";

const Listings = () => {
  const [selected, setSelected] = useState<string>("All");
  const options = ["All", "Offers", "Bids"];

  return (
    <Fragment>
      <div className="w-full mb-6">
        <h4 className="mb-4 text-base lg:text-3xl text-white">Listings</h4>
        <Tabs
          options={options}
          selected={selected}
          setSelected={setSelected}
          numberTabs={3}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-6">
        {recently.map((nft, index: number) => (
          <Card nft={nft} key={index} />
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 text-sm sm:text-base"
        >
          See all tokens
          <Image
            width={16}
            height={16}
            src={ArrowRightGradientIcon}
            alt="arrow-right"
            className="w-4 h-4"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Listings;
