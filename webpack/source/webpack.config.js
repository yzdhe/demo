/*
 * @Author: jack.lu
 * @Date: 2022-10-09 13:49:57
 * @LastEditTime: 2022-10-09 17:34:01
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/webpack.config.js
 */
const path = require('path')
const testPlugin = require('./plugins/testPlugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    main: './src/index.js',
    main1: './src/index1.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new testPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          path.resolve(__dirname, 'loaders', 'test1Loader'),
          path.resolve(__dirname, 'loaders', 'test2Loader')
        ]
      }
    ]
  }
}
