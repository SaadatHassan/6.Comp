import { useState } from "react";
import { DropDown } from "../components/DropDown";

export const DropDownPage = () => {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <DropDown value={selection} onChange={handleSelection} options={options} />
  );
};
