/*
 * @Author: jack.lu
 * @Date: 2022-10-28 11:51:49
 * @LastEditTime: 2022-10-28 13:47:21
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/hmr/index.js
 */

import a from './a'
import './index.css'
console.log(11231123131223)
document.body.innerHTML = a

if (module.hot) {
  module.hot.accept('./a', () => {
    // document.body.innerHTML = a
  })
}
