import "./styles.css";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={inputValue} onChange={handleChange} />
      {debounceValue}
    </div>
  );
}
