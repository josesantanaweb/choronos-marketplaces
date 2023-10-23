"use client";

import React from "react";
import UserInfo from "../UserInfo";
import ActivityContent from "../activity/ActivityContent";

const Activity = () => {
  return (
    <div className="clas">
      <div className="flex flex-wrap justify-between">
        <UserInfo />
        <ActivityContent />
      </div>
    </div>
  );
};

export default Activity;
