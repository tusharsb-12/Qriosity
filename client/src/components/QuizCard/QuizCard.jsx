import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './QuizCard.module.css';

const QuizCard = ({ quiz, type }) => {
  const history = useHistory();

  const redirect = () => {
    history.push(`/quiz/${quiz._id}`);
  };

  const toQuizResponse = () => {
    history.push(`/quiz-response/${quiz.quiz}`);
  };

  return (
    <div className={classes.cardContainer}>
      <p className={classes.quizName}>{quiz.title}</p>
      {type === '/attempted' ? (
        <>
          <p>Score: {quiz.score}</p>
          <button onClick={toQuizResponse}>See quiz response</button>
        </>
      ) : (
        <>
          <pre>{quiz.description}</pre>
          <p>
            <em>Time limit: </em>
            {quiz.timeLimit} minutes
            <br />
          </p>
          <button onClick={redirect}>Take quiz</button>
        </>
      )}
    </div>
  );
};

export default QuizCard;
