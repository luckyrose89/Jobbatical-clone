import passport from 'passport';

import './local-strategy';
import './facebook-strategy';
import './google-strategy';
import { user as userController } from '../controllers';

// Serialize the user object using its _id in mongoDB
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize the user ID by searching in database
passport.deserializeUser((id, done) => {
  userController.findById(id, done);
});
