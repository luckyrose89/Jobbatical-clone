const mongoose = require('mongoose');

const Job = require('../src/server/models/Job');
const User = require('../src/server/models/User');
const Contact = require('../src/server/models/Contact');

mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL || 
  'mongodb://localhost:27017/jobbatical-clone';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  .then(() => Job.remove({}))
  .then(() => User.remove({}))
  .then(() => Contact.remove({}))
  .then(() => mongoose.disconnect())
  .then(() => {
    console.log(`Successfully cleared db at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to clear db at ${MONGO_URL}:\n${err}`);
  });

