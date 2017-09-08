import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import { user as userController } from '../controllers';

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
      const queries = {
        'data.oauth': profile.id,
        'data.loginMethod': 'facebook',
      };

      const updates = {
        $set: {
          'profile.username': profile.username || profile.displayName,
          'profile.picture': profile.photos && profile.photos.length > 0 ?
            profile.photos[0].value :
            null,
          'data.oauth': profile.id,
          'data.loginMethod': 'facebook',
          'data.displayName': profile.displayName || profile.username,
          'data.email': profile.emails && profile.emails.length > 0 ?
            profile.emails[0].value :
            null,
        },
      };
      userController.findOneAndUpdate(queries, updates, done);
    },
  ),
);
