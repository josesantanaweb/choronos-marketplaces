"use client";

import Image from "next/image"
import { FiChevronDown } from "react-icons/fi";

import UserIcon from "@/assets/icons/gradiants/user.svg"
import GraphUp from "@/assets/icons/gradiants/graph.svg";
import Chart from "@/assets/icons/gradiants/chart.svg";


import { formatNumber } from "@/utils/format-number";

interface ListingStatItemProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  percent?: number;
  formatValueToMoney?: boolean;
}

const stats = [
  {
    title: "Floor Price",
    value: 456140000,
    percent: 2.99,
    icon: <Image src={Chart} width={38} height={38} alt="chart" className="w-[1em] h-[1em]" />,
    formatValueToMoney: true,
  },
  {
    title: "24h Volume",
    value: 231180000,
    percent: 8.49,
    icon: <Image src={GraphUp} width={28} height={28} alt="graph" className="w-[1em] h-[1em]" />,
    formatValueToMoney: true,
  },
  {
    title: "Total Volume",
    value: 134365000,
    percent: 11.19,
    icon: <Image src={Chart} width={38} height={38} alt="chart" className="w-[1em] h-[1em]" />,
    formatValueToMoney: true,
  },
  {
    title: "Owners",
    value: 334765,
    icon: <Image src={UserIcon} width={38} height={38} alt="chart" className="w-[1em] h-[1em]" />,
    formatValueToMoney: false,
  },
];

const ListingStatItem = (props: ListingStatItemProps) => {
  const { icon, title, value, percent, formatValueToMoney = true } = props;

  const percentStatus = "up";

  return (
    <div className="flex items-center gap-2 md:gap-4 md:mb-5 last:mb-0 text-white">
      <div className="text-[30px] md:text-[39px]">{icon}</div>

      <div className="flex items-center flex-wrap md:items-end w-full gap-1 md:gap-4 justify-between md:justify-start">
        <div>
          <h5 className="mb-1 md:mb-2 text-[10px] md:text-sm leading-none opacity-50">{title}</h5>
          <h3 className="text-sm md:text-lg">
            {formatNumber(value, { currency: formatValueToMoney ? 'USD' : undefined, abbreviate: true, maximumFractionDigits: 2, minimumFractionDigits: 2 })}
          </h3>
        </div>

        {percent && (
          <div
            className={`flex items-center ${
              percentStatus === "up"
                ? "text-success border-success"
                : percentStatus == "down"
                ? "text-alert border-alert"
                : ""
            } border border-solid rounded-full md:ml-auto text-[10px] md:text-xs px-[7px] md:px-2 py-1 h-5`}
          >
            <span
              className={`mr-1 md:mr-2 ${percentStatus === "up" ? "rotate-180" : ""} text-xs`}
            >
              <FiChevronDown />
            </span>
            <span>{formatNumber(percent)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ListingStat = () => {
  return (
    <div className="p-5 lg:py-6 bg-purple-dark-600 rounded-2xl bg-opacity-50 md:min-w-[327px]">
      <h5 className="mb-3 md:mb-5 text-lg lg:text-2xl text-white">Stats</h5>

      <div className="grid grid-cols-2 gap-y-5 gap-x-3 md:block">
        {stats.map((stat, index) => (
          <ListingStatItem
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            percent={stat.percent}
            formatValueToMoney={stat.formatValueToMoney}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingStat;
