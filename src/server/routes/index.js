import express from 'express';

import authRouter from './auth';

const router = express.Router();
router.use('/auth', authRouter);

router.get('/api/v1/example', (req, res) => res.send(`
  Try to edit this message in /src/server/routes/index.js
  and reload this page.
  The output should change without server restarting.
`));


export default router;
