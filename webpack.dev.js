const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    polyfills: paths.polyfills,
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      paths.main,
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: paths.dist,
    publicPath: paths.publicPath,
  },

  // resolve extensionless imports as js/jsx files
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        // transpile js/jsx source code with babel
        test: /\.jsx?$/,
        include: paths.src,
        use: 'babel-loader',
      },
      {
        // transpile sass/scss/plain css and
        // inject the styles into the page
        // also enable css modules for locally scoped rules
        test: /\.(?:sa|s?c)ss$/,
        exclude: [/node_modules/, /\.global\.(?:sa|s?c)ss$/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        // transpile sass/scss/plain css and
        // inject the styles into the page
        // also disable css modules for global rules
        test: /\.(?:sa|s?c)ss$/,
        include: [/node_modules/, /\.global\.(?:sa|s?c)ss$/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // load various image/font file types as data urls
        // fallback to file-loader if larger than 10000 bytes
        test: /\.(?:gif|jpe?g|png|svg|ttf|eot|woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },

  plugins: [
    // suppress emission in case of errors
    new webpack.NoEmitOnErrorsPlugin(),
    // enable HMR
    new webpack.HotModuleReplacementPlugin(),
    // ensure polyfills are loaded before main
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills',
      minChunks: Infinity,
    }),
    // inject compiled assets into index.html
    new HtmlPlugin({
      template: paths.index,
    }),
  ],
};
