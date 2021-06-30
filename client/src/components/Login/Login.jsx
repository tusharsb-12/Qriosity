import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';

import classes from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.loginReducer);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, history));
  };

  return (
    <form className={classes.loginContainer}>
      <h1>Login to your account</h1>
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={onChange}
        className={cn('', { [classes.error]: auth.email })}
      />
      <span className={classes.errorText}>{auth.email}</span>
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={onChange}
        className={cn('', { [classes.error]: auth.password })}
      />
      <span className={classes.errorText}>{auth.password}</span>
      <button onClick={onSubmit}>Login</button>
    </form>
  );
};

export default Login;
