"use client";

import { useState } from "react";
import { BiWalletAlt } from "react-icons/bi";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";
import Button from "@/components/common/buttons/button/Button";
import Menu from "@/components/header/menu/Menu";
import SearchBar from "@/components/common/search/SearchBar";
import UserBalance from "@/components/header/UserBalance";
import Notifications from "@/components/header/notifications/Notifications";
import Logo from "@/components/header/logo/Logo";

import { menu, menuUser, notifications } from "@/data";

const Header = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <header className="global-container bg-[#1a1924] md:bg-transparent flex items-center justify-center gap-2 lg:gap-4 md:py-8 flex-col-reverse md:flex-row relative z-50">
      <Logo className="md:block hidden" />
      <Menu menu={menu}/>

      <div className="flex items-center justify-center gap-1 lg:gap-4 w-full">
        <div className="flex w-full">
          <SearchBar />
        </div>

        {!isLogged ? (
          <Button
            onClick={() => setIsLogged(true)}
          >
            <div className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
              <BiWalletAlt size={21} />
              <span>Connect Wallet</span>
            </div>
          </Button>
        ) : (
          <UserBalance
            code="0xa1b2c3d4e1d3f1"
            avatar="avatar"
            ethereumBalance={10}
            chronosBalance={20}
            menu={menuUser}
          />
        )}
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto">
        <Logo isMobile={true} className="block md:hidden mr-auto" />

        <div className="flex flex-row-reverse md:flex-row items-center gap-2">
          <Notifications notifications={notifications} />
          <ButtonIcon icon="graph" />
        </div>
        <Menu menu={menu} isMobile={true} className="block lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
