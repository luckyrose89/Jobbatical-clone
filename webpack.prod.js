const FaviconsPlugin = require('favicons-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  devtool: 'source-map',

  entry: {
    polyfills: paths.polyfills,
    main: paths.main,
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: paths.dist,
    publicPath: paths.publicPath,
  },

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
        // extract all styles into a separate file
        // also enable css modules for locally scoped rules
        test: /\.(?:sa|s?c)ss$/,
        exclude: [/node_modules/, /\.global\.(?:sa|s?c)ss$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        // transpile sass/scss/plain css and
        // extract all styles into a separate file
        // also disable css modules for global rules
        test: /\.(?:sa|s?c)ss$/,
        include: [/node_modules/, /\.global\.(?:sa|s?c)ss$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        // compress and load images
        test: /\.(?:gif|png|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7,
              },
              mozjpeg: {
                quality: 15,
              },
              pngquant: {
                quality: 20,
                speed: 4,
              },
            },
          },
        ],
      },
      {
        // load fonts
        test: /\.(?:svg|eot|ttf|woff2?)$/,
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
    // substitute NODE_ENV for dead code elimination with UglifyJsPlugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // stabilize module names for long term asset caching
    new webpack.NamedModulesPlugin(),
    // separate non-volatile vendor codes from volatile application codes
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.[chunkhash].js',
      chunks: ['main'],
      minChunks: function(module) {
        return module.context &&
          module.context.indexOf('node_modules') !== -1;
      },
    }),
    // make sure polyfills are loaded before main
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills',
      minChunks: Infinity,
    }),
    // extract the webpack runtime content for long term asset caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[chunkhash].js',
      minChunks: Infinity,
    }),
    // minimize javascript code
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    // extract all styles into a separate file
    new ExtractTextPlugin('styles.[contenthash].css'),
    // transform and inject favicon into the page
    new FaviconsPlugin(paths.favicon),
    // inject all compiled assets into the minified index.html
    new HtmlPlugin({
      template: paths.index,
      minify: {
        collapseWhitespace: true,
        caseSensitive: true,
        conservativeCollapse: true,
      },
    }),
  ],
};
