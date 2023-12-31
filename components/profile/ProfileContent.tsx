"use client";

import FrontPage from "./FrontPage";
import Public from "./public/Public";
import Activity from "./activity/Activity";

import { useProfile } from "@/hooks/useProfile";

const ProfileContent = () => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = useProfile();

  return (
    <div className="relative w-full">
      <div className="global-container py-14 relative">
        <FrontPage
          setIsFavorite={setIsFavorite}
          isFavorite={isFavorite}
          isActivity={isActivity}
          setActivity={setActivity}
        />
        {isActivity && !isFavorite ? (
          <Activity
            setIsFavorite={setIsFavorite}
            isFavorite={isFavorite}
            isActivity={isActivity}
            setActivity={setActivity}
          />
        ) : (
          <Public
            setIsFavorite={setIsFavorite}
            isFavorite={isFavorite}
            isActivity={isActivity}
            setActivity={setActivity}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
