const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('react-error-overlay'),
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/200.ejs', favicon: 'src/images/favicon.png' })
  ]
}
