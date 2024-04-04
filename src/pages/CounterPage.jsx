import React, { useReducer } from "react";
import { Button } from "../components/Button";
import { Panel } from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const VALUE_TO_ADD = "value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

// reducer function
const reducer = (state, action) => {
  // with Immer
  // case INCREMENT:
  // state.count = state.count + 1;
  // return

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case VALUE_TO_ADD:
      return {
        ...state,
        value: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.value,
        value: 0,
      };
    default:
      throw new Error("unexpected action type" + action.type); //or we can just return state
  }

  // if (action.type === INCREMENT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (action.type === DECREMENT) {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }
  // if (action.type === VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     value: action.payload,
  //   };
  // }
  // return state;
};

export const CounterPage = ({ initialCount }) => {
  //   const [count, setCount] = useState(0);
  //   const [value, setValue] = useState(0);

  // second argument in the useReducer hook is initial state values
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0,
  });

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT,
    });
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    //setValue(value);

    dispatch({
      type: VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount((prev) => prev + value);
    // setValue(0);

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
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
