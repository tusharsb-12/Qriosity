import validator from 'validator';
import isempty from 'is-empty';

// Validate register input
export const registerValidator = (data) => {
  let errors = {};

  data.firstName = isempty(data.firstName) ? '' : data.firstName;
  data.lastName = isempty(data.lastName) ? '' : data.lastName;
  data.email = isempty(data.email) ? '' : data.email;
  data.password = isempty(data.password) ? '' : data.password;
  data.confirmPassword = isempty(data.confirmPassword)
    ? ''
    : data.confirmPassword;

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name is required';
  }

  if (validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name is required';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Confirm your password';
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match. Try again';
  }

  return {
    valid: isempty(errors),
    errors,
  };
};

// Validate login input
export const loginValidator = (data) => {
  let errors = {};

  data.email = isempty(data.email) ? '' : data.email;
  data.password = isempty(data.password) ? '' : data.password;

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    valid: isempty(errors),
    errors,
  };
};
