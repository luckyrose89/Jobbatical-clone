/* eslint-disable no-console, no-useless-escape */
import express from 'express';
import chokidar from 'chokidar';
import compression from 'compression';
import helmet from 'helmet';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';




import paths from '../../paths';
import './auth/passport.config';

// set up mongoDB connection
mongoose.Promise = global.Promise;
const MONGO_URL = process.env.MONGO_URL ||
  'mongodb://localhost:27017/jobbatical-clone';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  .then(() => {
    console.log(`Connected to mongoDB at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to connect to mongoDB at ${MONGO_URL}:\n${err}`);
    console.info('Please double check your mongoDB instance and try again');
    process.exit(1);
  });

const app = express();

// set up passport
const sessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET || 'keyboard cat',
  maxAge: 24 * 60 * 60 * 1000,
};
if (process.env.NODE_ENV === 'production') {
  app.use(require('cookie-session')(sessionConfig));
} else {
  app.use(require('express-session')(sessionConfig));
}
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// dynamically import routes in a middleware to enable
// hot module replacement for api routes
app.use((req, res, next) => {
  require('./routes').default(req, res, next);
});

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(helmet());
  // serve compiled assets
  app.use(express.static(paths.assets));
  app.use(express.static(paths.dist));
  app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: paths.dist });
  });

  // TODO: enable server-side rendering
} else {
  // set up webpack to compile react app on the fly
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.dev');
  const compiler = webpack(webpackConfig);
  const instance = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.publicPath,
  });
  app.use(instance);
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('connect-history-api-fallback')());
  app.use(instance);

  // set up hot reloading for express
  const watcher = chokidar.watch(paths.server);
  watcher.on('ready', () => {
    watcher.on('all', () => {
      console.log('Clearing /server/ module cache and mongoose cache');
      mongoose.models = {};
      mongoose.connection.collections = {};
      mongoose.modelSchemas = {};
      Object.keys(require.cache).forEach((id) => {
        if (/[\\\/]server[\\\/]/.test(id)) {
          delete require.cache[id];
        }
      });
    });
  });
}

// global error handler
// catch all errors that are not handled by individual route
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err.toString();
  res.status(status).json({ error: message });
});

// create the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} Jobbatical-clone server is listening on port ${server.address().port}`);
});
