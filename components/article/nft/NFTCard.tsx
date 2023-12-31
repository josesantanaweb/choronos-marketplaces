"use client";

import Image from "next/image";

import Key from "@/assets/components/article/key.png";
import UsersIcon from "@/assets/icons/gradiants/users.svg";
import TagIcon from "@/assets/icons/gradiants/tag.svg";
import DBIcon from "@/assets/icons/gradiants/db.svg";

// TODO:
// Convertir en coponent global

const NFTCard = () => {
  return (
    <div className="flex items-center gap-4 rounded-3xl relative overflow-hidden bg-purple-dark-600 mb-6 md:h-[220px] bg-opacity-60 flex-wrap md:flex-nowrap">
      <Image
        src={Key}
        alt="key"
        width={190}
        height={217}
        className="h-[220px] w-full md:w-[190px]"
      />
      <div className="p-4">
        <h4 className="text-white text-lg md:text-2xl">chrNFT</h4>
        <ul className="flex items-center gap-3 md:gap-10 mb-3">
          <li className="flex items-center gap-3 text-white text-xs md:text-base">
            <Image
              src={UsersIcon}
              width={20}
              height={20}
              className="w-5 h-5"
              alt="users"
            />
            2345 Owners
          </li>
          <li className="flex items-center gap-3 text-white text-xs md:text-base">
            <Image
              src={TagIcon}
              width={20}
              height={20}
              className="w-5 h-5"
              alt="users"
            />
            20 Listings
          </li>
          <li className="flex items-center gap-3 text-white text-xs md:text-base">
            <Image
              src={DBIcon}
              width={20}
              height={20}
              className="w-5 h-5"
              alt="users"
            />
            92.35 Traded
          </li>
        </ul>
        <p className="mb-2 text-purple-chronos">Lost Keys of Chronos</p>
        <p className="text-gray-400 text-sm md:text-base">
          Long ago, before the universe began, the eternal titan Chronos created
          a set of 5,555 magical keys. Each of these Lost Keys of Chronos holds
          the power to change the future, but for centuries, the keys have
          remained hidden, scattered..
        </p>
      </div>
    </div>
  );
};

export default NFTCard;
