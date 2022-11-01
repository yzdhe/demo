/*
 * @Author: jack.lu
 * @Date: 2022-10-28 14:04:05
 * @LastEditTime: 2022-10-28 14:23:22
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/babelLoader/webpack.config.js
 */
module.exports = {
  entry: './index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
