"use client";

import Link from "next/link";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { FiTag, FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";

import UserInfo from "./UserInfo";

export interface ISidebarProps {
  setMenu: (menu: string) => void;
}

const Sidebar = (props: ISidebarProps) => {
  const { setMenu } = props;
  return (
    <div className="lg:w-[25%] bg-purple-dark-900 rounded-3xl overflow-hidden max-h-[900px]">
      <UserInfo />

      <ul className="px-6">
        <li className="py-1 list-none border-b border-slate-700">
          <a
            onClick={() => setMenu("dashboard")}
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <TbLayoutDashboard size={16} />
              Dashboard
            </span>
          </a>
        </li>
        <li className="py-1 list-none border-b border-slate-700">
          <Link
            href="/profile"
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <LuUser2 size={16} />
              Profile
            </span>
          </Link>
        </li>
        <li className="py-1 list-none border-b border-slate-700">
          <a
            onClick={() => setMenu("listings")}
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <FiTag size={16} />
              Listings
            </span>
          </a>
        </li>
        <li className="py-1 list-none border-b border-slate-700">
          <a
            onClick={() => setMenu("settings")}
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <BiCog size={16} />
              Settings
            </span>
          </a>
        </li>
        <li className="py-1 list-none border-b border-slate-700">
          <a
            onClick={() => setMenu("favorites")}
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <FaRegHeart size={16} />
              Favorites
            </span>
          </a>
        </li>
        <li className="py-1 list-none">
          <a
            href="/"
            className="relative flex items-center w-full gap-3 px-4 py-3 overflow-hidden text-sm text-white after:rounded-xl bg-opacity-30 after-gradient-purple-100-on-hover"
          >
            <span className="relative z-30 flex items-center gap-3">
              <FiLogOut size={16} />
              Log Out
            </span>
          </a>
        </li>
      </ul>

      <div className="flex flex-col items-center justify-center p-6">
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

export default Sidebar;
