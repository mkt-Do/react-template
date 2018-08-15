const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ path.join(__dirname, 'node_modules') ],
        loader: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'index.js',
  },
};

