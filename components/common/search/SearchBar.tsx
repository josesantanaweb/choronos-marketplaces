import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

import { useRouter } from "next/navigation";

import ArrowRightGradientIcon from "@/assets/icons/gradiants/arrow-right.svg";

import SearchItem from "./SearchItem";
import { ComponentVisible } from "@/hooks/useVisible";
import { useSearchParams, redirect } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(searchParams.get("q") || "");
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  useEffect(() => {
    console.log(query);

    // if (query.length > 2) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  }, [query]);

  const handleActive = () => setIsFocus(true);

  const handleInactiveActive = () => setIsFocus(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const goToPageSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (query.length == 0) return;

    event.preventDefault();
    router.push(`/search?q=${query}`);
    setIsVisible(false);
  };

  return (
    <label
      ref={ref}
      className="md:relative flex items-center w-full cursor-text group rounded-xl sm:rounded-20 h-11 px-4 sm:h-14 sm:p-4 bg-purple-dark-600 text-white"
    >
      <span
        className={`mr-2.5 sm:mr-4 opacity-50 transition-opacity group-hover:opacity-100 ${
          isVisible || isFocus ? "opacity-100" : ""
        } text-md sm:text-lg`}
      >
        <BiSearch />
      </span>
      <input
        type="text"
        value={query}
        onFocus={handleActive}
        onBlur={handleInactiveActive}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            goToPageSearch(e);
          }
        }}
        placeholder="Search chrNFTs, veCHR NFTs, maNFTs..."
        className={`w-full text-sm bg-transparent border-none outline-none placeholder:text-white opacity-50 transition-opacity group-hover:opacity-100 text-ellipsis leading-none ${
          isVisible || isFocus ? "opacity-100" : ""
        }`}
      />
      <AnimatePresence>
        {(isVisible || isFocus) && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-30 w-full px-4 pt-5 pb-3 md:pb-4 md:p-4 top-full md:mt-1 left-0 right-0 rounded-b-20 bg-[#403d5c80] backdrop-blur-[12.5px] md:right-auto md:bg-transparent md:bg-gradient-gray-100 md:left-1/2 md:-translate-x-1/2 md:min-w-[335px]"
          >
            <SearchItem />
            <SearchItem />
            <SearchItem />

            <div className="flex justify-center mt-5 md:mt-3">
              <Link
                href={`/search?q=${query}`}
                className="text-xs md:text-md flex items-center gap-2 opacity-70 hover:opacity-100"
              >
                See all tokens
                <Image
                  width={16}
                  height={16}
                  src={ArrowRightGradientIcon}
                  alt="arrow-right"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </label>
  );
};

export default SearchBar;
