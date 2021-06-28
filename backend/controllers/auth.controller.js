import asyncHandler from 'express-async-handler';
import createToken from '../utils/createToken.js';
import User from '../models/user.js';

export const register = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(401);
    throw new Error('Passwords do not match');
  }

  const exists = await User.findOne({ email });

  if (exists) {
    res.status(400);
    throw new Error('This email is already used');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: createToken(user),
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: createToken(user),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
