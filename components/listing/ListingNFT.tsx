"use client";

import { useState } from "react";
import Image from "next/image";

import { FaHistory } from "react-icons/fa";
import { BiCube } from "react-icons/bi";

import Button from "@/components/common/buttons/button/Button";
import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";
import ListingDropdown from "./ListingDropdown";

import chrNFT from "@/assets/components/listing/chrNFT.png";
import manNFT from "@/assets/components/listing/manNFT.png";
import veCHR from "@/assets/components/listing/veCHR.png";
import UsersIcon from "@/assets/icons/gradiants/users.svg";
import TagIcon from "@/assets/icons/gradiants/tag.svg";
import DBIcon from "@/assets/icons/gradiants/db.svg";

interface IListingNFTProps {
  NFTSelected: string;
  setNFTSelected: (selected: string) => void;
  showActivity?: boolean;
  toggleActivity?: () => void;
}

const ListingNFT = (props: IListingNFTProps) => {
  const { NFTSelected, setNFTSelected, showActivity, toggleActivity } = props;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const renderImageNFT =
    NFTSelected === "maNFT"
      ? manNFT
      : NFTSelected === "chrNFT"
      ? chrNFT
      : veCHR;

  const handleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className="relative flex items-center w-full gap-6 px-8 py-12 bg-opacity-50 bg-purple-dark-600 rounded-2xl">
      <Image
        src={renderImageNFT}
        width={260}
        alt="Listing"
        height={260}
        className="w-[260px] h-[260px] m-auto"
      />
      <div>
        <ListingDropdown
          setSelected={setNFTSelected}
          selected={NFTSelected}
          className="w-2/5 mb-3"
        />
        <p className="mb-6 text-base text-gray-400">
          Long ago, before the universe began, the eternal titan Chronos created
          a set of 5,555 magical keys. Each of these holds the power to change
          the future..
        </p>
        <ul className="flex items-center gap-10 mb-5">
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
        <div className="flex w-2/3 gap-3">
          <Button full>SELL chrNFT</Button>
          <Button
            full
            variant="secondary"
            onClick={toggleActivity}
            className={showActivity ? "after:opacity-100" : ""}
          >
            <span className="flex items-center justify-between gap-3">
              {showActivity ? (
                <>
                  <BiCube size={24} />
                  Listings
                </>
              ) : (
                <>
                  <FaHistory size={16} />
                  Activity
                </>
              )}
            </span>
          </Button>
        </div>
      </div>
      <div className="absolute flex items-center gap-3 top-5 right-5">
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
        <ShareButton />
      </div>
    </div>
  );
};

export default ListingNFT;
