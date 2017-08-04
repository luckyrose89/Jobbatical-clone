import passport from 'passport';

import './local-strategy';
import './facebook-strategy';
import './google-strategy';

// Serialize the user object using its _id in mongoDB
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize the user ID by searching in database
passport.deserializeUser((id, done) => {
  /*
  User
    .findById(id)
    .exec()
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        throw new Error(`Fail to deserialize user: User "${id}" does not exist`);
      }
    })
    .catch((err) => {
      done(err);
    });
  */

  // TODO: interact with db after User model is ready
  done(null, { name: 'deserializedUser' });
});
