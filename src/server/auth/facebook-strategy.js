import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
} = process.env;

if (!FACEBOOK_CLIENT_ID) {
  throw new Error('FACEBOOK_CLIENT_ID is missing. Please make sure your environment is configured correctly. See README.md for details');
} else if (!FACEBOOK_CLIENT_SECRET) {
  throw new Error('FACEBOOK_CLIENT_SECRET is missing. Please make sure your environment is configured correctly. See README.md for details');
}

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    (accessToken, refreshToken, profile, done) => {
      // TODO: upsert the user profile into the database
      // when User model is ready
      // e.g. User.findOneAndUpdate(..., { upsert: true, ... }, ...);
      console.log(profile);
      // TODO: request for email if we need it?
      done(null, { _id: '123', name: 'fakeUser', type: 'facebook' });
    },
  ),
);
