import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux/actions/questions';

import QuestionCard from '../../components/QuestionCard/QuestionCard';

import classes from './QuestionsPage.module.css';

const QuestionsPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions(match.params.quizId));
  }, []);

  const questionsData = useSelector((state) => state.questionReducer);

  return (
    <div className={classes.questionPageContainer}>
      {questionsData.questions?.map((question, index) => {
        return <QuestionCard question={question} key={index} number={index} />;
      })}
    </div>
  );
};

export default QuestionsPage;
