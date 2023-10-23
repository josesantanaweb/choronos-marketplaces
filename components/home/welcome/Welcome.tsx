"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaDiscord } from "react-icons/lia";
import { BiWalletAlt } from "react-icons/bi";

import Button from "@/components/common/buttons/button/Button";

import Key1 from "@/assets/components/home/welcome/key-1.png";
import Key2 from "@/assets/components/home/welcome/key-2.png";

const Welcome = () => {

  return (
    <section className="mb-28 mt-52 p-14 relative text-white container mx-auto rounded-3xl bg-purple-dark-400">
      <div className="relative z-10">
        <h2 className="pb-5">
          <span className="block mb-3 text-2xl leading-none">
            Welcome to the
          </span>
          <span className="block text-3xl leading-none font-medium tracking-[0.3px]">
            Number one ecosystem in Arbitrum
          </span>
        </h2>
        <div className="mb-5 text-base leading-none">What are you waiting?</div>
        <Button link="/" target="_blank">
          <div className="flex items-center gap-4">
            <BiWalletAlt size={21} />
            <span className={`leading-none mt-px mr-p1 text-sm`}>
              Connect Wallet
            </span>
          </div>
        </Button>
        <Link href="/home" className="flex items-center mt-8 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-purple-dark-600 mr-4 relative after:content-[''] after:top-0 after:absolute after:left-0 after:w-full after:h-full overflow-hidden after:opacity-0 after:transition-opacity after:duration-300 after:ease-linear group-hover:after:opacity-100 after:bg-gradient-purple-100">
            <span className="relative z-[2]">
              <LiaDiscord size={18} />
            </span>
          </span>

          <span className="relative leading-none">
            <span className="text-sm tracking-[0.3px] group-hover:opacity-0 transition-opacity duration-300 ease-linear">
              <span className="mr-2">Need some help?</span>
              <span className="font-bold">Join our discord</span>
            </span>

            <span className="text-sm tracking-[0.3px] left-0 bg-gradient-purple-100 bg-clip-text webkit-text-fill-color-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear absolute">
              <span className="mr-2">Need some help?</span>
              <span className="font-bold">Join our discord</span>
            </span>
          </span>
        </Link>
      </div>

      <Image
        src={Key1}
        alt="Connect to Wallet - Key 1"
        className="absolute mix-blend-lighten bottom-0 z-[3] right-32 w-[768px] h-[618px]"
        width={768}
        height={618}
      />
      <Image
        src={Key2}
        alt="Connect to Wallet - Key 2"
        className="absolute mix-blend-lighten bottom-0 -right-[80px] z-[4] w-[923px] h-[555px]"
        width={923}
        height={555}
      />
    </section>
  );
};

export default React.memo(Welcome);
