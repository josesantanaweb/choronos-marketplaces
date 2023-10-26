"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Card from "@/components/common/card/Card";

import { recently } from "@/data";

const Suggested = () => {

  const swiperRef: any = useRef();

  return (
    <div>
      <h3 className="text-white text-base md:text-2xl mb-6">
        More from the lost Keys of Chronos..
      </h3>
      <Swiper
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        navigation={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Autoplay]}
        className="container grid grid-cols-1 md:grid-cols-5 items-center gap-4 mx-auto"
      >
        {recently.map((nft, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Card nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Suggested;
