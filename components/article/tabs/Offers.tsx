"use client";

import { useState } from "react";
import Image from "next/image";

import Activities from "../activities/Activities";
import Suggested from "../Suggested";
import FilterBy from "@/components/common/filterby/FilterBy";
import OfferItem from "@/components/common/offers-item/OfferItem";

import Currency from "@/assets/icons/gradiants/currency.svg"

const Offers = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="offers">
      <div className="bg-purple-dark-600 rounded-3xl w-full p-5 my-4">
        <div className="flex justify-between items-center px-5 mb-6">
          <h5 className="text-white text-lg">All Offers</h5>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">Top Offer</p>
            <p className="text-sm text-white flex gap-1">
              <Image src={Currency} alt="currency" width={15} height={15} className="w-5 h-5"/>
              4,5065
            </p>
            <div className="w-[400px] flex items-center">
              <FilterBy setFilter={setFilter} />
            </div>
          </div>
        </div>
        <OfferItem />
      </div>
      <Activities />
      <Suggested />
    </div>
  );
};

export default Offers;
