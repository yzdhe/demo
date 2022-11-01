/*
 * @Author: jack.lu
 * @Date: 2022-10-27 15:58:07
 * @LastEditTime: 2022-10-27 16:41:16
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/url-file-loader/webpack.config.js
 */
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
}
