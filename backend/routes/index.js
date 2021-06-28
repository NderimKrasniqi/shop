import express from 'express';
import userRoutes from '../routes/user.route.js';
import authRoutes from '../routes/auth.route.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
