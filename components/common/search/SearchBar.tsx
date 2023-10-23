import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

import ArrowRightGradientIcon from "@/assets/icons/gradiants/arrow-right.svg";

import SearchItem from "./SearchItem";
import { ComponentVisible } from "@/hooks/useVisible";

const SearchBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  useEffect(() => {
    if (value.length > 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [value]);

  const handleActive = () => setActive(true);

  const handleInactiveActive = () => setActive(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <label
      ref={ref}
      className="md:relative flex items-center w-full cursor-pointer group rounded-xl sm:rounded-20 h-9 px-4 sm:h-14 sm:p-4 bg-purple-dark-600"
    >
      <span
        className={`mr-2.5 sm:mr-4 text-white opacity-50 transition-opacity duration-300 ease-linear group-hover:opacity-100 ${
          isVisible || active ? "opacity-100" : ""
        } text-md sm:text-lg`}
      >
        <BiSearch />
      </span>
      <input
        type="text"
        onFocus={handleActive}
        onBlur={handleInactiveActive}
        onChange={onChange}
        placeholder="Search chrNFTs, veCHR NFTs, maNFTs..."
        className={`w-full text-sm bg-transparent border-none outline-none text-white placeholder:text-white opacity-50 transition-opacity duration-300 ease-linear group-hover:opacity-100 text-ellipsis leading-none ${
          isVisible || active ? "opacity-100" : ""
        }`}
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-30 w-full px-4 pt-5 pb-3 md:pb-4 md:p-4 top-full md:mt-1 left-0 right-0 rounded-b-20 bg-[#403d5c80] backdrop-blur-[12.5px] md:backdropbackdrop-blur-0 md:right-auto md:bg-transparent md:left-1/2 md:-translate-x-1/2 md:min-w-[335px]"
          >
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <div className="flex justify-center mt-5 md:mt-3">
              <Link
                href="/"
                className="text-xs md:text-md flex items-center gap-2 text-white opacity-70 hover:opacity-100 duration-300 ease-linear"
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
