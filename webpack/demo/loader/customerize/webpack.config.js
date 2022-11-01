/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:06:46
 * @LastEditTime: 2022-10-31 12:18:49
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: './loader/testLoader.js'
      // },
      // {
      //   test: /\.js$/,
      //   loader: './loader/testLoader1.js'
      // },
      // {
      //   test: /\.js$/,
      //   loader: './loader/testLoaderAsync.js'
      // },
      // {
      //   test: /\.js$/,
      //   loader: './loader/testLoaderRaw.js'
      // },
      // {
      //   test: /\.js$/,
      //   loader: './loader/testLoaderPitch.js'
      // }
      {
        test: /\.js$/,
        loader: './loader/cleanLoader.js'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
