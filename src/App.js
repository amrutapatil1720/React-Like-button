import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(100);

  const handleClick = () => {
    if (count === 100) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Like Button</h1>
      <button
        type="button"
        className={"like-button liked" + (count === 100 ? "liked" : "")}
        onClick={handleClick}
      >
        Like | <span className="likes-counter">{count}</span>
      </button>
    </div>
  );
}
