var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', 'C:\\Projects\\NodeJS\\electron\\blackjack\\src\\app.js']
  },

  output: {
    path: 'C:\\Projects\\NodeJS\\electron\\blackjack\\src',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: 'C:\\Projects\\NodeJS\\electron\\blackjack\\src',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}