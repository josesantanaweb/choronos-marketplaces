"use client";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineBolt } from "react-icons/hi2";
import { MdGavel } from "react-icons/md";
import { IDealItem } from "@/interfaces";

import BNB from "@/assets/tokens/BNB.svg";

export interface IDealProps {
  deal: IDealItem;
}

const Deal = (props: IDealProps) => {
  const { deal } = props;

  return (
    <Link
      href="/"
      className="group flex items-center gap-10 px-3 p-2.5 lg:p-5 bg-purple-dark-600 rounded-2xl max-w-[410px] overflow-hidden relative after-gradient-purple-100-on-hover hover:after:opacity-50"
    >
      <div className="z-30 flex items-center gap-2.5 lg:gap-5 group">
        <Image
          src={`/images/${deal.imagen}.png`}
          alt="nft"
          width={133}
          height={133}
          className="w-[67px] h-[67px] rounded-15 lg:rounded-3xl lg:w-[133px] lg:h-[133px]"
        />
        <div className="text-white">
          <h3 className="text-xs md:text-sm font-medium leading-4 md:leading-normal">{deal.name}</h3>
          <p className="mb-px lg:mb-6 text-xs lg:text-sm opacity-50">{deal.category}</p>
          <div
            className={`rounded-all-xl md:rounded-all-2xl relative bg-purple-dark-300 after-gradient-purple-100-on-hover group-hover:after:opacity-100`}
          >
            <div className="relative z-30 flex items-center gap-2 px-1.5 py-1 lg:p-2 mb-0.5 md:mb-0">
              <Image
                src={BNB}
                alt="crypto"
                width={40}
                height={40}
                className="w-5 h-5 lg:w-10 lg:h-10"
              />
              <div className="w-full">
                <h3 className="text-xs lg:text-sm text-white leading-none mb-1 md:mb-0 md:leading-normal">{deal.price}</h3>
                <div className="block w-full px-1.5 lg:px-3 lg:py-0.5 rounded-full bg-purple-dark-600 bg-opacity-50">
                  <p className="text-xs font-thin text-white leading-none md:leading-normal h-[11px] md:h-auto">{deal.label}</p>
                </div>
              </div>
              <span className="absolute flex items-center justify-center w-3.5 h-3.5 md:w-6 md:h-6 text-white rounded-full -top-1 -right-1 bg-gradient-purple-100 text-[8px] md:text-sm">
                {deal.label === "Fixed Price" ? (
                  <HiOutlineBolt />
                ) : (
                  <MdGavel />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Deal;
