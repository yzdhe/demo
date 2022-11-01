/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:08:15
 * @LastEditTime: 2022-10-31 11:10:43
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/testLoader1.js
 */
module.exports = function (content, map, meta) {
  console.log('--------------')
  console.log('同步loader 的callback写法')
  this.callback(null, content, map, meta)
}
