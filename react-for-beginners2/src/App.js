import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("난 항상 실행된다...");
  useEffect(() => {
    console.log("난 한번만 실행되지..");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("난", keyword, "를 검색하고 싶어");
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="설치 히어..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>날 눌러</button>
    </div>
  );
}

export default App;
