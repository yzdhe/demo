/*
 * @Author: jack.lu
 * @Date: 2022-10-27 15:58:07
 * @LastEditTime: 2022-10-28 11:00:50
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/cssLoader/webpack.config.js
 */
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
