"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Stat from "./Stat";
import Selector from "./Selector";

import { stats } from "@/data";

const Stats = () => {
  const [active, setActive] = useState<number | string | null>(0);
  const swiperRef: any = useRef();

  const handleSelect = (value: string | number | null) => {
    setActive(value);
    swiperRef.current?.slideToLoop(value);
  }

  return (
    <section>
      <div className="mx-auto">
        <Selector
          options={[
            { name: "veCHR", value: 0 },
            { name: "chrNFT", value: 1 },
            { name: "maNFT", value: 2 },
          ]}
          value={active}
          onSelect={(value) => handleSelect(value)}
        />
      </div>

      <div className="w-full max-w-[310px] xl:w-3/5 md:max-w-none mx-auto mt-5 gap-14">
        <Swiper
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          onRealIndexChange={() => {
            setActive(swiperRef.current?.realIndex);
          }}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          className="flex items-center w-full gap-4"
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-2.5 md:gap-10 pt-2.5 md:px-10 lg:px-6 md:pt-0">
                <Stat
                  title="Last Week Sales"
                  text={stat.last_week_sales + " ETH"}
                  icon="jet"
                />
                <Stat
                  title="Total Trade"
                  text={stat.total_trade + " ETH"}
                  icon="arrows"
                />
                <Stat
                  title="List Trade"
                  text={stat.list_trade + " veCHRs"}
                  icon="hourglass"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Stats;
