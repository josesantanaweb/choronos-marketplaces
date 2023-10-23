"use client";

import React from "react";
import Image from "next/image";

import ButtonIcon from "@/components/common/buttons/icon-button/IconButton";

import Chronos from "@/assets/components/footer/logo-isotipe.png";

const Footer = () => {
  return (
    <footer>
      <div className="container flex items-center justify-between py-8 m-auto flex-col md:flex-row">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Image src={Chronos} width="55" height="55" alt="logo" />
          <div>
            <p className="mb-2 text-xs text-white">
              Chronos © All rights reserved
            </p>
            <span className="px-5 py-2 text-xs text-gray-400 rounded-full bg-purple-dark-300">
              Version: 1b3dfc2
            </span>
          </div>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <ButtonIcon icon="eagle" size="small" />
          </li>
          <li>
            <ButtonIcon icon="gecko" size="small" />
          </li>
          <li>
            <ButtonIcon icon="twitter" size="small" />
          </li>
          <li>
            <ButtonIcon icon="discord" size="small" />
          </li>
          <li>
            <ButtonIcon icon="telegram" size="small" />
          </li>
          <li>
            <ButtonIcon icon="medium" size="small" />
          </li>
          <li>
            <ButtonIcon icon="git" size="small" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
