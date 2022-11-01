/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:27:31
 * @LastEditTime: 2022-10-28 15:28:39
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/treeShaking/a.js
 */
export * from './b'

export function count() {
  return 1
}

export function count1() {
  return 2
}
