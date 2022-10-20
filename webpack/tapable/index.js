/*
 * @Author: jack.lu
 * @Date: 2022-10-09 15:04:59
 * @LastEditTime: 2022-10-09 15:06:28
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/tapable/index.js
 */
const { SyncHook } = require('tapable')

const s = new SyncHook()

s.tap('事件1', () => {
  console.log('事件1发生了')
})

s.tap('事件2', () => {
  console.log('事件2发生了')
})

s.call()
