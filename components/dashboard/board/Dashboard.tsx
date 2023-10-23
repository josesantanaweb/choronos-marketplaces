"use client";

import Balance from "./Balance";
import Listings from "./Listings";
import Activity from "./Activity";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Balance />
      <Listings />
      <Activity />
    </div>
  );
};

export default Dashboard;
