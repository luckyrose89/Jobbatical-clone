import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env;

if (!GOOGLE_CLIENT_ID) {
  throw new Error('GOOGLE_CLIENT_ID is missing. Please make sure your environment is configured correctly. See README.md for details');
} else if (!GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_SECRET is missing. Please make sure your environment is configured correctly. See README.md for details');
}

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    (accessToken, refreshToken, profile, done) => {
      // TODO: when User model is ready
      // update/insert the record with profile data accordingly
      console.log(profile);
      done(null, { _id: '456', name: 'fakeUser', type: 'google' });
    },
  ),
);
