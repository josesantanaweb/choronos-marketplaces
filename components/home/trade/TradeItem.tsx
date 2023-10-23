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
    <div
      className="after-gradient-purple-100-on-hover after:rounded-3xl hover:after:opacity-50 h-44  z-30 flex flex-col items-center p-5 group text-center rounded-3xl relative text-white max-w-[494px] w-full bg-purple-dark-200"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Image
        className="absolute z-10 -top-20 w-[115px] h-[115px]"
        src={HandsIcon}
        width={115}
        height={115}
        alt="Hand with coins"
      />
      <div className="relative z-30 w-full">
        <div className="mt-8 text-xl">
          <h6 className="absolute top-0 right-0 text-current transition-opacity duration-300 ease-linear opacity-50 group-hover:opacity-100">
            Step 0{item.step}
          </h6>
          <div className="mb-4 text-xl font-medium leading-non">
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
                className="mx-auto text-base opacity-50 leading-2 w-80"
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
  );
};

export default TradeItem;
