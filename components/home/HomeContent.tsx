"use client";

import Main from "./main/Main";
import Deals from "./deals/Deals";
import RecentlySold from "./sold/Sold";
import RecentListed from "./listed/Listed";
import Trade from "./trade/Trade";
import Welcome from "./welcome/Welcome";

const HomeContent = () => {
  return (
    <>
      <Main />
      <Deals />
      <RecentlySold />
      <RecentListed />
      <Trade />
      <Welcome />
    </>
  );
};

export default HomeContent;
