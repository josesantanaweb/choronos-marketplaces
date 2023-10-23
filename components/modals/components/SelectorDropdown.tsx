import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/components/common/buttons/button/Button";
import { BiChevronDown } from "react-icons/bi";

import { ComponentVisible } from "@/hooks/useVisible";

import twMerge from "@/utils/tw-merge-custom";

interface IOptions {
  label: string;
  value: string;
}

interface ISelectorDropdownProps {
  placeholder: string;
  onSelection: React.Dispatch<React.SetStateAction<any>>;
  options: IOptions[];
  className?: string;
  value?: string | number;
}

const SelectorDropdown = (props: ISelectorDropdownProps) => {
  const {
    onSelection,
    options = [],
    placeholder = "Please select a option",
    className = "",
    value,
  } = props;

  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const onSelected = (option: IOptions) => {
    if (typeof onSelection === "function") {
      onSelection(option.value);
    }
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        `relative text-white text-base w-full select-none before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-30 before:mix-blend-overlay before:transition-opacity before:duration-300 before:ease-linear before:rounded-20 before:z-10 hover:before:opacity-60 ${
          isVisible ? "before:opacity-60" : ""
        }`,
        className
      )}
      onClick={() => setIsVisible(!isVisible)}
    >
      <div
        className={`h-14 flex items-center justify-center relative z-20 cursor-pointer px-5 py-4 [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:shrink-0 ${
          isVisible ? "opacity-50" : ""
        } transition-opacity duration-300 ease-linear`}
      >
        <div>
          {options.find((o) => o.value === value)?.label || placeholder}
        </div>

        <div
          className={`ml-auto transition-transform duration-300 ease-linear ${
            isVisible ? "rotate-180" : ""
          } `}
        >
          <BiChevronDown size={22} />
        </div>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full mt-6 z-[100] w-full pb-5"
          >
            <div className="backdrop-blur-[14.5px] rounded-[20px] bg-purple-violet-100 py-6 px-5">
              <div className="max-h-[200px] overflow-auto">
                {options.map((option: IOptions, index: number) => {
                  return (
                    <Button
                      key={index}
                      className={`w-full before-none bg-blue-chronos-900 after-gradient-purple-200-on-hover ${
                        option.value === value ? "after:opacity-100" : ""
                      } mb-3 last:mb-0 text-sm`}
                      onClick={() => onSelected(option)}
                    >
                      <span className="relative z-30">{option.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectorDropdown;
