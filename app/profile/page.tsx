"use client";

import ProfileContent from "@/components/profile/ProfileContent";
import { ProfileProvider } from "@/providers/ProfileProvider";

const ProfilePage = () => {
  return (
    <ProfileProvider>
      <ProfileContent />
    </ProfileProvider>
  );
};

export default ProfilePage;
