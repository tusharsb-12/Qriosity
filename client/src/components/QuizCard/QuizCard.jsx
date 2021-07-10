import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './QuizCard.module.css';

const QuizCard = ({ name, description, timeLimit, quizId }) => {
  const history = useHistory();

  const redirect = () => {
    history.push(`/quiz/${quizId}`);
  };

  return (
    <div className={classes.cardContainer}>
      <p className={classes.quizName}>{name}</p>
      <pre>{description}</pre>
      <p>
        <em>Time limit: </em>
        {timeLimit} minutes
      </p>
      <button onClick={redirect}>Take quiz</button>
    </div>
  );
};

export default QuizCard;
