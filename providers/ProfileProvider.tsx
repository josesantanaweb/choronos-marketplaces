import { createContext, useState } from "react";

interface ProfileContextProps {
  activityTab: string;
  setActivityTab: (activityTab: string) => void;
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
  isActivity: boolean;
  setActivity: (isActivity: boolean) => void;
}

interface ProfileProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ProfileContext = createContext<ProfileContextProps>(
  {} as ProfileContextProps
);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [activityTab, setActivityTab] = useState<string>("All");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isActivity, setActivity] = useState<boolean>(false);
  return (
    <ProfileContext.Provider
      value={{
        activityTab,
        setActivityTab,
        isFavorite,
        setIsFavorite,
        isActivity,
        setActivity,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
