// we need to have the width dynamic to fill the progress bar
// to use animation use transform / translate x => calculate dynamically to add animation ie. progress - 100

import { useEffect, useState } from 'react';

export default function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // to check 0 - 100 val
      setAnimatedProgress(Math.min(100, Math.max(progress, 0)));
    }, 1000);
  }, [progress]);

  return (
    <div className="container-outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? 'green' : 'white',
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {animatedProgress}%
      </div>
    </div>
  );
}
