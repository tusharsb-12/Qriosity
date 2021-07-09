import React from 'react';

import classes from './QuizCard.module.css';

const QuizCard = ({ name, description, timeLimit }) => {
  return (
    <div className={classes.cardContainer}>
      <p className={classes.quizName}>{name}</p>
      <pre>{description}</pre>
      <p>
        <em>Time limit: </em>
        {timeLimit} minutes
      </p>
      <button>Take quiz</button>
    </div>
  );
};

export default QuizCard;
