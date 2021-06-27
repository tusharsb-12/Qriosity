import React from 'react';

import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.heroText}>
        Create awesome quizzes
        <br />
        Attempt quizzes created by others
        <br />
        Analyse you scores
      </h1>
    </div>
  );
};

export default Home;
