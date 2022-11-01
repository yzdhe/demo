/*
 * @Author: jack.lu
 * @Date: 2022-10-31 10:08:15
 * @LastEditTime: 2022-10-31 11:22:34
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/testLoaderRaw.js
 */
module.exports = function (content, map, meta) {
  console.log('--------------')
  console.log('rawloader', content, map, meta)
  this.callback(null, content, map, meta)
}

module.exports.raw = true
