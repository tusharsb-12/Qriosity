import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizInfo } from '../../redux/actions/quiz';

import classes from './QuizInfo.module.css';
import Loading from '../../components/Loading/Loading';

const QuizInfo = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizInfo(match.params.quizId));
  }, []);

  const quizData = useSelector((state) => state.quizReducer.quiz);

  return (
    <>
      {quizData ? (
        <div className={classes.quizInfoContainer}>
          <h1>{quizData?.title}</h1>
          <div className={classes.infoDiv}>
            <h2>Description</h2>
            <br />
            <pre>{quizData?.description}</pre>
          </div>
          <div className={classes.infoDiv}>
            <h2>Instructions</h2>
            <br />
            <pre>{quizData?.instructions}</pre>
          </div>
          <div className={classes.infoDiv}>
            <p>
              <strong>Time Limit: </strong>
              {quizData?.timeLimit} minutes
            </p>
            <br />
            <p>
              <strong>Total marks: </strong>
              {quizData?.totalMarks}
            </p>
          </div>
          <a href={`/questions/${match.params.quizId}`}>Start Quiz</a>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default QuizInfo;
