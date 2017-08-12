import express from 'express';

import authRouter from './auth';
import api from './api';

const router = express.Router();
router.use('/auth', authRouter);
router.use('/api', api);

export default router;
