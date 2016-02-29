// See: /Users/hoggynz/Git/Experiments/react-flux-shopping-cart

var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage')
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
            test: /\.js$/,
            loader: 'babel-loader',
            //include: path.resolve(__dirname, './src')
          }
        ],
        postLoaders: [{
          test: /\.js$/,
          //exclude: /(test|node_modules)\//,
          include: path.resolve(__dirname, './src'),
          loader: 'istanbul-instrumenter'
        }]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['dots', 'coverage'],

    coverageReporter: {
      type: 'text',
      dir: 'coverage/'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],
    singleRun: false
  })
};
