"use client";

import React from "react";
import clsx from "clsx";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

type FavoriteSize = "small" | "large";

interface FavoriteProps {
  isFavorite: boolean;
  disabled?: boolean;
  handleFavorite: () => void;
  size?: FavoriteSize;
}

const Favorite = ({
  isFavorite,
  handleFavorite,
  size = "large",
  disabled,
}: FavoriteProps) => {

  const sizeClasses = {
    small: "h-[35px] w-[35px] rounded-xl text-lg",
    large:"h-[35px] w-[38px] rounded-all-10 text-base sm:h-[55px] sm:w-[55px] sm:rounded-all-2xl md:text-xl",
  };

  const getSizeClass = (size: FavoriteSize) => sizeClasses[size] || "";

  const classes = clsx(
    "relative flex overflow-hidden items-center justify-center text-white before-gradient-purple-100 after-gradient-purple-200-on-hover",
    {
      [getSizeClass(size)]: true,
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <button
      onClick={handleFavorite}
      className={classes}
      disabled={disabled || false}
      data-testid="button"
    >
      <span className="relative z-30">
        {isFavorite ? (
          <FaHeart data-testid="fa-heart" />
        ) : (
          <FaRegHeart data-testid="fa-reg-heart" />
        )}
      </span>
    </button>
  );
};

export default React.memo(Favorite);
