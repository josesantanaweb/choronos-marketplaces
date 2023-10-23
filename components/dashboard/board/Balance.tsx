"use client";

import { useState } from "react";
import { FaHistory } from "react-icons/fa";

import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";
import Button from "@/components/common/buttons/button/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TABLET } from "@/constants";

const Balance = () => {
  const isTablet = useMediaQuery(`(min-width: ${TABLET}px)`);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActivity, setActivity] = useState<boolean>(false);

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);

  return (
    <div className="flex items-center justify-between mb-6 flex-wrap">
      <h4 className="mb-4 text-base lg:text-2xl text-white">Your Balance</h4>
      <div className="flex items-center gap-4">
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
          disabled
          size={!isTablet ? "small" : "large"}
        />
        <ShareButton disabled size={!isTablet ? "small" : "large"} />
        <Button
          onClick={handleActivity}
          disabled
          size={!isTablet ? "small" : "large"}
        >
          <span className="flex items-center justify-between gap-3">
            <FaHistory size={16} />
            Activity
          </span>
        </Button>
        <Button onClick={handleActivity} size={!isTablet ? "small" : "large"}>
          List NFT
        </Button>
      </div>
    </div>
  );
};

export default Balance;
