"use client";

import { useState } from "react";
import { FaHistory } from "react-icons/fa";

import FavoriteButton from "@/components/common/buttons/favorite/FavoriteButton";
import ShareButton from "@/components/common/buttons/share/ShareButton";
import Button from "@/components/common/buttons/button/Button";
import Input from "@/components/common/inputs/input/Input";
import Textarea from "@/components/common/inputs/textarea/Textarea";
import Upload from "./Upload";

const Favorites = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActivity, setActivity] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<any>();
  const [cover, setCover] = useState<any>();

  const handleFavorite = () => setIsFavorite(!isFavorite);

  const handleActivity = () => setActivity(!isActivity);

  const handleChangeAvatar = (e: any) => setAvatar(URL.createObjectURL(e.target.files[0]));
  const handleChangeCover = (e: any) => setCover(URL.createObjectURL(e.target.files[0]));

  return (
    <div className="settings">
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <h4 className="mb-4 text-base lg:text-2xl text-white">Settings</h4>
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
      <h4 className="mb-4 text-lg text-white">Profile</h4>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <Input
          placeholder="Short Name"
          name="shortName"
          label="Short Name"
          onChange={() => ({})}
        />
        <Input
          placeholder="Short Intro"
          name="ShortIntro"
          label="Short Intro"
          onChange={() => ({})}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <Upload
          onChange={handleChangeAvatar}
          label="Avatar"
          file={avatar}
          description="Upload your profile picture"
        />
        <Upload
          onChange={handleChangeCover}
          label="Cover Photo"
          file={cover}
          description="Upload your cover image"
          isCover
        />
      </div>

      <div className="grid grid-cols-1 gap-5 mb-6">
        <Textarea
          placeholder="Short Description"
          name="shortDescription"
          label="Short Description (135 Characters Max)"
          onChange={() => ({})}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 mb-6">
        <Input
          placeholder="Website"
          name="website"
          label="Website"
          onChange={() => ({})}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <Input
          placeholder="Twitter"
          name="twitter"
          label="Twitter"
          onChange={() => ({})}
        />
        <Input
          placeholder="Instagram"
          name="instagram"
          label="Instagram"
          onChange={() => ({})}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <Input
          placeholder="Youtube"
          name="youtube"
          label="Youtube"
          onChange={() => ({})}
        />
        <Input
          placeholder="Discord"
          name="discord"
          label="Discord"
          onChange={() => ({})}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <Input
          placeholder="Medium"
          name="medium"
          label="Medium"
          onChange={() => ({})}
        />
        <Input
          placeholder="Reddit"
          name="reddit"
          label="Reddit"
          onChange={() => ({})}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex md:justify-end">
          <Button>Save Changes</Button>
        </div>
        <div className="flex justify-end md:justify-start">
          <Button variant="secondary">Restort Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
