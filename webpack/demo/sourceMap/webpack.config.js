const { Loader } = require('three')

/*
 * @Author: jack.lu
 * @Date: 2022-10-27 15:33:50
 * @LastEditTime: 2022-10-28 13:19:12
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/sourceMap/webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './index.js',
  mode: 'production',
  // mode: 'development',
  plugins: [new HtmlWebpackPlugin()],
  // devtool: 'cheap-module-source-map'
  devtool: 'source-map'
}
