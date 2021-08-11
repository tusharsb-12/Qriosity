import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux/actions/questions';
import { submitQuizResponse } from '../../redux/actions/quiz';

import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Loading from '../../components/Loading/Loading';
import Timer from '../../components/Timer/Timer';

import classes from './QuestionsPage.module.css';

const QuestionsPage = ({ match }) => {
  const [number, setNumber] = useState(0);
  const { questions, quizId, timeLimit } = useSelector(
    (state) => state.questionReducer
  );
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getQuestions(match.params.quizId));
  }, []);

  const onChange = (e, index) => {
    const values = [...questions];
    const answers = [...values[number].answers];
    answers[index].isSelected = e.target.checked;

    setResponse(values);
  };

  const nextQuestion = (e) => {
    if (number === questions.length - 1) {
      setNumber(0);
    } else {
      setNumber((number) => number + 1);
    }
  };

  const prevQuestion = (e) => {
    if (number === 0) {
      setNumber((number) => questions.length - 1);
    } else {
      setNumber((number) => number - 1);
    }
  };

  const submitQuiz = (e) => {
    dispatch(submitQuizResponse({ quizId, response }, history));
  };

  const timeoutFunction = (e) => {
    submitQuiz();
  };

  return (
    <>
      {questions ? (
        <div>
          <Timer timeLimit={timeLimit} timeoutFunction={timeoutFunction} />
          <div className={classes.questionContainer}>
            {questions ? (
              <QuestionCard
                question={questions[number]}
                handleNext={nextQuestion}
                handlePrev={prevQuestion}
                onChange={onChange}
                number={number}
              />
            ) : (
              <></>
            )}
            <div></div>
          </div>
          <button onClick={submitQuiz} className={classes.submitButton}>
            Submit quiz
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default QuestionsPage;
