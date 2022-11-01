/*
 * @Author: jack.lu
 * @Date: 2022-10-31 12:17:57
 * @LastEditTime: 2022-10-31 12:26:59
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/loader/customerize/loader/cleanLoader.js
 */
module.exports = function (content) {
  console.log(content)
  return content.replace(/console\.log\(.*\);?/g, '')
}
