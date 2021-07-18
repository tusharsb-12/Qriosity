import User from '../models/user.js';

import { registerValidator, loginValidator } from '../validators/auth.js';

// Login user
export const login = async (req, res) => {
  const { valid, errors } = loginValidator(req.body);

  if (!valid) {
    return res.status(400).json({ err: { ...errors } });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        err: {
          msg: 'An account with the email does not exist',
        },
      });
    }

    const matched = await user.comparePassword(password);

    if (!matched) {
      return res.status(400).json({
        err: {
          password:
            'Invalid password. Please check your email and password again',
        },
      });
    }

    const token = user.generateToken();
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
    const { firstName, lastName, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        err: {
          email: 'User with this email already exists. You can login instead',
        },
      });
    }

    user = await User.create({ firstName, lastName, email, password });
    const token = user.generateToken(user);

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

// Get user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.status(200).json({
      user,
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
