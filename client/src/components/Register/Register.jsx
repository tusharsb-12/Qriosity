import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';

import classes from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.authReducer);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData, history));
  };

  return (
    <form className={classes.registerContainer}>
      <h1>Create an account</h1>
      <input
        type='text'
        name='firstName'
        placeholder='First name'
        onChange={onChange}
        className={cn('', { [classes.error]: auth.firstName })}
      />
      <span className={classes.errorText}>{auth.firstName}</span>
      <input
        type='text'
        name='lastName'
        placeholder='Last name'
        onChange={onChange}
        className={cn('', { [classes.error]: auth.lastName })}
      />
      <span className={classes.errorText}>{auth.lastName}</span>
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
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        onChange={onChange}
        className={cn('', { [classes.error]: auth.confirmPassword })}
      />
      <span className={classes.errorText}>{auth.confirmPassword}</span>
      <button onClick={onSubmit}>Register</button>
    </form>
  );
};

export default Register;