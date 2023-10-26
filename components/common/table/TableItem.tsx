"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";

import { FiChevronDown } from "react-icons/fi";

import BNB from "@/assets/tokens/BNB.svg";
import Girl from "@/assets/components/profile/girl.png";
import Boy from "@/assets/components/profile/boy.png";
import Key from "@/assets/components/profile/art-key.png";

import { IRow } from "@/interfaces";

import { formatNumber } from "@/utils/format-number";

export interface ITableItemProps {
  row: IRow;
  compact?: boolean;
}

interface IAnimateBottomTableProps {
  open: boolean;
  className?: string;
  children: ReactNode;
}

interface IDealProps {
  name: string;
  className?: string;
}

interface IContainerTableItemProps {
  children: ReactNode;
  open: boolean;
}

interface IButtonOpenMoreInfo {
  open: boolean;
  handleOpen: () => void;
}

interface IPriceProps {
  price: string;
}

const AnimateBottom = (props: IAnimateBottomTableProps) => {
  const { open, className = "", children } = props;

  return (
    <>
      <div className={`${className} hidden lg:grid`}>{children}</div>

      <AnimatePresence>
        {open && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 55 }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden w-full block lg:hidden"
          >
            <div className={`grid lg:hidden ${className}`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Deal = (props: IDealProps) => {
  const { name, className = "" } = props;

  return (
    <div
      className={`flex items-center bg-purple-dark-900 bg-opacity-30 rounded-[10px] md:rounded-[20px] lg:w-[230px] overflow-hidden ${className}`}
    >
      <Image
        src={Key}
        alt="crypto"
        width={56}
        height={56}
        className="w-14 h-14"
      />
      <div className="px-3 overflow-hidden">
        <h4 className="text-sm text-white truncate">Lost keys of chronos</h4>
        <p className="text-xs text-gradient-purple-100 truncate">{name}</p>
      </div>
    </div>
  );
};

const Price = (props: IPriceProps) => {
  const { price } = props;

  return (
    <div className="flex items-center gap-2.5 md:gap-3 shrink-0">
      <Image
        src={BNB}
        alt="crypto"
        width={28}
        height={28}
        className="w-[25px] h-[25px] md:w-7 md:h-7"
      />
      <div className="shrink-0">
        <h4 className="text-md md:text-base">
          {formatNumber(price, { currency: "ETH" })}
        </h4>
        <p className="text-xs opacity-50">
          {formatNumber(price, { currency: "USD" })}
        </p>
      </div>
    </div>
  );
};

const ButtonOpenMoreInfo = (props: IButtonOpenMoreInfo) => {
  const { open, handleOpen } = props;

  return (
    <button
      type="button"
      className="text-white flex justify-center items-center text-lg lg:hidden h-5 w-5"
      aria-label="Open more info"
    >
      <FiChevronDown
        onClick={handleOpen}
        className={`transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
};

const ContainerTableItem = (props: IContainerTableItemProps) => {
  const { open, children } = props;

  return (
    <div
      className={`relative py-3 md:py-2 px-5 md:px-6 rounded-all-15 md:rounded-all-20 mb-4 last:mb-0 text-white before-full before:bg-purple-dark-500 after-full after:bg-gradient-purple-100 before:opacity-25 ${
        open ? "after:opacity-25" : "after:opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const TableItem = (props: ITableItemProps) => {
  const { row, compact } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  if (compact) {
    return (
      <ContainerTableItem open={open}>
        <div className="flex justify-between items-center w-full lg:w-1/3 gap-3 relative z-30">
          <Deal name={row.name} className="mr-auto" />

          <Price price={row.price} />

          <ButtonOpenMoreInfo open={open} handleOpen={handleOpen} />
        </div>

        <AnimateBottom
          open={open}
          className="items-center grid-cols-2 gap-3 md:grid-cols-4 w-full lg:w-2/3 mt-4 md:mt-0 relative z-30"
        >
          <div className="flex items-center gap-3">
            <Image
              src={Girl}
              alt="crypto"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-base text-white">Offered by</h4>
              <p className="text-xs md:text-md text-gradient-purple-100 truncate">
                0xa1b2c3d4e5454
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={Boy}
              alt="crypto"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-base text-white">Offered to</h4>
              <p className="text-xs md:text-md text-gradient-purple-100 truncate">
                0xa1b2c3d4e54645
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-white">
              {moment(row?.date, "DDMMYYYY").fromNow()}
            </p>
          </div>
        </AnimateBottom>
      </ContainerTableItem>
    );
  }

  return (
    <ContainerTableItem open={open}>
      <div className="flex md:gap-10 items-center flex-wrap lg:flex-nowrap relative z-30">
        <div className="flex justify-between items-center w-full lg:w-1/3 gap-4">
          <div className="text-xs md:text-base shrink-0">
            <h4>{row?.category}</h4>
            <p>as fixed price</p>
            {row?.date && (
              <p
                className={`${
                  open ? "opacity-100" : "opacity-0"
                } md:opacity-0 text-[9px] mt-1 leading-none transition-opacity -mb-4`}
              >
                Date: {moment(row?.date, "DDMMYYYY").fromNow()}
              </p>
            )}
          </div>

          <Deal name={row.name} className="mr-auto" />

          <ButtonOpenMoreInfo open={open} handleOpen={handleOpen} />
        </div>

        <AnimateBottom
          open={open}
          className="items-center grid-cols-3 gap-3 md:grid-cols-4 w-full lg:w-2/3 pt-4 md:pt-0"
        >
          <Price price={row.price} />

          <div className="flex items-center gap-1.5 md:gap-3">
            <Image
              src={Girl}
              alt="crypto"
              width={28}
              height={28}
              className="w-[15px] h-[15px] md:w-7 md:h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-xs block md:hidden">From</h4>
              <p className="text-xs md:text-md text-gradient-purple-100 truncate">
                0xa1b2c3d4e5454
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 md:gap-3">
            <Image
              src={Boy}
              alt="crypto"
              width={28}
              height={28}
              className="w-[15px] h-[15px] md:w-7 md:h-7"
            />
            <div className="overflow-hidden">
              <h4 className="text-sm md:text-base text-white block md:hidden">
                To
              </h4>
              <p className="text-xs md:text-md text-gradient-purple-100 truncate">
                0xa1b2c3d4e54645
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-white">
              {moment(row?.date, "DDMMYYYY").fromNow()}
            </p>
          </div>
        </AnimateBottom>
      </div>
    </ContainerTableItem>
  );
};

export default TableItem;
