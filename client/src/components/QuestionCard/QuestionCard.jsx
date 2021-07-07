import React from 'react';

import classes from './QuestionCard.module.css';

const QuestionCard = ({
  question,
  handleNext,
  handlePrev,
  onChange,
  number,
}) => {
  return (
    <div className={classes.questionCard}>
      <div>
        <span>
          <em>Question: {number + 1}</em>
        </span>
        <span style={{ float: 'right' }}>
          +{question.marks} -{question.negativePenalty}
        </span>
      </div>
      <br />
      <p className={classes.questionText}>{question?.questionText}</p>
      {question.answers?.map((answer, index) => {
        return (
          <div className={classes.options} key={index + number * 10}>
            <input
              type='checkbox'
              onChange={(e) => onChange(e, index)}
              checked={answer.isSelected}
            />
            <label>{answer.answerText}</label>
          </div>
        );
      })}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev} className={classes.redButton}>
        Prev
      </button>
    </div>
  );
};

export default QuestionCard;
