import React from "react";
import { Table } from "../components/Table";

export const TablePage = () => {
  const fruits = [
    { name: "apple", color: "bg-red-400", score: 7 },
    { name: "orange", color: "bg-orange-400", score: 9 },
    { name: "banana", color: "bg-yellow-400", score: 6 },
    { name: "Lime", color: "bg-green-400", score: 7 },
  ];

  return (
    <div>
      <Table data={fruits} />
    </div>
  );
};
