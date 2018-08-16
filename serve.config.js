const path = require('path');
const chokidar = require('chokidar');
const serve = require('webpack-serve');
const config = require('./webpack.config.js');

const add = (app, middleware, options) => {
  middleware.webpack().then(result => {
    const server = result.hotClient.server;
    const watchPath = path.resolve(__dirname, 'public', '*');
    const options = { ignoreInitial: true };
    watcher = chokidar.watch(watchPath, options);
    watcher.on('change', () => {
      server.broadcast('{ "type": "window-reload", "data": {} }');
    });
  });
};

const argv =  {};
const options = {
  add,
  config,
  content: 'public/',
  host: '0.0.0.0',
  open: true,
  port: 4000,
};

serve(argv, options);

