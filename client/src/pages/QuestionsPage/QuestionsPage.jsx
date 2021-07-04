import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux/actions/questions';

import QuestionCard from '../../components/QuestionCard/QuestionCard';

import classes from './QuestionsPage.module.css';

const QuestionsPage = ({ match }) => {
  const [number, setNumber] = useState(0);
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions(match.params.quizId));
  }, []);

  const { questions } = useSelector((state) => state.questionReducer);

  const onChange = (e, index) => {
    const values = [...questions];
    const answers = [...values[number].answers];
    answers[index].isSelected = e.target.checked;

    setResponse(values);
  };

  const handleNext = (e) => {
    if (number === questions.length - 1) {
      setNumber(0);
    } else {
      setNumber((number) => number + 1);
    }
  };

  return (
    <div className={classes.questionPageContainer}>
      {questions ? (
        <QuestionCard
          question={questions[number]}
          handleNext={handleNext}
          onChange={onChange}
          number={number}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuestionsPage;
