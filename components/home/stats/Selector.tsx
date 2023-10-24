import { useState } from "react";

import Button from "@/components/common/buttons/button/Button";

interface ISelectorOptions {
  name: string;
  value: string | number | null;
}
interface ISelectorProps {
  options: ISelectorOptions[];
  onSelect: (value: string | number | null) => void;
  size?: "small" | "default";
  value: string | number | null;
}

const Selector = (props: ISelectorProps) => {
  const { options, onSelect, size = "default", value } = props;

  const classes = {
    small: "sm:h-[30px] sm:text-xs sm:leading-[15px] sm:px-3",
    default: "sm:h-[38px] sm:text-sm sm:leading-[17px]",
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {options.map((option: ISelectorOptions, index: number) => (
        <Button
          key={index}
          size="small"
          className={`${
            classes[size]
          } before-none after-gradient-purple-100-on-hover rounded-all-20 shrink-0 ${
            value == option.value ? "after:opacity-100" : ""
          }`}
          onClick={() => onSelect(option.value)}
        >
          <span className="block pt-px">{option.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default Selector;
