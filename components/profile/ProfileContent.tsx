"use client";

import FrontPage from "./FrontPage";
import Public from "./public/Public";
import Activity from "./activity/Activity";

import { useProfile } from "@/hooks/useProfile";

const ProfileContent = () => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = useProfile();

  return (
    <div className="relative w-full">
      <div className="container mx-auto py-14">
        <FrontPage
          setIsFavorite={setIsFavorite}
          isFavorite={isFavorite}
          isActivity={isActivity}
          setActivity={setActivity}
        />
        {isActivity && !isFavorite ? (
          <Activity />
        ) : (
          <Public isFavorite={isFavorite} />
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
