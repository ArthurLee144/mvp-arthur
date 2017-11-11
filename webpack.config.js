var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src/components');
var DIST_DIR = path.join(__dirname, '/client/static');

module.exports = {
  entry: `${SRC_DIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }

      }
    ]
  }
};