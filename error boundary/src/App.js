import "./styles.css";
import { useReducer } from "react";
import ErrorBoundary from "./ErrorBoundary";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default function App() {
  const initialState = {
    count: 0
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({type:'DECREMENT'})
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>+</button>
      <h2>{state.count}</h2>
      <button onClick={decrement}>-</button>
    </div>
  );
}
