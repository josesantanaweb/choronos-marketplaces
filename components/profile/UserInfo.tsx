"use client";

import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";

import Avatar from "@/assets/components/profile/avatar.png";
import World from "@/assets/icons/gradiants/world.svg";

const UserInfo = () => {
  return (
    <div className="w-[25%] p-6 mt-6 bg-purple-dark-900 rounded-3xl">
      <div className="flex flex-col items-center justify-center mb-4">
        <Image
          src={Avatar}
          alt="avatar"
          width={180}
          height={180}
          className="mb-3 border-8 rounded-full border-purple-chronos"
        />
        <h3 className="text-xl text-white">Nova CHR</h3>
        <p className="flex items-center gap-2 text-xs text-white">
          Art, Design, UI/UX Director
          <Link href="/">
            <GoLinkExternal size={16} />
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="gap-2 text-sm text-white">
          0x2946939x...
          <span className="text-gray-400">Address</span>
        </p>
        <p className="flex gap-2 text-sm text-white">
          30
          <span className="text-gray-400">NFTs</span>
        </p>
        <p className="flex gap-2 text-sm text-white">
          03
          <span className="text-gray-400">Collections</span>
        </p>
      </div>
      <p className="mb-8 text-sm leading-6 text-gray-400">
        Thinking every day to move through innovation. Creating dope art,
        and making the most powerful user interfaces.
      </p>
      <p className="flex justify-center w-full gap-3 text-sm text-gray-400">
        <Image src={World} width={24} height={24} alt="world" />
        chronos.exchange/
      </p>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex items-center gap-4 mb-4">
          <li className="list-none">
            <ButtonIcon icon="twitter" size="small" />
          </li>
          <li className="list-none">
            <ButtonIcon icon="discord" size="small" />
          </li>
          <li className="list-none">
            <ButtonIcon icon="medium" size="small" />
          </li>
        </div>
        <p className="text-sm text-gray-400">Member since 04 May 2023</p>
      </div>
    </div>
  );
};

export default UserInfo;
