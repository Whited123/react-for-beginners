import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("난 항상 실행된다...");
  const iOnlyOnceUse = () => {
    console.log("난 단 한번 실행되지...");
  };
  useEffect(iOnlyOnceUse, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>날 눌러</button>
    </div>
  );
}

export default App;
