"use client";

import { useState } from "react";
import { FaHistory } from "react-icons/fa";

import Sidebar from "./Sidebar";
import Listings from "./listings/Listings";
import Favorites from "./favorites/Favorites";
import Dashboard from "./board/Dashboard";
import Settings from "./settings/Settings";


const DashboardContent = () => {
  const [menu, setMenu] = useState("dashboard")
  return (
    <div className="relative w-full">
      <div className="absolute w-full h-[450px] bg-mountains"></div>
      <div className="global-container py-14 relative z-40">
        <div className="flex gap-5 flex-col lg:flex-row">
          <Sidebar setMenu={setMenu} />
          <div className="w-full">
            {menu === "dashboard" && <Dashboard />}
            {menu === "favorites" && <Favorites />}
            {menu === "listings" && <Listings />}
            {menu === "settings" && <Settings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
