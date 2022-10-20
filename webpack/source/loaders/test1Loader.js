/*
 * @Author: jack.lu
 * @Date: 2022-10-09 17:25:17
 * @LastEditTime: 2022-10-09 17:39:53
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/loaders/test1Loader.js
 */
function testLoader(source) {
  console.log('loader1被触发了')
  return 'loader1处理的结果'
}

module.exports = testLoader
