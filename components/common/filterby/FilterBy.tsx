import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Button from "@/components/common/buttons/button/Button";
import { FiChevronDown } from "react-icons/fi";
import FilterIcon from "@/assets/icons/gradiants/filter.svg";
import { IFilterOption } from "@/interfaces";

import { ComponentVisible } from "@/hooks/useVisible";

interface IFilteByProps {
  setFilter: (value: string) => void;
}

const FilteBy = (props: IFilteByProps) => {
  const { setFilter } = props;

  const [selected, setSelected] = useState<IFilterOption>();

  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const options = [
    { label: "Low to High Price", value: "low_to_high_price" },
    { label: "High to Low Price", value: "high_to_low_price" },
    { label: "Newest", value: "newest" },
    { label: "Ending Soon", value: "ending_soon" },
    { label: "Auction", value: "auction" },
    { label: "Fixed Price", value: "fixed_price" },
  ];

  const onSelected = (option: IFilterOption) => {
    setSelected(option);
    setFilter(option.value);
  };

  return (
    <div
      ref={ref}
      className={`relative bg-purple-dark-700 text-white text-xs md:text-sm w-full select-none rounded-full ${
        isVisible ? "before:opacity-100" : ""
      }`}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div className="h-11 md:h-14 flex items-center justify-center relative z-20 cursor-pointer p-2.5 md:p-4 [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:shrink-0">
        <div className="pr-2.5 md:pr-4">
          <Image
            src={FilterIcon}
            width={30}
            height={30}
            alt="filter"
            className="w-6 h-6 md:w-[30px] md:h-[30px]"
          />
        </div>

        <div className="pr-4 border-r border-gray-500">Filter by</div>

        <div className="px-4">
          {selected?.label || "Categories, price and more"}
        </div>

        <div
          className={`ml-auto transition-transform text-base md:text-xl ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <FiChevronDown />
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full rounded-b-[20px] bg-gradient-gray-100 z-[100] py-3 px-1 w-full backdrop-blur-[12.5px]"
          >
            {options.map((option: IFilterOption, index: number) => (
              <div
                key={index}
                className="w-full py-1 last:pb-0 relative last:after:content-none after:content-[''] after:absolute after:h-px after:bg-white after:mix-blend-overlay after:bottom-0 after:left-[14px] after:right-[14px] after:opacity-50"
              >
                <Button
                  className={`w-full before-none justify-start after-gradient-purple-100-on-hover ${
                    option.value === selected?.value ? "after:opacity-100" : ""
                  }`}
                  size="small"
                  onClick={() => onSelected(option)}
                >
                  <span className="relative z-30">{option.label}</span>
                </Button>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilteBy;
