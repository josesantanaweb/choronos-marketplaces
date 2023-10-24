"use client";

import Image from "next/image";

import Rocket from "@/assets/components/home/stats/jet.svg";
import Arrows from "@/assets/components/home/stats/arrows.svg";
import Hourglass from "@/assets/components/home/stats/hourglass.svg";
import BNB from "@/assets/tokens/BNB.svg";

export interface IStatsProps {
  title: string;
  text: string;
  icon: string;
}

const Stats = (props: IStatsProps) => {
  const { title, text, icon = "jet" } = props;

  const renderIcon =
    icon === "jet" ? Rocket : icon === "arrows" ? Arrows : Hourglass;

  return (
    <section className="relative flex items-center justify-start md:justify-center w-full gap-1 px-2.5 py-1.5 pl-[86px] md:pl-[37px] md:pt-[22px] md:py-[24px] rounded-lg md:rounded-20 bg-blue-chronos-900 bg-opacity-50">
      <div className="flex flex-col items-start justify-center">
        <Image
          src={renderIcon}
          alt="icon"
          width={80}
          height={80}
          className="absolute w-16 h-16 md:w-20 md:h-20 md:-translate-y-1/2 md:top-1/2 left-1 md:-left-9 bottom-0 md:bottom-auto"
        />
        <h6 className="font-light text-white text-md md:text-[20px] mb-1 md:mb-0">{title}</h6>
        <p className="flex items-center text-sm md:text-[24px] font-medium text-white leading-none md:leading-normal">
          {(icon === "jet" || icon === "arrows") && (
            <Image
              src={BNB}
              alt="crypto"
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5 mr-0.5 md:mr-2"
            />
          )}
          {text}
        </p>
      </div>
    </section>
  );
};

export default Stats;
