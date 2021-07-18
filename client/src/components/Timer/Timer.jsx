import React, { useState, useEffect } from 'react';

import classes from './Timer.module.css';

const Timer = ({ min, timerEnd }) => {
  const [[minutes, seconds], setTime] = useState([min, 0]);

  const tick = () => {
    if (minutes === 0 && seconds === 0) {
      timerEnd();
    } else if (seconds === 0) {
      setTime([minutes - 1, 59]);
    } else {
      setTime([minutes, seconds - 1]);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <div className={classes.timer}>
        {`${minutes.toString().padStart(2, '0')} : ${seconds
          .toString()
          .padStart(2, '0')}`}
      </div>
    </div>
  );
};

export default Timer;
