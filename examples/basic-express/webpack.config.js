const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './app/index.jsx'
    ]
  },
  output: {
    publicPath: '/',
    path: `${__dirname}/public`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
