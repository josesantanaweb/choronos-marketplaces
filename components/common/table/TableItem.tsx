"use client";

import { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import BNB from "@/assets/tokens/BNB.svg";
import Girl from "@/assets/components/profile/girl.png";
import Boy from "@/assets/components/profile/boy.png";
import Key from "@/assets/components/profile/art-key.png";
import { IRow } from "@/interfaces";

export interface ITableItemProps {
  row: IRow
  compact?: boolean
}

const TableItem = (props: ITableItemProps) => {
  const { row, compact } = props;
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(!open);

  const openClass = !open ? "hidden md:grid" : "grid"

  if (compact) {
    return (
      <div className="flex md:gap-10 items-center flex-wrap lg:flex-nowrap py-2 px-3 md:px-6 bg-purple-dark-500 rounded-2xl mb-4 last:mb-0 hover:bg-purple-dark-300">
        <div className="flex justify-between items-center w-full lg:w-1/3 gap-3">
          <div className="flex items-center bg-purple-dark-700 rounded-2xl lg:w-[230px]">
            <Image
              src={Key}
              alt="crypto"
              width={56}
              height={56}
              className="rounded-xl w-14 h-14"
            />
            <div className="px-3 overflow-hidden">
              <h4 className="text-sm text-white truncate">Chronos Key #0001</h4>
              <p className="text-xs text-purple-chronos truncate">
                {row?.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={BNB}
              alt="crypto"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <div>
              <h4 className="text-sm md:text-base text-white">
                {row?.price} ETH
              </h4>
              <p className="text-xs text-gray-400">$00,000,00</p>
            </div>
          </div>
          <div className="text-white flex justify-center items-center w-8 text-lg md:hidden">
            {open ? (
              <FiChevronUp onClick={handleOpen} />
            ) : (
              <FiChevronDown onClick={handleOpen} />
            )}
          </div>
        </div>
        <div
          className={`items-center grid-cols-2 gap-3 md:grid-cols-4 w-full lg:w-2/3 mt-4 md:mt-0 ${openClass}`}
        >
          <div className="flex items-center gap-3">
            <Image
              src={Girl}
              alt="crypto"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-base text-white">Offered by</h4>
              <p className="text-xs text-purple-chronos truncate">
                0xa1b2c3d4e5454
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={Boy}
              alt="crypto"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-base text-white">Offered to</h4>
              <p className="text-xs text-purple-chronos truncate">
                0xa1b2c3d4e54645
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-white">
              {moment(row?.date, "DDMMYYYY").fromNow()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex md:gap-10 items-center flex-wrap lg:flex-nowrap py-2 px-3 md:px-6 bg-purple-dark-500 rounded-2xl mb-4 last:mb-0 hover:bg-purple-dark-300">
      <div className="flex justify-between items-center w-full lg:w-1/3">
        <div>
          <h4 className="text-sm md:text-base text-white">{row?.category}</h4>
          <p className="text-sm text-white">as fixed price</p>
        </div>
        <div className="flex items-center bg-purple-dark-700 rounded-2xl lg:w-[230px]">
          <Image
            src={Key}
            alt="crypto"
            width={56}
            height={56}
            className="rounded-xl w-14 h-14"
          />
          <div className="px-3">
            <h4 className="text-sm text-white truncate w-34">
              Chronos Key #0001
            </h4>
            <p className="text-xs text-purple-chronos truncate w-34">
              {row?.name}
            </p>
          </div>
        </div>
        <div className="text-white flex justify-center items-center w-8 text-lg md:hidden">
          {open ? (
            <FiChevronUp onClick={handleOpen} />
          ) : (
            <FiChevronDown onClick={handleOpen} />
          )}
        </div>
      </div>
      <div
        className={`items-center grid-cols-3 gap-3 md:grid-cols-4 w-full lg:w-2/3 mt-4 md:mt-0 ${
          !open ? "hidden md:grid" : "grid"
        }`}
      >
        <div className="flex items-center gap-3">
          <Image
            src={BNB}
            alt="crypto"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <div>
            <h4 className="text-sm md:text-base text-white">
              {row?.price} ETH
            </h4>
            <p className="text-xs text-gray-400">$00,000,00</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={Girl}
            alt="crypto"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <div className="overflow-hidden">
            <h4 className="text-sm md:text-base text-white">Offered by</h4>
            <p className="text-xs text-purple-chronos truncate">
              0xa1b2c3d4e5454
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={Boy}
            alt="crypto"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <div className="overflow-hidden">
            <h4 className="text-sm md:text-base text-white">Offered to</h4>
            <p className="text-xs text-purple-chronos truncate">
              0xa1b2c3d4e54645
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-sm text-white">
            {moment(row?.date, "DDMMYYYY").fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
