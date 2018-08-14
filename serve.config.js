const serve = require('webpack-serve');
const config = require('./webpack.config.js');

const argv =  {};
const options = {
  config,
  content: 'public/',
  host: '0.0.0.0',
  open: true,
  port: 4000,
};

serve(argv, options);

