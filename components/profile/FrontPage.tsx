"use client";

import { useState } from "react";

import { FaHistory } from "react-icons/fa";

import Button from "@/components/common/buttons/button/Button";
import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";

export interface IFrontPageProps {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  isActivity: boolean;
  setActivity: (isActivity: boolean) => void;
}

const FrontPage = (props: IFrontPageProps) => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = props;

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);

  return (
    <div
      className="relative w-full h-96 rounded-3xl"
      style={{
        backgroundImage: `url(/images/front-page.png)`,
      }}
    >
      <div className="absolute flex items-center justify-end w-full gap-4 bottom-5 right-5">
        <FavoriteButton
          isFavorite={isFavorite}
          handleFavorite={handleFavorite}
        />
        <ShareButton />
        <Button onClick={handleActivity}>
          <span className="flex items-center justify-between gap-3">
            <FaHistory size={16} />
            Activity
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FrontPage;
