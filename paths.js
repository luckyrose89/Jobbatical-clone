const path = require('path');

const paths = {};

// top-level directories
paths.assets     = path.resolve(__dirname, 'assets');
paths.dist       = path.resolve(__dirname, 'dist');
paths.publicPath = '/';
paths.src        = path.resolve(__dirname, 'src');

// secondary directories
paths.client = path.join(paths.src, 'client');
paths.server = path.join(paths.src, 'server');

// nested directories / files
paths.clientApp = path.join(paths.client, 'app');
paths.favicon   = path.join(paths.assets, 'favicon.svg');
paths.index     = path.join(paths.client, 'index.html');
paths.main      = path.join(paths.client, 'main.js');
paths.polyfills = path.join(paths.client, 'polyfills.js');
paths.serverApp = path.join(paths.server, 'app.js');

module.exports = paths;
