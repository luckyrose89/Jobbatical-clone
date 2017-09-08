import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { user as userController } from '../controllers';

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
      const username = profile.displayName ||
        `${profile.name.givenName} ${profile.name.familyName}`;
      const picture = profile.photos && profile.photos.length > 0 ?
        profile.photos[0].value :
        null;
      const email = profile.emails && profile.emails.length > 0 ?
        profile.emails[0].value :
        null;

      const updates = {
        $set: {
          'profile.username': username,
          'profile.picture': picture,
          'data.email': email,
          'data.oauth': profile.id,
          'data.loginMethod': 'google',
          'data.displayName': username,
        },
      };

      const queries = {
        'data.oauth': profile.id,
        'data.loginMethod': 'google',
      };

      userController.findOneAndUpdate(queries, updates, done);
    },
  ),
);
