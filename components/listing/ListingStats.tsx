"use client";

import Image from "next/image"
import { FiChevronDown } from "react-icons/fi";

import UserIcon from "@/assets/icons/gradiants/user.svg"
import GraphUp from "@/assets/icons/gradiants/graph.svg";
import Chart from "@/assets/icons/gradiants/chart.svg";


import { abbreviateNumber } from "@/utils/abbreviate-number";

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
    icon: <Image src={Chart} width={38} height={38} alt="chart" />,
    formatValueToMoney: true,
  },
  {
    title: "24h Volume",
    value: 231180000,
    percent: 8.49,
    icon: <Image src={GraphUp} width={28} height={28} alt="graph" />,
    formatValueToMoney: true,
  },
  {
    title: "Total Volume",
    value: 134365000,
    percent: 11.19,
    icon: <Image src={Chart} width={38} height={38} alt="chart" />,
    formatValueToMoney: true,
  },
  {
    title: "Owners",
    value: 334765,
    icon: <Image src={UserIcon} width={38} height={38} alt="chart" />,
    formatValueToMoney: false,
  },
];

const ListingStatItem = (props: ListingStatItemProps) => {
  const { icon, title, value, percent, formatValueToMoney = true } = props;

  const percentStatus = "up";

  return (
    <div className="flex items-center gap-4 mb-5">
      <div>{icon}</div>

      <div className="flex items-end w-full gap-4">
        <div>
          <h5 className="mb-2 text-sm leading-none text-gray-400">{title}</h5>
          <h3 className="text-lg text-white">
            {formatValueToMoney
              ? "$" + abbreviateNumber(value, 2)
              : value.toLocaleString()}
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
            } border border-solid rounded-full ml-auto text-xs px-2 py-1 h-5`}
          >
            <span
              className={`mr-2 ${percentStatus !== "up" ? "rotate-180" : ""}`}
            >
              <FiChevronDown size={12} />
            </span>
            <span>{percent}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ListingStat = () => {
  return (
    <div className="px-5 py-6 bg-purple-dark-600 rounded-2xl bg-opacity-50 min-w-[327px]">
      <h5 className="mb-5 text-2xl text-white">Stats</h5>

      <div className="last:mb-0">
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
