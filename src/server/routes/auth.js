import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';

import User from '../models/User';
import { user as userController } from '../controllers';
import {
  isUser,
  isGuest,
  logout,
  sendUser,
  saveReferrer,
  redirect,
} from '../auth/helpers';

const router = express.Router();
const jsonParser = bodyParser.json();

const signup = (req, res, next) => {
  const { email, password } = req.body;
  userController.find({ 'data.email': email }, (err, user) => {
    if (err) {
      err.status = 401;
      next(err);
      return;
    }
    if (user && user.length > 0) {
      const e = new Error(`This email address has been registered ${email}`);
      e.status = 409;
      next(e);
      return;
    }
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        const profile = { username: email };
        const data = {
          email,
          oauth: hash,
          loginMethod: 'local',
        };
        // TODO: add a user controller for creating new record
        return User.create({ profile, data })
      })
      .then((user) => {
        req.login(user, (err) => {
          if (err) {
            return next(err);
          }
          next();
        });
      });
  });
};

router.post('/local',
  isGuest,
  jsonParser,
  passport.authenticate('local', { failureRedirect: '/' }),
  sendUser,
);

router.post('/signup',
  isGuest,
  jsonParser,
  signup,
  sendUser,
);

router.get('/facebook',
  isGuest,
  saveReferrer,
  passport.authenticate('facebook', { scope: ['email'] }),
);

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  redirect,
);

router.get('/google',
  isGuest,
  saveReferrer,
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  redirect,
);

router.get('/me', isUser, sendUser);

router.get('/logout', isUser, logout);

router.use((err, req, res, next) => {
  const status = err.status || 401;
  const message = err.message || err.toString();
  res.status(status).json({ error: message });
});

export default router;
