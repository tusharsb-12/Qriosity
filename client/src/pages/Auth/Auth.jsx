import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

import classes from './Auth.module.css';

const Auth = () => {
  return (
    <div className={classes.authContainer}>
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
