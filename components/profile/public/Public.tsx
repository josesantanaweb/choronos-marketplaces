"use client";

import UserInfo from "../UserInfo";
import UserInfoMobile from "../UserInfoMobile";
import Favorites from "../favorites/Favorites";
import PublicContent from "./PublicContent";

export interface IPublicProps {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  isActivity: boolean;
  setActivity: (isActivity: boolean) => void;
}

const Public = (props: IPublicProps) => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = props;

  return (
    <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
      <UserInfo />
      <UserInfoMobile
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        isActivity={isActivity}
        setActivity={setActivity}
      />
      <div className="w-full md:w-3/4 mt-6">
        {isFavorite ? <Favorites /> : <PublicContent />}
      </div>
    </div>
  );
};

export default Public;
