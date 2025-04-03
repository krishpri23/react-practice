/**
 * statement: build traffic lights with timers, it must display light for each interval and move onto to display next color
 * additionally, user can change the active light and increase intervals
 ** when we increase time delay, we need to add on top of the current time not restart the timer of the light
 */

import { useState, useEffect } from 'react';

const TrafficLights = () => {
  const [trafficLight, setTrafficLight] = useState({
    red: {
      time: 5,
      next: 'yellow',
    },
    yellow: {
      time: 2,
      next: 'green',
    },
    green: {
      time: 5,
      next: 'red',
    },
  });

  const [activeLight, setActiveLight] = useState('red');
  const [delay, setDelay] = useState(0);
  const [lapsedTime, setLapsedTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  // this logic is for setting light color
  useEffect(() => {
    // This works when the timeout is completed so when timer is 10s it runs the setActive by moving onto next light
    // const interval = setTimeout(() => {
    //   setActiveLight((prev) => trafficLight[prev].next);
    // }, trafficLight[activeLight].time * 1000);

    //In terms of adding delay, we use interval because we need to run at every interval
    const interval = setInterval(() => {
      setLapsedTime((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('this is clearing');
      clearInterval(interval);
      setLapsedTime(0);
    };
  }, [activeLight, delay, trafficLight]);

  useEffect(() => {
    if (lapsedTime >= trafficLight[activeLight].time) {
      setActiveLight((prev) => trafficLight[prev].next);
    }
  }, [lapsedTime]);

  useEffect(() => {
    setRemainingTime(trafficLight[activeLight].time + delay);
    setLapsedTime(0);
  }, [delay, trafficLight, activeLight]);

  const handleLight = (light) => {
    setActiveLight(light);
    setDelay(0);
  };

  const handleDelay = (e, time) => {
    if (e.key === 'Enter') {
      setDelay((prevTime) => prevTime + time);
    }
  };

  return (
    <div>
      <h1> Traffic light </h1>
      <h2> {lapsedTime} </h2>
      <div className="user-input">
        {' '}
        <button name="red" onClick={() => handleLight('red')}>
          Red
        </button>
        <button name="yellow" onClick={() => handleLight('yellow')}>
          Yellow
        </button>
        <button name="green" onClick={() => handleLight('green')}>
          Green
        </button>
      </div>

      <div className="time">
        <input
          type="number"
          name="delay-timer"
          id="delay-timer"
          defaultValue={0}
          onKeyDown={(e) => handleDelay(e, Number(e.target.value))}
        />
      </div>

      <p className={`${activeLight === 'red' ? 'light red' : 'light default'}`}>
        red
      </p>
      <p
        className={`${
          activeLight === 'yellow' ? 'light yellow' : 'light default'
        }`}
      >
        yellow
      </p>
      <p
        className={`${
          activeLight === 'green' ? 'light green' : 'light default'
        }`}
      >
        green
      </p>
    </div>
  );
};

export default TrafficLights;
