"use client";

import HomeContent from "@/components/home/HomeContent";
import HomeProvider from "@/providers/HomeProvider";

const HomePage = () => {
  return (
    <HomeProvider>
      <HomeContent />
    </HomeProvider>
  );
};

export default HomePage;
