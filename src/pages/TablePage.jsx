import React from "react";
import { Table } from "../components/Table";

export const TablePage = () => {
  const fruits = [
    { name: "Apple", color: "bg-red-500", score: 7 },
    { name: "Orange", color: "bg-orange-500", score: 9 },
    { name: "Banana", color: "bg-yellow-500", score: 6 },
    { name: "Watermelon", color: "bg-green-500", score: 10 },
    { name: "Grapes", color: "bg-purple-500", score: 10 },
  ];
  return (
    <div>
      <Table data={fruits} />
    </div>
  );
};
