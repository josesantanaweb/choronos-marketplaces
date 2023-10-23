"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Card from "@/components/common/card/Card";
import SwiperPaginate from "@/components/home/sold/SwiperPaginate";

import { recently } from "@/data";

const RecentlySold = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [recentlySold, setRecentlySold] = useState<any[]>(recently);

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
    if (windowWidth && windowWidth <= 768 && recentlySold.length > 5) {
      setRecentlySold(recently.slice(0, 5));
      swiperRef?.current?.update();
    }

    if (windowWidth && windowWidth > 768 && recentlySold.length <= 5) {
      setRecentlySold(recently);
      swiperRef?.current?.update();
    }
  }, [windowWidth]);

  const swiperRef: any = useRef();
  const slidesPerView = 10;

  if (slidesPerView * 2 > recently.length) {
    const maxItemsToAdd = slidesPerView * 2 - recently.length;
    for (let i = 0; i < maxItemsToAdd; i++) {
      recently.push(recently[i]);
    }
  }

  return (
    <section className="py-10 md:container px-2.5 m-auto">
      <h3 className="mb-8 md:mb-10 text-lg md:text-3xl font-medium text-white">
        Recently Sold
      </h3>

      <Swiper
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        onRealIndexChange={() => {
          setActiveIndex(swiperRef.current?.realIndex);
        }}
        navigation={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        // slidesPerView={1.37}
        spaceBetween={10}
        // breakpoints={{
        //   1920: {
        //     slidesPerView: 6.5,
        //   },
        //   1700: {
        //     slidesPerView: 5.9,
        //   },
        //   1650: {
        //     slidesPerView: 5.7,
        //   },
        //   1255: {
        //     slidesPerView: 4.3,
        //   },
        //   1167: {
        //     slidesPerView: 4,
        //   },
        //   1023: {
        //     slidesPerView: 3.5,
        //   },
        //   767: {
        //     slidesPerView: 2.6,
        //   },
        //   700: {
        //     slidesPerView: 2.5,
        //   },
        //   600: {
        //     slidesPerView: 2.1,
        //   },
        //   500: {
        //     slidesPerView: 1.7,
        //   },
        // }}
        modules={[Autoplay]}
      >
        {recentlySold.map((nft, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Card nft={nft} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperPaginate
        count={recentlySold.length}
        activeIndex={activeIndex}
        onClick={(newIndex) => {
          const realIndex = swiperRef.current.realIndex;
          const newSlideIndex = swiperRef.current.getSlideIndexByData(newIndex);
          const currentSlideIndex = swiperRef.current.getSlideIndexByData(
            swiperRef.current.realIndex
          );
          const loopFix = (dir: string) => {
            const indexBeforeLoopFix = swiperRef.current.activeIndex;
            swiperRef.current.loopFix({
              direction: dir,
              activeSlideIndex: newSlideIndex,
              slideTo: false,
            });
            const indexAfterFix = swiperRef.current.activeIndex;
            if (indexBeforeLoopFix === indexAfterFix) {
              swiperRef.current.slideToLoop(realIndex, 0, false, true);
            }
          };
          if (
            newSlideIndex >
            swiperRef.current.slides.length - swiperRef.current.loopedSlides
          ) {
            loopFix(newSlideIndex > currentSlideIndex ? "next" : "prev");
          } else if (swiperRef.current.params.centeredSlides) {
            const slidesPerView =
              swiperRef.current.params.slidesPerView === "auto"
                ? swiperRef.current.slidesPerViewDynamic()
                : Math.ceil(parseFloat(swiperRef.current.params.slidesPerView));
            if (newSlideIndex < Math.floor(slidesPerView / 2)) {
              loopFix("prev");
            }
          }
          swiperRef.current.slideToLoop(newIndex);
        }}
        className="mx-auto mt-5"
      />
    </section>
  );
};

export default RecentlySold;
