/*
 * @Author: jack.lu
 * @Date: 2022-10-09 17:25:17
 * @LastEditTime: 2022-10-09 17:40:02
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/loaders/test2Loader.js
 */
function testLoader(source) {
  console.log('loader2被触发了')
  return 'loader2处理的结果'
}

module.exports = testLoader
