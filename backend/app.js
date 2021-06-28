import app from './config/express.js';
import mongoose from './config/mongoose.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV}mode on port ${PORT}`.yellow
  )
);
