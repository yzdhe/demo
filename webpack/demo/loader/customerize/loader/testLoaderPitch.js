/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:08:15
 * @LastEditTime: 2022-10-31 12:08:55
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/testLoaderPitch.js
 */
module.exports = function (content) {
  console.log('--------------')
  console.log('pitch loader')
  return content
}

module.exports.pitch = function () {
  console.log('pitch loader pitch方法')
}
