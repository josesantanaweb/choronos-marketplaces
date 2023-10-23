"use client";

import TableItem from "@/components/common/table/TableItem";
import TableHead from "@/components/common/table/TableHead";

import { offers } from "@/data";

const Activity = () => {
  return (
    <div>
      <TableHead />
      {offers.map((row, index) => (
        <TableItem key={index} row={row} />
      ))}
    </div>
  );
};

export default Activity;
