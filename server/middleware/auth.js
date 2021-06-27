import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('user-token')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        err: {
          msg: 'Not authorized',
        },
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

export default auth;
