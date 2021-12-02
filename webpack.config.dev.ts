import * as Webpack from 'webpack';

const config: Webpack.Configuration = {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: [
      {
        directory: `${__dirname}/public`,
        publicPath: '/',
      },
      {
        directory: `${__dirname}/src/assets`,
        publicPath: '/assets/',
      },
      {
        directory: `${__dirname}/dist`,
        publicPath: '/dist/',
      },
    ],
  },
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
        loader: 'file-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
    publicPath: `/dist`,
    sourceMapFilename: '[file].map',
  },
  resolve: {
    alias: {
      "~": `${__dirname}/src`,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;
