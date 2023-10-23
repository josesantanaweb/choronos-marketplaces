"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import ChronosLogo from "@/assets/components/header/chronos-logo.svg";
import ChronosLogoIcono from "@/assets/components/header/chronos-logo-icono.svg";

import twMerge from "@/utils/tw-merge-custom";

interface ILogoProps {
  className?: string;
  isMobile?: boolean;
}

// eslint-disable-next-line react/display-name
const Logo = (props: ILogoProps) => {
  const { className, isMobile } = props;

  return (
    <Link href="/" aria-label="Home" className={twMerge("shrink-0", className)}>
      {isMobile ? (
        <Image
          src={ChronosLogoIcono}
          alt="Chronos logo - Link to home page"
          width={24}
          height={24}
          className="sm:w-[45px] sm:h-[45px] w-[24px] h-[24px]"
          priority
        />
      ) : (
        <Image
          src={ChronosLogo}
          alt="Chronos logo - Link to home page"
          width={220}
          height={45}
          className="w-[180px] lg:w-auto object-contain"
          priority
        />
      )}
    </Link>
  );
};

export default memo(Logo);
