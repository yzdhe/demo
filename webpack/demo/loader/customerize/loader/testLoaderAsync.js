/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:08:15
 * @LastEditTime: 2022-10-31 12:09:30
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/testLoaderAsync.js
 */
module.exports = function (content, map, meta) {
  console.log('--------------')
  console.log('异步loader')
  const callback = this.async()
  setTimeout(() => {
    callback(null, content, map, meta)
  }, 1000)
}

module.exports.pitch = function () {
  console.log('异步loader pitch方法')
}
