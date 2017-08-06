import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const paths = {
  dist: path.resolve(__dirname, '..', 'dist')
}

export const srcEntry = './src/app.js'

export default {
  devServer: {
    contentBase: './dist'
  },
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
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/200.ejs', favicon: 'src/images/favicon.png' })
  ]
}
