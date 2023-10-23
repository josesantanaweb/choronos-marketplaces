"use client";

import React from "react";

const TableHead = () => {
  return (
    <div className="grid grid-cols-6 items-center py-4 px-6">
      <span className="text-white">Type</span>
      <span className="text-white">Items</span>
      <span className="text-white">Price</span>
      <span className="text-white">From</span>
      <span className="text-white">To</span>
      <span className="text-white">Date</span>
    </div>
  );
};

export default TableHead;
