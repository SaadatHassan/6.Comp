import React from "react";
import { useState } from "react";

export const useSort = (config, data) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  // in professional projects, instead of "handleClick", it should be named more meaningfully.
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const aValue = sortValue(a);
      const bValue = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof aValue === "string") {
        return aValue.localeCompare(bValue) * reverseOrder;
      } else {
        return (aValue - bValue) * reverseOrder;
      }
    });
  }

  return { handleClick, sortOrder, sortBy, sortedData };
};
