import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizInfo } from '../../redux/actions/quiz';

import classes from './QuizInfo.module.css';

const QuizInfo = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuizInfo(match.params.quizId));
  }, []);
  const quizData = useSelector((state) => state.quizReducer.quiz);

  return (
    <div className={classes.quizInfoContainer}>
      <h1>{quizData?.title}</h1>
      <div className={classes.infoDiv}>
        <h2>Description</h2>
        <br />
        <p>{quizData?.description}</p>
      </div>
      <div className={classes.infoDiv}>
        <h2>Instructions</h2>
        <br />
        <p>{quizData?.instructions}</p>
      </div>
      <div className={classes.infoDiv}>
        <p>
          <strong>Time Limit: </strong>
          {quizData?.timeLimit} minutes
        </p>
        <br />
        <p>
          <strong>Author: </strong>Tushar Bauskar
        </p>
      </div>
      <button>Start Quiz</button>
    </div>
  );
};

export default QuizInfo;
