/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:08:15
 * @LastEditTime: 2022-10-31 11:11:20
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/testLoader.js
 */
module.exports = function (content) {
  console.log('--------------')
  console.log('同步loader 写法1')
  return content
}
