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
      <h3
        className="flex items-center justify-between gap-3 text-3xl text-white cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        Chronos {selected}
        <div
          className={`mb-1 transition-transform duration-300 ease-linear ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown size={12} className="mb-1" />
        </div>
      </h3>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-40 w-full p-4 top-full rounded-3xl rounded-t-none backdrop-blur-[12.5px] bg-gradient-gray-100"
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelected(option)}
                className="relative flex items-center justify-center px-5 py-3 mb-3 last:mb-0 text-sm text-white list-none cursor-pointer bg-purple-dark-200 bg-opacity-60 rounded-all-2xl after-gradient-purple-100-on-hover"
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
