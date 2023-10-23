import React from "react";
import clsx from "clsx";
import Image from "next/image";

// Icons
import { RiTwitterXFill, RiMenu3Fill } from "react-icons/ri";
import { LiaTelegramPlane, LiaDiscord } from "react-icons/lia";
import { PiMediumLogoLight } from "react-icons/pi";
import { SiGitbook } from "react-icons/si";
import { FiTag } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineAreaChart, AiOutlineBarChart } from "react-icons/ai";

// Assets
import Eagle from "@/assets/icons/eagle.svg"
import Gecko from "@/assets/icons/gecko.svg"
import Graph from "@/assets/icons/graph.svg"
import twMerge from "@/utils/tw-merge-custom";

type IconButtonSize = "small" | "large";
type IconButtonName =
  | "sell"
  | "graph"
  | "search"
  | "git"
  | "medium"
  | "telegram"
  | "twitter"
  | "discord"
  | "eagle"
  | "gecko"
  | "line-calendar"
  | "line-area-chart"
  | "line-bar-chart"
  | "menu-3-fill";

type Icon = React.ReactElement;

export interface IIconButtonProps {
  size?: IconButtonSize;
  count?: number;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  icon: IconButtonName;
  className?: string;
}

const IconButton = ({
  onClick,
  count,
  size = "large",
  icon = "sell",
  selected = false,
  disabled = false,
  className = "",
}: IIconButtonProps) => {

  const imageSizeClass = size === "small" ? "w-4" : "w-4 sm:w-5";

  const icons: Record<IIconButtonProps["icon"], Icon> = {
    sell: <FiTag />,
    search: <BiSearch />,
    git: <SiGitbook />,
    medium: <PiMediumLogoLight />,
    telegram: <LiaTelegramPlane />,
    twitter: <RiTwitterXFill />,
    discord: <LiaDiscord />,
    graph: (
      <Image
        width={18}
        height={18}
        src={Graph}
        alt="graph"
        className={imageSizeClass}
      />
    ),
    eagle: (
      <Image
        width={18}
        height={18}
        src={Eagle}
        alt="eagle"
        className={imageSizeClass}
      />
    ),
    gecko: (
      <Image
        width={18}
        height={18}
        src={Gecko}
        alt="gecko"
        className={imageSizeClass}
      />
    ),
    "line-calendar": <AiOutlineCalendar />,
    "line-area-chart": <AiOutlineAreaChart />,
    "line-bar-chart": <AiOutlineBarChart />,
    "menu-3-fill": <RiMenu3Fill />,
  };

  const sizeClasses = {
    small: "h-[40px] w-[40px] rounded-all-xl text-lg",
    large: "h-[30px] w-[30px] rounded-all-10 text-base sm:h-[55px] sm:w-[55px] sm:rounded-all-2xl sm:text-2xl",
  };

  const getSizeClass = (size: IconButtonSize) => sizeClasses[size] || "";

  const classes = clsx(
    "relative flex items-center justify-center text-white group after-gradient-purple-100-on-hover bg-purple-dark-400",
    {
      [getSizeClass(size)]: true,
      "opacity-50 cursor-not-allowed": disabled,
      "after:opacity-100": selected,
    }
  );

  return (
    <button className={twMerge(classes, className)} onClick={onClick} disabled={disabled}>
      <span className="relative z-30">{icons[icon]}</span>

      {count && (
        <span
          className={`flex justify-center items-center absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-lg bg-purple-dark-300 after-gradient-purple-100-on-hover after:rounded-full group-hover:after:opacity-100 text-[8px] sm:text-[10px] z-30 ${
            selected ? "after:opacity-100" : ""
          }`}
        >
          <span className="z-30">{count}</span>
        </span>
      )}
    </button>
  );
};

export default React.memo(IconButton);
