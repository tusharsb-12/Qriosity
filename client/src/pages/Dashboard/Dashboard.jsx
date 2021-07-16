import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllQuizzes,
  getCreatedQuiz,
  getAttemptedQuiz,
} from '../../redux/actions/quiz';

import classes from './Dashboard.module.css';

import QuizCard from '../../components/QuizCard/QuizCard';
import Loading from '../../components/Loading/Loading';

const Dashboard = ({ match }) => {
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state) => state.quizReducer);

  useEffect(() => {
    switch (match.url) {
      case '/dashboard':
        dispatch(getAllQuizzes());
        break;
      case '/created':
        dispatch(getCreatedQuiz());
        break;
      case '/attempted':
        dispatch(getAttemptedQuiz());
        break;
      default:
        break;
    }
    // dispatch(getAllQuizzes());
  }, []);

  return (
    <>
      {quizzes ? (
        <div className={classes.mainContainer}>
          {quizzes?.map((quiz, index) => (
            <QuizCard
              quiz={quiz}
              key={index}
              quizId={quiz._id}
              type={match.url}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;
