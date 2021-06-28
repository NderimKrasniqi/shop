import jwt from 'jsonwebtoken';

const createToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export default createToken;
