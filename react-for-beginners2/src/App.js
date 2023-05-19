import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("간다");
  }
  function hiFn() {
    console.log("내가 여기왔다.");
    return byFn;
  }
  useEffect(hiFn, []);

  return <h1>하이</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Showing"}</button>
    </div>
  );
}

export default App;
