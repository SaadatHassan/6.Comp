import React from "react";
import { Table } from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import { useSort } from "../hooks/use-sort";

export const SortableTable = (props) => {
  const { config, data } = props;

  const { sortBy, sortOrder, handleClick, sortedData } = useSort(config, data);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (label === sortBy && sortOrder === "asc") {
    return <GoArrowSmallUp />;
  } else if (label === sortBy && sortOrder === "desc") {
    return <GoArrowSmallDown />;
  }
};
