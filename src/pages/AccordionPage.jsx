import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import { Accordion } from "../components/Accordion";

export const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "react",
      content: "used to build frontend",
    },
    {
      id: 2,
      label: "redux",
      content: "used for state management",
    },
    {
      id: 3,
      label: ".net",
      content: "used to build backend",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default AccordionPage;
