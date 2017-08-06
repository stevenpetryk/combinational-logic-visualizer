import baseConfig, { paths, srcEntry } from './webpack.config.base.babel'

export default {
  ...baseConfig,
  devtool: 'inline-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('react-error-overlay'),
    srcEntry
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: paths.dist
  }
}
