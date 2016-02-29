// See: /Users/hoggynz/Git/Experiments/react-flux-shopping-cart

var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher')
    ],

    basePath: '',
    frameworks: ['tap'],
    files: [
      'webpack.test.bootstrap.js'
    ],

    preprocessors: {
      'webpack.test.bootstrap.js': ['webpack']
    },

    webpack: {
      node: {
        fs: 'empty'
      },
      module: {
        loaders: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            //include: path.resolve(__dirname, './src')
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
