import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';

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
  // TODO: create a db record with email/password
  // login with the newly created user record and call next
  // e.g.
  const fakeUser = { _id: '99', name: 'hello' };
  req.login(fakeUser, (err) => {
    if (err) {
      // handle error
      return next(err);
    }

    next();
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

export default router;
