import React, { useState } from 'react';
import cn from 'classnames';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

import classes from './Auth.module.css';

const Auth = () => {
  const [login, setLogin] = useState(true);

  const onClick = (e) => {
    e.preventDefault();
    if (e.target.name === 'login') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className={classes.authContainer}>
      <div style={{ width: '50%', margin: 'auto' }}>
        <button
          className={cn(classes.authControl, { [classes.selected]: login })}
          name='login'
          onClick={onClick}
        >
          Login
        </button>
        <button
          className={cn(classes.authControl, { [classes.selected]: !login })}
          name='register'
          onClick={onClick}
        >
          Register
        </button>
      </div>
      <br />
      {login ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
