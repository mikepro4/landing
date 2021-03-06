'use strict';
var debug            = require('debug')('app');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('./webpack.config.dev');

// Run the webpack dev server
var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  proxy: {
    '*': 'http://localhost:3000'
  },
  noInfo: true,
  hot: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) console.log(err);
  else  debug('Webpack server listening on port 3001');
});
