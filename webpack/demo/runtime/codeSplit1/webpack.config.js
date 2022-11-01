/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:46:54
 * @LastEditTime: 2022-10-28 17:37:59
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/runtime/codeSplit1/webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    chunkFilename: '[hash]-[name].chunk.js',
    // 图片等资源 type: asset的进行命名
    assetModuleFilename: '[hash].chunk.js'
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all', // 对所有模块进行分割
      minSize: 1
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
}
