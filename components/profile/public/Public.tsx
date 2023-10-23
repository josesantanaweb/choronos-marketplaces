"use client";

import UserInfo from "../UserInfo";
import Favorites from "../favorites/Favorites";
import PublicContent from "./PublicContent";

export interface IPublicProps {
  isFavorite: boolean;
}

const Public = (props: IPublicProps) => {
  const { isFavorite } = props;

  return (
    <div className="flex items-start gap-5">
      <UserInfo />
      <div className="w-3/4 mt-6">
        {isFavorite ? <Favorites /> : <PublicContent />}
      </div>
    </div>
  );
};

export default Public;
