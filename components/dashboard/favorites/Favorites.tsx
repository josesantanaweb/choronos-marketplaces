"use client";

import { useState } from "react";
import { FaHistory } from "react-icons/fa";

import Tabs from "@/components/common/tabs/Tabs";
import FilterBy from "@/components/common/filterby/FilterBy";
import Card from "@/components/common/card/Card";
import Collection from "./Collection";
import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";
import Button from "@/components/common/buttons/button/Button";

import { recently } from "@/data";

const Favorites = () => {
  const [selected, setSelected] = useState<string>("All");
  const [filter, setFilter] = useState<string>("");
  const options = ["All", "Offers", "Bids"];
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActivity, setActivity] = useState<boolean>(false);

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);

  return (
    <div className="favorites">
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <h4 className="mb-4 text-base lg:text-2xl text-white">Favorites</h4>
        <div className="flex items-center gap-4">
          <FavoriteButton
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
            disabled
          />
          <ShareButton disabled />
          <Button onClick={handleActivity} disabled>
            <span className="flex items-center justify-between gap-3">
              <FaHistory size={16} />
              Activity
            </span>
          </Button>
          <Button onClick={handleActivity}>List NFT</Button>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-6 flex-col md:flex-row">
        <Tabs
          options={options}
          selected={selected}
          setSelected={setSelected}
          numberTabs={3}
        />
        <FilterBy setFilter={setFilter} />
      </div>
      <Collection />
      <div className="my-3">
        <h4 className="text-base lg:text-2xl text-white mb-4">Items</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recently.map((nft, index: number) => (
            <Card nft={nft} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
