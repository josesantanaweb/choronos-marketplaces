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
    <section className="md:container mx-auto px-2.5">
      <div className="mb-28 mt-36 lg:mt-52 py-9 px-5 lg:px-[84px] lg:py-16 relative text-white rounded-[30px] md:rounded-3xl bg-purple-dark-400">
        <div className="relative z-10">
          <h2 className="pb-5">
            <span className="block mb-2 lg:mb-3 text-base lg:text-2xl leading-none mt-1 lg:mt-0">
              Welcome to the
            </span>
            <span className="block text-lg lg:text-3xl leading-[normal] lg:leading-none font-medium tracking-[0.3px] max-w-[200px] lg:max-w-none">
              Number one ecosystem in Arbitrum
            </span>
          </h2>

          <div className="mb-2.5 lg:mb-5 text-sm lg:text-base leading-none">
            What are you waiting?
          </div>

          <Button className="h-9 lg:h-14 text-xs lg:text-base rounded-15">
            <div className="flex items-center gap-2 lg:gap-4 whitespace-nowrap">
              <BiWalletAlt size={21} />
              <span>Connect Wallet</span>
            </div>
          </Button>

          <Link
            href="/home"
            className="flex items-center mt-5 lg:mt-8 group max-w-[135px] lg:max-w-none"
          >
            <span className="flex items-center justify-center w-[30px] h-[30px] lg:w-9 lg:h-9 rounded-lg bg-purple-dark-600 mr-1 lg:mr-4 relative after:content-[''] after:top-0 after:absolute after:left-0 after:w-full after:h-full overflow-hidden after:opacity-0 after:transition-opacity after:duration-300 after:ease-linear group-hover:after:opacity-100 after:bg-gradient-purple-100 shrink-0">
              <span className="relative z-[2]">
                <LiaDiscord size={18} />
              </span>
            </span>

            <span className="relative leading-none">
              <span className="text-xs lg:text-sm tracking-[0.3px] group-hover:opacity-0 transition-opacity duration-300 ease-linear block">
                <span className="lg:mr-2">Need some help?</span>
                <span className="font-bold">Join our discord</span>
              </span>

              <span className="text-xs lg:text-sm tracking-[0.3px] left-0 bg-gradient-purple-100 bg-clip-text webkit-text-fill-color-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear absolute bottom-0 top-0">
                <span className="lg:mr-2">Need some help?</span>
                <span className="font-bold">Join our discord</span>
              </span>
            </span>
          </Link>
        </div>

        <div className="absolute -top-8 xl:top-0 right-0 bottom-0 left-0 overflow-hidden xl:overflow-visible rounded-[30px] md:rounded-3xl">
          <Image
            src={Key1}
            alt="Connect to Wallet - Key 1"
            className="absolute mix-blend-lighten bottom-0 z-[3] right-[-115px] xl:right-32 min-w-[396px] min-h-[318px] w-[396px] h-[318px] xl:w-[768px] xl:h-[618px] object-contain xl:object-[initial]"
            width={768}
            height={618}
          />
          <Image
            src={Key2}
            alt="Connect to Wallet - Key 2"
            className="absolute mix-blend-lighten bottom-0 xl:bottom-[-10px] -right-[147px] xl:-right-[80px] z-[4] min-w-[428px] min-h-[209px] w-[428px] h-[209px] xl:w-[923px] xl:h-[555px] blur-[2px] xl:blur-0 object-contain xl:object-[initial]"
            width={923}
            height={555}
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Welcome);
