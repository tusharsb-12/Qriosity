import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllQuizzes,
  getCreatedQuiz,
  getAttemptedQuiz,
} from '../../redux/actions/quiz';

import classes from './QuizzesPage.module.css';

import QuizCard from '../../components/QuizCard/QuizCard';
import Loading from '../../components/Loading/Loading';

const QuizzesPage = ({ match }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state) => state.quizReducer);

  useEffect(() => {
    switch (match.url) {
      case '/all':
        setTitle('All quizzes');
        dispatch(getAllQuizzes());
        break;
      case '/created':
        setTitle('Created quizzes');
        dispatch(getCreatedQuiz());
        break;
      case '/attempted':
        setTitle('Attempted quizzes');
        dispatch(getAttemptedQuiz());
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      {quizzes ? (
        <div>
          <h1 className={classes.title}>{title}</h1>
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
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default QuizzesPage;
