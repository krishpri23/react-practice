/**
 * statement: build traffic lights with timers, it must display light for each interval and move onto to display next color
 * additionally, user can change the active light and increase intervals
 ** when we increase time delay, we need to add on top of the current time not restart the timer of the light
 */

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trafficLight, setTrafficLight] = useState({
    red: {
      time: 5,
      next: "yellow",
    },
    yellow: {
      time: 2,
      next: "green",
    },
    green: {
      time: 5,
      next: "red",
    },
  });

  const [activeLight, setActiveLight] = useState("red");
  const [delay, setDelay] = useState(0);
  const [lapsedTime, setLapsedTime] = useState(0);

  // this logic is for setting light color
  useEffect(() => {
    const interval = setTimeout(() => {
      setActiveLight((prev) => trafficLight[prev].next);
    }, trafficLight[activeLight].time * 1000);

    return () => {
      console.log("this is clearing");
      clearInterval(interval);
    };
  }, [activeLight, delay, trafficLight]);

  const handleLight = (light) => {
    setActiveLight(light);
  };

  const handleDelay = (e, time) => {
    if (e.key === "Enter") {
      setDelay(time);
    }
  };

  return (
    <div>
      <h1> Traffic light </h1>
      <h2> {lapsedTime} </h2>
      <div className="user-input">
        {" "}
        <button name="red" onClick={() => handleLight("red")}>
          Red
        </button>
        <button name="yellow" onClick={() => handleLight("yellow")}>
          Yellow
        </button>
        <button name="green" onClick={() => handleLight("green")}>
          Green
        </button>
      </div>

      <div className="time">
        <h1> Increase the delay </h1>
        <input
          type="number"
          name="delay-timer"
          id="delay-timer"
          defaultValue={0}
          onKeyDown={(e) => handleDelay(e, Number(e.target.value))}
        />
      </div>

      <p className={`${activeLight === "red" ? "light red" : "light default"}`}>
        red
      </p>
      <p
        className={`${
          activeLight === "yellow" ? "light yellow" : "light default"
        }`}
      >
        yellow
      </p>
      <p
        className={`${
          activeLight === "green" ? "light green" : "light default"
        }`}
      >
        green
      </p>
    </div>
  );
}

export default App;
