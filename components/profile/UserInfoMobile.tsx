"use client";

import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { FaHistory } from "react-icons/fa";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";
import Button from "@/components/common/buttons/button/Button";
import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";

import Avatar from "@/assets/components/profile/avatar.png";
import World from "@/assets/icons/gradiants/world.svg";
import Front from "@/assets/components/dashboard/front.png";

export interface IUserInfoMobileProps {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  isActivity: boolean;
  setActivity: (isActivity: boolean) => void;
}

const UserInfoMobile = (props: IUserInfoMobileProps) => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = props;

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);
  return (
    <div className="w-full md:w-[25%] mt-6 bg-purple-dark-900 rounded-3xl md:hidden">
      <div className="mb-2 relative">
        <Image
          src={Front}
          alt="front"
          width={430}
          height={350}
          className="w-[100%] h-[180px] md:h-[240px] rounded-t-3xl"
        />
        <div className="absolute flex items-center justify-end w-full gap-2 bottom-3 right-3 z-50">
          <FavoriteButton
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
          />
          <ShareButton />
          <Button onClick={handleActivity}>
            Activity
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 md:p-6 mt-[-90px] relative z-20">
        <div className="flex flex-col items-start justify-center mb-4 w-full">
          <Image
            src={Avatar}
            alt="avatar"
            width={180}
            height={180}
            className="border-8 rounded-full border-purple-chronos w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
          />
          <h3 className="text-xl text-white text-center w-full">Nova CHR</h3>
          <p className="flex items-center justify-center gap-2 text-xs text-white w-full">
            Art, Design, UI/UX Director
            <Link href="/">
              <GoLinkExternal size={16} />
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-between mb-4 gap-3">
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
          Thinking every day to move through innovation. Creating dope art, and
          making the most powerful user interfaces.
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
    </div>
  );
};

export default UserInfoMobile;
