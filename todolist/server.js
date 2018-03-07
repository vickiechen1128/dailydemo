var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
    },
  proxy: {
        '/index.html': {
            target: 'http://127.0.0.1:443/index.html',
            secure: false
        }
    }

};

app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(443, '127.0.0.1', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening successfully!');
});
