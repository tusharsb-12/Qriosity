import React, { useState } from 'react';

import classes from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={classes.loginContainer}>
      <h1>Login to your account</h1>
      <input
        type='email'
        name='email'
        placeholder='Email'
        onChange={onChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={onChange}
      />
      <button onClick={onSubmit}>Login</button>
      <div className={classes.redirect}>
        <a href='/auth'>Don't have an account? Create one</a>
      </div>
    </form>
  );
};

export default Login;
