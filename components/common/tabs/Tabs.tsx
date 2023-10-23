"use client";

import Button from "@/components/common/buttons/button/Button";

export interface ITabsProps {
  selected: string;
  setSelected: (selected: string) => void;
  options: string[];
  numberTabs: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const Tabs = (props: ITabsProps) => {
  const { selected, setSelected, options, numberTabs, className } = props;

  const handleSelected = (option: string) => setSelected(option);

  const classes = `${
    numberTabs === 1
      ? "grid-cols-1"
      : numberTabs === 2
      ? "grid-cols-2"
      : numberTabs === 3
      ? "grid-cols-3"
      : numberTabs === 4
      ? "grid-cols-4"
      : numberTabs === 5
      ? "grid-cols-5"
      : ""
  }`;

  return (
    <div
      className={`w-full gap-4 p-2 item-cennter grid bg-purple-dark-600 rounded-3xl ${classes} ${className}`}
    >
      {options.map((option, index) => (
        <Button
          variant={selected === option ? "primary" : "secondary"}
          full
          key={index}
          onClick={() => handleSelected(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
