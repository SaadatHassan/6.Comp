import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // we created our event handler like this because we are using map over items
  const handleClick = (nextIndex) => {
    //functional state update. We do this when our state update depends on the previous state value.
    //we are guaranteed to have a current value
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
    //normal state update
    // if (expandedIndex === nextIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};
