import React, { useReducer, useState } from "react";
import { Button } from "../components/Button";
import { Panel } from "../components/Panel";

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

export const CounterPage = ({ initialCount }) => {
  //   const [count, setCount] = useState(0);
  //   const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0,
  });

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch();
  };

  const handleDecrement = () => {
    // setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    //setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount((prev) => prev + value);
    // setValue(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.value || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button primary rounded>
          Add it
        </Button>
      </form>
    </Panel>
  );
};
