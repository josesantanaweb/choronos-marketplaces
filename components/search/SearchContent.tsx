"use client";

import { useEffect, useState } from "react";

import Card from "@/components/common/card/Card";
import Loading from "@/components/common/loading/Loading";
import FilteBy from "@/components/common/filterby/FilterBy";

import { recently } from "@/data";
import { useSearchParams, redirect  } from "next/navigation";

const SearchContent = () => {
  const [filter, setFilter] = useState<string>("");

  const searchParams = useSearchParams();

  if (!searchParams.get('q')) {
    redirect('/');
  }

  return (
    <div className="py-14">
      <div className="relative">
        <div className="absolute w-full h-[450px] bg-mountains"></div>
        <div className="md:container px-2.5 mx-auto relative z-30">
          <div className="flex md:items-center justify-between mx-auto mb-10 md:mb-11 flex-col md:flex-row">
            <h1 className="mb-5 md:mb-0 text-lg md:text-3xl font-medium text-white leading-none">
              <span className="block mb-1.5 opacity-50">
                Search Results for
              </span>
              <span className="block">{searchParams.get("q")}</span>
            </h1>

            <div className="w-full md:w-[436px]">
              <FilteBy setFilter={setFilter} />
            </div>
          </div>

          <div className="grid items-center justify-items-center mx-auto mb-7 md:mb-10 gap-5 sm:gap-8 grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lgMax:grid-cols-4 1xl:grid-cols-5 2xl:grid-cols-6">
            {recently.map((nft, index) => (
              <Card nft={nft} key={index} />
            ))}
          </div>

          <div className="flex items-center justify-center my-8">
            <Loading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
