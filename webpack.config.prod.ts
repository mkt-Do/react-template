import * as Webpack from 'webpack';

const config: Webpack.Configuration = {
  entry: [
    './src/index.tsx'
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
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
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    publicPath: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx'],
  },
};

export default config;
