/*
 * @Author: jack.lu
 * @Date: 2022-10-09 17:10:18
 * @LastEditTime: 2022-10-09 17:10:48
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/utils/index.js
 */
function toUnixPath(path) {
  return path.replace(/\\/g, '/')
}

module.exports = toUnixPath
