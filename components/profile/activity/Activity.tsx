"use client";

import React from "react";
import UserInfo from "../UserInfo";
import UserInfoMobile from "../UserInfoMobile";
import ActivityContent from "../activity/ActivityContent";

export interface IActivityProps {
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  isActivity: boolean;
  setActivity: (isActivity: boolean) => void;
}


const Activity = (props: IActivityProps) => {
  const { isFavorite, setIsFavorite, isActivity, setActivity } = props;
  return (
    <div className="clas">
      <div className="flex flex-wrap justify-between">
        <UserInfo />
        <UserInfoMobile
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          isActivity={isActivity}
          setActivity={setActivity}
        />
        <ActivityContent />
      </div>
    </div>
  );
};

export default Activity;
