const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const myWebpackConfig = require('./webpack.config.js');

// express: create express app
const app = express();

// webpack: create a webpack compiler in memory from the config
const myCompiler = webpack(myWebpackConfig);

// webpack: applies dev middleware to express
// - detects changes in files and applies to bundles
app.use(webpackDevMiddleware(myCompiler,{}));

// webpack: hot loader middleware
app.use(webpackHotMiddleware(myCompiler, {}));

// express: route static
app.use(express.static('public'));

app.listen(3000, () => console.log('express server running on 3000'));
