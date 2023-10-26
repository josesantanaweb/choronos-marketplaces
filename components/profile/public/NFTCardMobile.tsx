"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/common/buttons/button/Button";
import PayCHR from "@/components/common/pay-chr/PayCHR";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import Art from "@/assets/components/profile/art-key.png";
import BNB from "@/assets/tokens/BNB.svg";
import HeartIcon from "@/assets/icons/gradiants/heart.svg";
import EyeIcon from "@/assets/icons/gradiants/eye.svg";
import FlameIcon from "@/assets/icons/gradiants/flame.svg";

const NFTCardMobile = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(!open)

  const openImagenClass = open ? "h-[300px]" : "h-[200px]";

  return (
    <div className="overflow-hidden rounded-3xl bg-purple-dark-900 mb-4 md:hidden">
      <div className={`w-full overflow-hidden relative after:bg-gradient-to-b from-black to-transparent after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-50 ${openImagenClass}`}>
        <Image
          src={Art}
          alt="art"
          width={200}
          height={200}
          className="h-full w-full"
        />
        <div className="absolute top-0 w-full p-3 z-30 flex items-center">
          <h6 className="flex items-center gap-4 text-white w-2/3">
            <Image src={FlameIcon} alt="art" width={18} height={18} />
            Highlighted by User
          </h6>
          <div className="flex items-center justify-end w-3/2 gap-4">
            <p className="flex items-center gap-2 text-xs text-white">
              <Image
                src={HeartIcon}
                alt="art"
                width={20}
                height={20}
                className="w-4 h-4"
              />
              325
            </p>
            <p className="flex items-center gap-2 text-xs text-white">
              <Image
                src={EyeIcon}
                alt="art"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              20
            </p>
          </div>
        </div>
        <div className="absolute bottom-3 right-3">
          <div onClick={handleOpen} className="flex items-center justify-center relative before-gradient-purple-100 after-gradient-purple-200-on-hover text-white overflow-hidden w-8 h-8 text-2xl rounded-lg">
            {
              open ?
              <FiChevronDown className="relative z-30"/>
              :
              <FiChevronUp className="relative z-30" />
            }
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center">
        <h4 className="mb-2 text-base text-white">Chronos Key #1203043</h4>
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={BNB}
            alt="art"
            width={34}
            height={34}
            className="w-10 h-10 object-cover"
          />
          <div>
            <h6 className="text-base text-white">18,526 ETH</h6>
            <p className="text-sm text-gray-400 block">($81,678.99)</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 block mb-4">
          This sell expires in 00D 00Hr 00Min 00S
        </p>
        <Button full className="mb-4">
          Buy Now
        </Button>
        <PayCHR onClick={() => ({})} />
      </div>
    </div>
  );
};

export default NFTCardMobile;
