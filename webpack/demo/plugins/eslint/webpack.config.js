const { Loader } = require('three')

/*
 * @Author: jack.lu
 * @Date: 2022-10-27 15:33:50
 * @LastEditTime: 2022-10-27 17:13:23
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/plugins/eslint/webpack.config.js
 */

const ESlintPlugin = require('eslint-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: []
  },
  plugins: [new ESlintPlugin()]
}
