if (process.env.NODE_ENV === 'production') {
  require('./dist/server.bundle');
} else {
  require('babel-register');
  require('babel-polyfill');
  require('./src/server/app');
}
