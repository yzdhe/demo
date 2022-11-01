/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:47:02
 * @LastEditTime: 2022-10-28 17:30:02
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/runtime/codeSplit1/index.js
 */
import a from './a'
document.getElementById('app').onclick = function () {
  setTimeout(() => {
    console.log(a(), 'index')
  })
  import(/* webpackChunkName: "bbbb" */ './b.js').then(res => {
    console.log(res.default())
  })
}
