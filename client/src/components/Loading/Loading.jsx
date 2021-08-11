import React from 'react';

import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.container}>
      <div class={classes.spin}></div>
      <h1>Loading</h1>
    </div>
  );
};

export default Loading;
