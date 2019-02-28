const path = require('path');

module.exports = {
  entry: './js/app.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },

    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
};