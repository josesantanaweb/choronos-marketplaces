"use client";

import { motion, AnimatePresence } from "framer-motion";

import { FaChevronDown } from "react-icons/fa6";

import { ComponentVisible } from "@/hooks/useVisible";
import twMerge from "@/utils/tw-merge-custom";

interface IListingDropdownProps {
  selected: string;
  setSelected: (selected: string) => void;
  className?: string;
}

const ListingDropdown = (props: IListingDropdownProps) => {
  const { setSelected, selected, className = "" } = props;

  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const options = ["chrNFT", "maNFT", "veCHR"];

  const handleSelected = (option: string) => {
    setSelected(option);
    setIsVisible(false);
  };

  return (
    <div className={twMerge("relative", className)} ref={ref}>
      <h1
        className="flex items-center justify-between gap-1 lg:gap-3 text-lg lg:text-3xl text-white cursor-pointer font-medium"
        onClick={() => setIsVisible(!isVisible)}
      >
        Chronos {selected}
        <div
          className={`lg:mb-1 transition-transform text-md lg:text-xs ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown className="sm:mb-1" />
        </div>
      </h1>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-40 w-full p-2.5 lg:p-4 top-full rounded-3xl rounded-t-none backdrop-blur-[12.5px] bg-gradient-gray-100"
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelected(option)}
                className="relative flex items-center justify-center px-5 py-1.5 lg:py-3 mb-3 last:mb-0 text-xs lg:text-sm text-white list-none cursor-pointer bg-purple-dark-200 bg-opacity-60 rounded-all-2xl after-gradient-purple-100-on-hover"
              >
                <span className="relative z-40">Chronos {option}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ListingDropdown;
