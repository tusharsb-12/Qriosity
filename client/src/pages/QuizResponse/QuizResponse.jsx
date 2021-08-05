import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizResponse } from '../../redux/actions/quiz';

import ResponseCard from '../../components/ResponseCard/ResponseCard';
import Loading from '../../components/Loading/Loading';
import classes from './QuizResponse.module.css';
import PieChart from '../../components/Chart/PieChart';

const QuizResponse = ({ match }) => {
  const dispatch = useDispatch();
  const { response: quizResponse } = useSelector(
    (state) => state.quizResponseReducer
  );

  useEffect(() => {
    dispatch(getQuizResponse(match.params.quizId));
  }, []);

  return (
    <>
      {quizResponse ? (
        <div>
          <h1 className={classes.score}>
            Your score: {`${quizResponse?.score} / ${quizResponse?.totalMarks}`}
          </h1>
          <PieChart
            correct={quizResponse.correctQuestions}
            total={quizResponse.response.length}
          />
          <br />
          <hr />
          <br />
          <h1 className={classes.responses}>Responses</h1>
          {quizResponse?.response.map((res, index) => (
            <ResponseCard res={res} key={index} number={index + 1} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default QuizResponse;
