/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:47:28
 * @LastEditTime: 2022-10-28 17:08:46
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/runtime/codeSplit/main.js
 */
import a from './a'
document.getElementById('app1').onclick = function () {
  console.log('main', a())
}
