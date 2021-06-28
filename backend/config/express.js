import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import { limiter } from '../middleware/authRateLimiter.js';
import routes from '../routes/index.js';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(compress());
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV !== 'development') {
  app.use('/v1/auth', limiter);
}

app.use('/api/v1', routes);

export default app;
