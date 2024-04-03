import { Route } from "./components/Route";
import { AccordionPage } from "./pages/AccordionPage";
import { ButtonPage } from "./pages/ButtonPage";
import { DropDownPage } from "./pages/DropDownPage";
import { SideBar } from "./components/SideBar";
import { ModalPage } from "./pages/ModalPage";
import { TablePage } from "./pages/TablePage";
import { CounterPage } from "./pages/CounterPage";

const App = () => {
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
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={0} />
        </Route>
      </div>
    </div>
  );
};

export default App;
