import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { registerValidator, loginValidator } from '../validators/auth.js';

// Utility functions
const loadUser = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    return null;
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await loadUser(email);
    const matched = await bcrypt.compare(password, user.password);

    return { matched, user };
  } catch (err) {
    // console.log(err);
    return { matched: false, user: null };
  }
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const generateJwtToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

// Login user
export const login = async (req, res) => {
  const { valid, errors } = loginValidator(req.body);

  if (!valid) {
    return res.status(400).json({ err: { ...errors } });
  }

  try {
    const { email, password } = req.body;
    const { matched, user } = await validateUser(email, password);

    if (!matched) {
      return res.status(400).json({
        err: {
          password: 'Please check your email and password',
        },
      });
    }

    const token = generateJwtToken(user);
    return res.status(200).json({ msg: 'Welcome back', token });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

// Register a new user
export const register = async (req, res) => {
  const { valid, errors } = registerValidator(req.body);

  if (!valid) {
    return res.status(400).json({ err: { ...errors } });
  }

  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    let user = await loadUser(email);

    if (user) {
      return res.status(400).json({
        err: {
          email: 'User with this email already exists. You can login instead',
        },
      });
    }

    const hash = await hashPassword(password);
    user = await User.create({ firstName, lastName, email, password: hash });
    const token = generateJwtToken(user);

    return res.status(201).json({
      msg: 'User created',
      token,
    });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

// Logout user
export const logout = (req, res) => {
  return res.status(200).json({ msg: 'Logged out' });
};
