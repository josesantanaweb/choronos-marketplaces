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
    small: "h-[30px] text-xs leading-[15px] px-3",
    default: "h-[38px] text-sm leading-[17px]",
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