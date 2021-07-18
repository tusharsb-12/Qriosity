import React from 'react';

import classes from './UserCard.module.css';

const UserCard = ({ firstName, lastName, email, attempted, created }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.userInfo}>
        <h1>{`${firstName} ${lastName}`}</h1>
        <p>Email: {email}</p>
      </div>
      <div className={classes.quizStatsInfo}>
        <div>
          <p>Attempted</p>
          <h1>{attempted}</h1>
        </div>
        <div>
          <p>Created</p>
          <h1>{created}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
