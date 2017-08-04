import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      /*
      User
        .localLogin(email, password)
        .then((user) => done(null, user))
        .catch((err) => done(err));
      */

      // always return a fake user before User model is ready
      console.log(email, password);
      done(null, { _id: '1', name: 'fakeUser', type: 'local' });
    },
  ),
);
