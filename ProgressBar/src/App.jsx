import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(0);
  const [calculatedProgress, setCalculatedProgress] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      // setValue((prev) => prev + 1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="main">
      <h1> Progress Bar</h1>
      <div
        className="progress__bar"
        style={{ width: `${percent}` }}
        // style={{ transform: `translateX(${calculatedProgress - 100}%)` }}
      >
        <span> {percent} % </span>
      </div>
    </div>
  );
}

export default App;
