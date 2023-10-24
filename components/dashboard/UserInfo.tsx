"use client";

import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { BiPencil } from "react-icons/bi";

import Avatar from "@/assets/components/profile/avatar.png";
import Front from "@/assets/components/dashboard/front.png";
import { Fragment } from "react";

const UserInfo = () => {
  return (
    <Fragment>
      <div className="mb-2">
        <Image
          src={Front}
          alt="front"
          width={430}
          height={350}
          className="w-[100%] h-[180px] md:h-[240px] rounded-t-3xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-3 md:p-6 mt-[-120px]">
        <div className="relative">
          <Image
            src={Avatar}
            alt="avatar"
            width={180}
            height={180}
            className="mb-3 border-8 rounded-full border-purple-chronos w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
          />
          <span className="absolute flex items-center justify-center text-white rounded-full cursor-pointer top-2 right-5 w-7 h-7 bg-purple-chronos">
            <BiPencil size={18} />
          </span>
        </div>
        <h3 className="flex items-center gap-2 text-xl text-white">
          Nova CHR
          <BiPencil size={18} className="cursor-pointer" />
        </h3>
        <p className="flex items-center gap-2 text-xs text-white">
          Art, Design, UI/UX Director
          <Link href="/">
            <GoLinkExternal size={16} />
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default UserInfo;
