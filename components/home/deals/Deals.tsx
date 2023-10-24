"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Deal from "./Deal";
import { deals } from "@/data";
import { useEffect, useState } from "react";

interface ISwiperDealsProps {
  deals: Array<any>;
  initialSlide?: number;
  reverseDirection?: boolean;
  slidesOffsetAfter?: number;
  slidesOffsetBefore?: number;
  className?: string;
}

const SwiperDeals = (props: ISwiperDealsProps) => {
  const {
    deals,
    initialSlide = 0,
    reverseDirection = false,
    slidesOffsetAfter = 0,
    slidesOffsetBefore = 0,
    className = "",
  } = props;

  return (
    <Swiper
      onSwiper={(swiper: any) => {
        reverseDirection && swiper.changeLanguageDirection("rtl");
      }}
      navigation={false}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={reverseDirection ? 5 : 10}
      slidesPerView={1}
      initialSlide={initialSlide}
      slidesOffsetAfter={slidesOffsetAfter}
      slidesOffsetBefore={slidesOffsetBefore}
      breakpoints={{
        2600: {
          slidesPerView: 7,
        },
        2300:{
          slidesPerView: 6.5,
        },
        2000: {
          slidesPerView: 5,
        },
        1650: {
          slidesPerView: 4.5,
        },
        1350: {
          slidesPerView: 3.5,
        },
        1168: {
          slidesPerView: 3,
          spaceBetween: reverseDirection ? 10 : 20,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: reverseDirection ? 5 : 10,
        },
        520: {
          slidesPerView: 2,
        },
        390: {
          slidesPerView: 1.5,
        },
      }}
      modules={[Autoplay]}
      className={className}
    >
      {deals.map((deal, index) => (
        <SwiperSlide key={index} dir="ltr">
          <Deal deal={deal} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Deals = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [mobileDeals, setMobileDeals] = useState<Array<any>>([]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    let dealsForSwiper = [...deals, ...deals].reduce(
      (acc: Array<any>, current: any, index: number) => {
        let chunkIndex = Math.floor(index / 10);

        if (chunkIndex > 1) {
          chunkIndex = 1;
        }

        if (!acc[chunkIndex]) {
          acc[chunkIndex] = [];
        }

        acc[chunkIndex].push(current);

        return acc;
      },
      []
    );

    setMobileDeals(dealsForSwiper);
  }, []);

  return (
    <section className="pt-10">
      <h3 className="md:container px-2.5 mx-auto mb-7 md:mb-10 text-lg md:text-3xl font-medium text-white">
        Best Deals
      </h3>

      {!windowWidth || windowWidth >= 1024 ? (
        <SwiperDeals deals={deals} />
      ) : (
        <>
          {mobileDeals[0]?.length && (
            <SwiperDeals
              deals={mobileDeals[0]}
              slidesOffsetBefore={20}
              className="mb-2.5"
            />
          )}
          {mobileDeals[1]?.length && (
            <SwiperDeals
              deals={mobileDeals[1]}
              reverseDirection={true}
              initialSlide={mobileDeals[1]?.length - 1}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Deals;
