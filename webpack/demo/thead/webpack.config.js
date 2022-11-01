/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:20:00
 * @LastEditTime: 2022-10-28 15:24:43
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/thead/webpack.config.js
 */
const os = require('os')
const theads = os.cpus().length
console.log(theads)
module.exports = {
  entry: './index.js'
}
