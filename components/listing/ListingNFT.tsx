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
    <div className="relative flex items-center w-full gap-6 p-5 pt-12 pb-8 lg:px-8 lg:py-12 bg-opacity-50 bg-purple-dark-600 rounded-2xl text-white">
      <div className="m-auto hidden lg:block shrink-0 w-[260px] h-[260px]">
        {NFTSelected === "chrNFT" ? (
          <video
            src="/videos/key.mp4"
            loop
            autoPlay
            width={260}
            height={260}
            muted
            className="rounded-[30px]"
          ></video>
        ) : (
          <Image
            src={renderImageNFT}
            width={260}
            height={260}
            alt="Listing"
            className="object-cover rounded-[30px]"
          />
        )}
      </div>

      <div className="">
        <div className="flex gap-3 mb-8 sm:mb-0">
          <div className="block lg:hidden shrink-0 w-[132px] h-[143px] ">
            {NFTSelected === "chrNFT" ? (
              <video
                src="/videos/key.mp4"
                loop
                autoPlay
                width={132}
                height={143}
                muted
                className="rounded-[18px]"
              ></video>
            ) : (
              <Image
                src={renderImageNFT}
                width={132}
                height={143}
                alt="Listing"
                className="object-cover rounded-[18px]"
              />
            )}
          </div>
          <div>
            <ListingDropdown
              setSelected={setNFTSelected}
              selected={NFTSelected}
              className="w-fit mb-1.5 sm:mb-3 mt-6 lg:mt-0"
            />
            <p className="sm:mb-6 text-xs sm:text-base opacity-70">
              Long ago, before the universe began, the eternal titan Chronos
              created a set of 5,555 magical keys. Each of these holds the power
              to change the future..
            </p>
          </div>
        </div>
        <ul className="flex items-center justify-between xs:justify-start xs:gap-10 mb-5 text-xs sm:text-base">
          <li className="flex items-center gap-2 sm:gap-3">
            <Image
              src={UsersIcon}
              width={20}
              height={20}
              className="w-3.5 h-3.5 sm:w-5 sm:h-5"
              alt="users"
            />
            2345 Owners
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <Image
              src={TagIcon}
              width={20}
              height={20}
              className="w-3.5 h-3.5 sm:w-5 sm:h-5"
              alt="users"
            />
            20 Listings
          </li>
          <li className="flex items-center gap-2 sm:gap-3">
            <Image
              src={DBIcon}
              width={20}
              height={20}
              className="w-3.5 h-3.5 sm:w-5 sm:h-5"
              alt="users"
            />
            92.35 Traded
          </li>
        </ul>
        <div className="flex 1xl:w-2/3 gap-2 sm:gap-3 flex-col sm:flex-row">
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
