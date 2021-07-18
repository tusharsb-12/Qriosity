import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ScorePage.module.css';

const ScorePage = () => {
  const quizData = useSelector((state) => state.quizReducer);

  return (
    <div className={classes.scoreContainer}>
      <h1>Your score is</h1>
      <div className={classes.scoreBox}>
        <p>
          {quizData.score === null
            ? 0
            : `${quizData.score} / ${quizData.totalMarks}`}
        </p>
      </div>
      <a href='/dashboard'>Go to dashboard {'>'}</a>
    </div>
  );
};

export default ScorePage;
