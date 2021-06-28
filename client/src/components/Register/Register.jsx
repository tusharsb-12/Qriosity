import React, { useState } from 'react';

import classes from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    <form className={classes.registerContainer}>
      <h1>Create an account</h1>
      <input
        type='text'
        name='firstName'
        placeholder='First name'
        onChange={onChange}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last name'
        onChange={onChange}
      />
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
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        onChange={onChange}
      />
      <button onClick={onSubmit}>Register</button>
      <div className={classes.redirect}>
        <a href='/auth'>Already have an account? Login</a>
      </div>
    </form>
  );
};

export default Register;
