"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import FilterBy from "@/components/common/filterby/FilterBy";
import ArrowRightGradientIcon from "@/assets/icons/gradiants/arrow-right.svg";
import TableItem from "@/components/common/table/TableItem";

import { listing } from "@/data";

const Activity = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <Fragment>
      <div className="flex items-start lg:items-center justify-between mb-6 flex-col lg:flex-row">
        <h4 className="text-base lg:text-3xl text-white mb-4 lg:mb-0">Activity</h4>
        <div className="w-full lg:w-1/3">
          <FilterBy setFilter={setFilter} />
        </div>
      </div>
      <div className="items mb-6">
        {listing.map((row, index) => (
          <TableItem key={index} row={row} />
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <Link href="/" className="flex items-center gap-2 text-gray-400">
          See full activities
          <Image
            width={16}
            height={16}
            src={ArrowRightGradientIcon}
            alt="arrow-right"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default Activity;
