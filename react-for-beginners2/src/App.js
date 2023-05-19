import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>React가, 우리 가족이 되었다.</h1>
      <Button text={"계속하기"} />
    </div>
  );
}

export default App;
