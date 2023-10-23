"use client";

import { useState } from "react";
import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";

import Key from "@/assets/components/dashboard/art-key.png";
import UsersIcon from "@/assets/icons/gradiants/users.svg";
import TagIcon from "@/assets/icons/gradiants/tag.svg";
import DBIcon from "@/assets/icons/gradiants/db.svg";

import Image from "next/image";

const Favorites = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div>
      <h4 className="mb-4 text-2xl text-white">Collections</h4>
      <div className="flex items-center gap-4 rounded-3xl relative overflow-hidden bg-purple-dark-600 h-32 mb-6">
        <div className="absolute top-3 right-3">
          <FavoriteButton
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
            size="small"
          />
        </div>
        <Image src={Key} alt="key" width={170} height={100} />
        <div className="p-4">
          <h4 className="text-white text-2xl">chrNFT</h4>
          <p className="mb-4 text-purple-chronos">Lost Keys of Chronos</p>
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-3 text-white">
              <Image
                src={UsersIcon}
                width={20}
                height={20}
                className="w-5 h-5"
                alt="users"
              />
              2345 Owners
            </li>
            <li className="flex items-center gap-3 text-white">
              <Image
                src={TagIcon}
                width={20}
                height={20}
                className="w-5 h-5"
                alt="users"
              />
              20 Listings
            </li>
            <li className="flex items-center gap-3 text-white">
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
        </div>
      </div>
    </div>
  );
};

export default Favorites;
