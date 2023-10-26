import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/components/common/buttons/button/Button";
import { BiWalletAlt } from "react-icons/bi"

import { ITradeItem } from "@/interfaces";

import HandsIcon from "@/assets/components/home/trade/hand-coins.png"

interface ITradeItemProps {
  item: ITradeItem;
}

const TradeItem = (props: ITradeItemProps) => {
  const { item } = props;

  const [show, setShow] = useState<boolean>(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseOut = () => setShow(false);

  return (
    <div className="pt-10 lgMax:pt-12 w-full">
      <div
        className="mx-auto after-gradient-purple-100-on-hover after:rounded-3xl hover:after:opacity-50 md:h-44 z-30 flex flex-col items-center pt-2.5 md:pt-5 p-5 group text-center rounded-20 relative text-white max-w-[494px] w-full bg-purple-dark-200"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          className="absolute z-30 -top-10 md:-top-14 w-20 h-20 md:w-[115px] md:h-[115px]"
          src={HandsIcon}
          width={115}
          height={115}
          alt="Hand with coins"
        />
        <div className="relative z-30 w-full">
          <div className="mt-11 md:mt-8">
            <h6 className="absolute top-1 md:top-0 right-0 text-current transition-opacity opacity-50 group-hover:opacity-100 text-xs md:text-xl">
              Step 0{item.step}
            </h6>
            <div className="mb-1 md:mb-4 text-md md:text-xl font-medium leading-none">
              {item.title}
            </div>
          </div>
          <div className="relative flex justify-center w-full text-center">
            <AnimatePresence>
              {!show && (
                <motion.div
                  transition={{ duration: 0.3, ease: "linear" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="mx-auto text-xs md:text-base opacity-50 md:leading-2 max-w-[350px] md:w-80 md:max-w-none font-medium"
                >
                  {item.description}
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {show && (
                <motion.div
                  transition={{ duration: 0.3, ease: "linear" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 flex justify-center -translate-x-1/2 left-1/2 w-60"
                >
                  <Button link="/">
                    <div className="flex items-center gap-4">
                      {item.step === 1 && <BiWalletAlt size={21} />}
                      <span className={`leading-none mt-px mr-p1 text-sm`}>
                        {item.button}
                      </span>
                    </div>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeItem;
