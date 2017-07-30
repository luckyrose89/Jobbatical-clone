const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  devtool: 'source-map',

  target: 'node',

  entry: {
    server: paths.serverApp,
  },

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },

  // resolve __dirname and __filename in the input files
  // instead of output
  node: {
    __dirname: true,
    __filename: true,
  },

  // exclude node modules from the build
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        // transpile js/jsx source code with babel
        test: /\.jsx?$/,
        include: paths.src,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
