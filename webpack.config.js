var resolve = require('path').resolve;

module.exports = {
  entry: './src/liveExample',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: resolve(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty'
  }
};
