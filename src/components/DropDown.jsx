import React from "react";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Panel } from "./Panel";

export const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bgg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleSelect}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};
