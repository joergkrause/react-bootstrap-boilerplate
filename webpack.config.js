const path = require('path');
const webpack = require('webpack');
// plug-ins
const copyPlugin = require('copy-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');
const uglifyPlugin = require('uglifyjs-webpack-plugin');
const compressPlugin = require('compression-webpack-plugin');

module.exports = {
  // Start of app
  entry: './src/app.js',
  // Distribution target
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  // build step
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  // configure
  stats: {
    colors: true
  },
  devtool: 'source-map',
  // extensions through plug-ins
  plugins: [
    new cleanPlugin('./dist/**', {}),
    new copyPlugin([
      { from: 'src/index.html' },
      { from: 'src/**/*.css' }
    ]),
    new uglifyPlugin(),
    new compressPlugin({
      test: /\.(js|css)/,
      algorithm: 'gzip',
      deleteOriginalAssets: false,
      asset: '[path].gz[query]'
    })
  ]
};
