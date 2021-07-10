import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuizzes } from '../../redux/actions/quiz';
import cn from 'classnames';

import classes from './Dashboard.module.css';

import QuizCard from '../../components/QuizCard/QuizCard';
import Loading from '../../components/Loading/Loading';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state) => state.quizReducer);
  useEffect(() => {
    dispatch(getAllQuizzes());
  }, []);

  return (
    <>
      {quizzes ? (
        <div>
          <div className={classes.navigationButtons}>
            <button
              className={cn(classes.navControl, { [classes.selected]: false })}
            >
              Upcoming quizzes
            </button>
            <button
              className={cn(classes.navControl, { [classes.selected]: false })}
            >
              Attempted quizzes
            </button>
            <button
              className={cn(classes.navControl, { [classes.selected]: false })}
            >
              Created quizzes
            </button>
          </div>
          <div className={classes.mainContainer}>
            {quizzes?.map((quiz, index) => (
              <QuizCard
                name={quiz.title}
                description={quiz.description}
                timeLimit={quiz.timeLimit}
                key={index}
                quizId={quiz._id}
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

export default Dashboard;
