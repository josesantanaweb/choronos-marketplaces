"use client";

import Image from "next/image";

import UserDropdown from "./UserDropdown";
import { ComponentVisible } from "@/hooks/useVisible";

import BNB from "@/assets/tokens/BNB.svg";
import CHR from "@/assets/tokens/CHR.svg";
import User from "@/assets/components/header/avatar.png";

import { formatNumber } from "@/utils/format-number";

export interface IMenu {
  name: string;
  link: string;
}
export interface IUserBalanceProps {
  avatar?: string;
  code?: string;
  ethereumBalance?: number;
  chronosBalance?: number;
  menu: IMenu[];
}

const UserBalance = (props: IUserBalanceProps) => {
  const {
    avatar,
    code,
    chronosBalance,
    ethereumBalance,
    menu,
  } = props;
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  const handleOpenMenu = () => setIsVisible(!isVisible);

  return (
    <div
      ref={ref}
      onClick={handleOpenMenu}
      className={`text-white relative flex items-center justify-between gap-1 sm:gap-2 pl-2 sm:pl-3.5 pr-6 py-1.5 rounded-2xl cursor-pointer h-11 sm:h-14 transition-all hover:bg-purple-dark-300 max-w-[156px] sm:max-w-[215px] w-full ${
        isVisible ? "bg-purple-dark-300" : "bg-purple-dark-600"
      }`}
    >
      <Image
        src={User}
        alt="avatar"
        width={40}
        height={40}
        className="w-6 h-6 sm:w-10 sm:h-10"
      />
      <div className="pl-1 sm:pl-2 border-l border-l-slate-700 w-full">
        <p className="text-[11px] sm:text-sm truncate text-ellipsis max-w-[80px] sm:max-w-[106px]">
          {code}
        </p>
        <div className="flex items-center gap-1 sm:gap-4 text-[8px] sm:text-xs">
          <div className="flex items-center gap-px sm:gap-2">
            <Image
              src={BNB}
              alt="crypto"
              className="w-2.5 h-2.5 sm:w-5 sm:h-5"
              width={18}
              height={18}
            />
            <p>
              {formatNumber(ethereumBalance, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="flex items-center gap-px sm:gap-2">
            <Image
              src={CHR}
              alt="crypto"
              className="w-2.5 h-2.5 sm:w-5 sm:h-5"
              width={18}
              height={18}
            />
            <p>
              {formatNumber(chronosBalance, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
      <UserDropdown menu={menu} openMenu={isVisible} />
    </div>
  );
};

export default UserBalance;
