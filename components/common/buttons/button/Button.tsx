"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import twMerge from "@/utils/tw-merge-custom";

type ButtonSize = "xsmall" | "small" | "large";
type ButtonVariant = "primary" | "secondary";

export interface IButtonProps {
  className?: string;
  link?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  full?: boolean;
  disabled?: boolean;
  target?: string;
  children: React.ReactNode | string | number | null;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  onClick,
  link,
  target,
  size = "large",
  variant = "primary",
  disabled,
  full,
}: IButtonProps) => {

  const variantClasses = {
    primary: "before-gradient-purple-100 after-gradient-purple-200-on-hover",
    secondary: "after-gradient-purple-100-on-hover bg-purple-dark-400",
  };

  const sizeClasses = {
    xsmall: "px-6 h-7 text-xs rounded-all-full",
    small: "h-7 px-6 text-xs sm:h-9 sm:text-sm rounded-all-lg",
    large: "h-9 sm:h-14 text-xs sm:text-base rounded-full px-8 sm:px-12",
  };

  const getSizeClass = (size: ButtonSize) => sizeClasses[size] || "";
  const getVariantClass = (variant: ButtonVariant) =>
    variantClasses[variant] || "";

  const classes = clsx(
    "flex relative items-center justify-center text-white border-none overflow-hidden w-fit",
    {
      [getSizeClass(size)]: true,
      [getVariantClass(variant)]: true,
      "opacity-50 cursor-not-allowed": disabled,
      "w-full": full,
    },
    className,
  );

  if (link) {
    return (
      <Link className={twMerge(classes)} href={link} target={target}>
        <span className="relative z-30">{children}</span>
      </Link>
    );
  }

  return (
    <button className={twMerge(classes)} onClick={onClick} disabled={disabled}>
      <span className="relative z-30">{children}</span>
    </button>
  );
};

export default React.memo(Button);
