import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizResponse } from '../../redux/actions/quiz';

import ResponseCard from '../../components/ResponseCard/ResponseCard';
import Loading from '../../components/Loading/Loading';
import classes from './QuizResponse.module.css';

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
          <h1 className={classes.score}>Your score: {quizResponse?.score}</h1>
          {quizResponse?.response.map((res, index) => (
            <ResponseCard res={res} key={index} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default QuizResponse;
