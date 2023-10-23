import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineBolt } from "react-icons/hi2";

import { formatNumber } from "@/utils/format-number";

import SearchImagen from "@/assets/components/search/nft.png";
import BNB from "@/assets/tokens/BNB.svg";

export interface ISearchItemProps {}

const SearchItem = (props: ISearchItemProps) => {
  return (
    <Link
      href="/"
      className="relative flex items-center justify-between bg-[#5558794d] md:backdrop-blur-[20px] p-3 rounded-all-2xl mb-1 md:mb-3 gap-2 after-gradient-purple-100-on-hover hover:after:opacity-30 after:z-[-1] before-none"
    >
      <div className="flex items-center">
        <Image
          src={SearchImagen}
          alt="search-item"
          width={46}
          height={46}
          className="w-[40px] h-[40px] rounded-15 1xl:w-[46px] 1xl:h-[46px]"
        />
        <div className="ml-1 1xl:ml-4">
          <h3 className="text-xs 1xl:text-sm font-semibold text-white text-ellipsis">
            Chronos Key #5313
          </h3>
          <p className="text-xs 1xl:text-sm text-gray-400 text-ellipsis">
            The Lost Keys of Chronos
          </p>
        </div>
      </div>
      <div
        className={`md:relative shrink-0 rounded-lg 1xl:rounded-2xl p-1 1xl:p-2 flex items-center gap-2 md:bg-white md:bg-opacity-10`}
      >
        <Image
          src={BNB}
          alt="crypto"
          className="hidden 1xl:block w-10 h-10"
          width={40}
          height={40}
        />
        <div className="w-full">
          <h3 className="flex items-center gap-1.5 text-xs 1xl:text-sm text-white">
            <Image
              src={BNB}
              alt="crypto"
              className="block 1xl:hidden w-3 h-3"
              width={12}
              height={12}
            />
            <span>{formatNumber(0.32, { currency: 'ETH' })}</span>
          </h3>
          <div className="block w-full py-0.5 px-3 1xl:py-1 rounded-full bg-[#00000026]">
            <p className="text-[10px] 1xl:text-xs font-thin text-white leading-none">
              Fixed Price
            </p>
          </div>
        </div>
        <span className="flex absolute items-center justify-center w-5 h-5 text-white rounded-full -top-1 -right-1 bg-gradient-purple-100">
          <HiOutlineBolt size={12} />
        </span>
      </div>
    </Link>
  );
};

export default SearchItem;
