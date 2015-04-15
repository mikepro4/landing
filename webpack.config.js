// Webpack configuration to use with the build task.

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {

  // Create also a "lib" chunk with common libraries, e.g. react.
  entry: {
    lib: ['react', 'react-router'],
    main: './app/javascripts/client.jsx'
  },

  output: {
    path: './build/public/static',
    publicPath: '/static/',
    filename: 'main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production") // This has effect on the react lib size
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    // Allow to omit extensions when requiring these files
    root: [path.join(__dirname, "public/bower_components")]
  },

  module: {
    loaders: [{
      test: /\.jsx$/, loaders: ['jsx']
    }, 
    // Pass stylus files through loaders to generate required css files.
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') }
    ]
  },

  externals: {}
};