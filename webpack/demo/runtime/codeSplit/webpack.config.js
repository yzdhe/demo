/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:46:54
 * @LastEditTime: 2022-10-28 16:59:57
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/runtime/codeSplit/webpack.config.js
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    main: './main.js',
    index: './index.js'
  },
  mode: 'development',
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['@babel/preset-env']
  //       }
  //     }
  //   ]
  // },
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
