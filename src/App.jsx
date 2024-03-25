import { useState } from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: 1,
      label: "react",
      content: "used to buid frontend",
    },
    {
      id: 2,
      label: "redux",
      content: "used for state managemnt",
    },
    {
      id: 3,
      label: ".net",
      content: "used to buid backtend",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default App;
