import React from "react";
import { Table } from "../components/Table";

export const TablePage = () => {
  const fruits = [
    { name: "apple", color: "bg-red-400", score: 7 },
    { name: "orange", color: "bg-orange-400", score: 9 },
    { name: "banana", color: "bg-yellow-400", score: 6 },
    { name: "Lime", color: "bg-green-400", score: 7 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={fruits} config={config} keyFn={keyFn} />
    </div>
  );
};
