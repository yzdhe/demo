/*
 * @Author: jack.lu
 * @Date: 2022-10-31 13:38:03
 * @LastEditTime: 2022-10-31 13:46:17
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/plugins/customerize/webpack.config.js
 */

const TestPlugin = require('./plugins/TestPlugins')
module.exports = {
  entry: './index.js',
  plugins: [new TestPlugin()]
}
