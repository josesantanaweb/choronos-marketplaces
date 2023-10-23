import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComponentVisible } from "@/hooks/useVisible";
import Image from "next/image";

import Selector from "@/components/home/stats/Selector";
import IconButton from "../buttons/icon-button/IconButton";
import SpinerLoading from "@/components/modals/components/SpineLoading";

import { PiSelectionBackground } from "react-icons/pi";

import {  Chart } from "./Chart";

import { formatNumber, IOptionsFormatNumber } from "@/utils/format-number";

import ChronosLargeImage from "@/assets/components/listing/chronos-large.png";
import twMerge from "@/utils/tw-merge-custom";

interface IChartsProps {
  data: [number, number][] | null;
  onDateChange?: (date: number | null) => void;
  width?: number;
  height?: number;
  disableDateRange?: boolean;
  disableChangeStyle?: boolean;
  isMobile?: Boolean;
  tooltipValueFormatOptions?: IOptionsFormatNumber;
  className?: string;
}

interface IChartsDefaultProps extends IChartsProps {
  title?: string;
  currency?: undefined | "USD";
}

interface IChartsETHProps extends IChartsProps {
  currency: "ETH";
  currencyValue: {
    eth: number;
    usd: number;
  };
}

interface IChartsCHRProps extends IChartsProps {
  currency: "CHR";
  currencyValue: {
    chr: number;
    usd: number;
  };
}

const options = [
  {
    label: "1D",
    value: 1,
  },
  {
    label: "1W",
    value: 7,
  },
  {
    label: "1M",
    value: 30,
  },
  {
    label: "1Y",
    value: 365,
  },
  {
    label: "ALL",
    value: null,
  },
];

export default function Charts(
  props: IChartsDefaultProps | IChartsETHProps | IChartsCHRProps
) {
  const {
    data,
    onDateChange,
    width,
    height,
    disableDateRange = false,
    disableChangeStyle = true,
    currency,
    isMobile = false,
    tooltipValueFormatOptions = null,
    className = '',
  } = props;

  const [period, setPeriod] = useState<number | null>(1);
  const [isBars, setIsBars] = useState(false);

  const {
    ref,
    isVisible: isDateRangeOpen,
    setIsVisible: setIsDateRangeOpen,
  } = ComponentVisible(false);


  const handleSetPeriod = (period: number | null) => {
    setPeriod(period);
    onDateChange && onDateChange(period);
  }

  useEffect(() => {
    handleSetPeriod(7);
  }, []);

  return (
    <div
      className={twMerge(`bg-purple-dark-500 text-white rounded-[30px] ${
        isMobile ? "px-4 py-5" : "px-11 py-8"
      }`, className)}
    >
      <div className="z-[2] mb-3.5 flex items-center justify-between">
        {props.currency !== "ETH" && props.currency !== "CHR" && (
          <p
            className={`${
              isMobile ? "text-base" : "text-[22px]"
            } font-medium leading-none`}
          >
            {props.title}
          </p>
        )}

        {(props.currency === "ETH" || props.currency === "CHR") && (
          <div className="flex items-center gap-2.5">
            <Image
              src={
                props.currency === "ETH"
                  ? `/images/ethereum.png`
                  : ChronosLargeImage
              }
              width={isMobile ? 24 : 28}
              height={isMobile ? 24 : 28}
              alt={props.currency === "ETH" ? "Ethereum" : "Chronos"}
            />
            <div>
              <div
                className={`${
                  isMobile ? "text-xs" : "text-base"
                } leading-none mb-2`}
              >
                {formatNumber(
                  props.currency === "ETH"
                    ? props.currencyValue?.eth
                    : props.currencyValue?.chr,
                  {
                    currency: currency,
                    maximumFractionDigits: 3,
                  }
                )}
              </div>
              <div className={`text-xs leading-none opacity-50`}>
                {formatNumber(props.currencyValue?.usd, { currency: "USD" })}
              </div>
            </div>
          </div>
        )}

        {(!disableChangeStyle || !disableDateRange) && (
          <div className="flex items-center gap-[5px] sm:gap-[16px] 1xl:gap-[19px]">
            {!disableChangeStyle && (
              <IconButton
                onClick={() => setIsBars(!isBars)}
                icon={
                  isBars ? "line-area-chart" : "line-bar-chart"
                }
                size={isMobile ? "small" : undefined}
              />
            )}

            {!disableDateRange && (
              <div className="relative">
                <div className="relative" ref={ref}>
                  <IconButton
                    onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                    selected={isDateRangeOpen}
                    icon="line-calendar"
                    size={isMobile ? "small" : undefined}
                    className="bg-purple-dark-600"
                  />
                  <AnimatePresence>
                    {isDateRangeOpen && (
                      <motion.div
                        transition={{ duration: 0.3, ease: "linear" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-[110%] z-[100] right-0 p-2 bg-purple-dark-600 rounded-15 bg-opacity-60 backdrop-blur-[25px]"
                      >
                        <Selector
                          value={period}
                          options={options.map((option) => ({
                            name: option.label,
                            value: option.value,
                          }))}
                          size="small"
                          onSelect={(value: any) => {
                            handleSetPeriod(value);
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="z-0 mx-auto w-fit">
        {!data || !data.length ? (
          <div className={`mb-3.5 ${isMobile ? "pb-[40px]" : "pb-[55px]"}`}>
            {!data ? (
              <SpinerLoading className="mx-auto" />
            ) : (
              <div className="flex aspect-[870/348] w-full flex-col items-center justify-center gap-[10px] sm:gap-[20px]">
                <PiSelectionBackground size={30} />
                <p className="text-center text-[9px] leading-[12px] opacity-50 sm:text-[14px] sm:leading-[18px]">
                  No data found
                </p>
              </div>
            )}
          </div>
        ) : (
          <Chart
            data={data}
            type={isBars ? "bar" : "line"}
            currency={currency}
            width={width}
            height={height}
            isMobile={isMobile}
            tooltipValueFormatOptions={tooltipValueFormatOptions}
          />
        )}
      </div>
    </div>
  );
}
