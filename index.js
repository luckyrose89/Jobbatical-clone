if (process.env.NODE_ENV === 'production') {
  // run the compiled server app
  require('./dist/server.bundle');
} else {
  // set up babel to compile on the fly
  require('babel-register');
  require('babel-polyfill');

  // load environment variables from the top level .env file
  require('dotenv').config();

  require('./src/server/app');
}
