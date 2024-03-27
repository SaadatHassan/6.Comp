import { useState } from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";
import { DropDown } from "./components/DropDown";

const App = () => {
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

export default App;
