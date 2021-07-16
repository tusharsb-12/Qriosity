import React from 'react';
import cn from 'classnames';

import classes from './ResponseCard.module.css';

const ResponseCard = ({ res }) => {
  return (
    <div className={classes.responseCard}>
      <p className={classes.questionText}>{res.questionText}</p>
      {res.answers.map(({ answerText, isCorrect, isSelected }, index) => (
        <div key={index}>
          <p
            className={cn('', {
              [classes.correct]: isCorrect,
              [classes.selected]: isSelected,
            })}
          >
            {answerText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResponseCard;
