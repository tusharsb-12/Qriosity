import React from 'react';

import classes from './QuestionCard.module.css';

const QuestionCard = ({ question, number }) => {
  return (
    <div className={classes.questionCard}>
      <p>
        <em>Question : {number}</em>
      </p>
      <br />
      <p className={classes.questionText}>{question?.questionText}</p>
      {question.answers?.map((answer) => {
        return (
          <div className={classes.options}>
            <input type='checkbox' />
            <label>{answer.answerText}</label>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionCard;
