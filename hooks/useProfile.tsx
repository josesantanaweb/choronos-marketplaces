import { useContext } from "react";
import { ProfileContext } from "@/providers/ProfileProvider";

export const useProfile = () => {
  const {
    activityTab,
    setActivityTab,
    isFavorite,
    setIsFavorite,
    isActivity,
    setActivity,
  } = useContext(ProfileContext);

  return {
    activityTab,
    setActivityTab,
    isFavorite,
    setIsFavorite,
    isActivity,
    setActivity,
  };
};
