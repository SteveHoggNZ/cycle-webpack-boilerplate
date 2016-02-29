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
        //preLoaders: [
        //  // transpile all files except testing sources with babel as usual
        //  {
        //    test: /\.js$/,
        //    exclude: [
        //      //path.resolve('src/components/'),
        //      path.resolve('node_modules/')
        //    ],
        //    //include: path.resolve(__dirname, './src'),
        //    loader: 'babel'
        //  },
        //  // transpile and instrument only testing sources with isparta
        //  {
        //    test: /\.js$/,
        //    //include: path.resolve(__dirname, './src'),
        //    exclude: /(node_modules|bower_components)\//,
        //    loader: 'isparta-instrumenter-loader'
        //  }
        //],
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, './src')
          }
        ],
        loaders: [{
          test: /\.js$/,
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
      reporters: [
        {type: 'text'},
        {type: 'lcov', dir: path.join(__dirname, 'coverage'), subdir: '.'}
      ]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: false
  })
};
