/*
 * @Author: jack.lu
 * @Date: 2022-07-04 16:16:25
 * @LastEditTime: 2022-07-28 13:25:08
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/xr/threejs/sence2/webpack.config.js
 */
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    box: path.resolve(__dirname, './src/box.ts')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
