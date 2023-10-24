"use client";

import { useState } from "react";
import { FaHistory } from "react-icons/fa";

import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";
import Button from "@/components/common/buttons/button/Button";
import OfferItem from "@/components/common/offers-item/OfferItem";


const Offers = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActivity, setActivity] = useState<boolean>(false);

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);

  return (
    <div className="offers w-full">
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <h4 className="mb-4 text-base lg:text-2xl text-white">Offers</h4>
        <div className="flex items-center gap-4">
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
          <Button onClick={handleActivity}>List NFT</Button>
        </div>
      </div>
      <OfferItem />
      <OfferItem />
    </div>
  );
};

export default Offers;
