import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { user as userController } from '../controllers';

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      const queries = {
        'data.email': email,
        'data.loginMethod': 'local',
      };
      userController.find(queries, (err, users) => {
        if (err) {
          return done(err);
        }
        if (!users || !users.length) {
          const e = new Error('Incorrect email/password');
          e.status = 401;
          return done(e);
        }
        const user = users[0];
        bcrypt
          .compare(password, user.data.oauth)
          .then((matched) => {
            if (matched) {
              return done(null, user);
            } else {
              const e = new Error('Incorrect email/password');
              e.status = 401;
              return done(e);
            }
          });
      });
    },
  ),
);
