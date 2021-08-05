import React from 'react';
import cn from 'classnames';

import classes from './ResponseCard.module.css';

const ResponseCard = ({ res, number }) => {
  return (
    <div className={classes.responseCard}>
      <p className={classes.questionText}>
        Q{number}. {res.questionText}
      </p>
      {res.answers.map(({ answerText, isCorrect, isSelected }, index) => (
        <div
          key={index}
          className={cn(classes.responses, {
            [classes.correct]: isCorrect,
            [classes.wrong]: !isCorrect && isSelected,
          })}
        >
          <input type='checkbox' checked={isSelected} />
          <label>{answerText}</label>
        </div>
      ))}
    </div>
  );
};

export default ResponseCard;
