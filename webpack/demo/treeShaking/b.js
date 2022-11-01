/*
 * @Author: jack.lu
 * @Date: 2022-10-28 15:27:35
 * @LastEditTime: 2022-10-28 15:32:41
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/treeShaking/b.js
 */

class Person {
  a = 1
  abc() {
    return 2
  }
}

export function sum(a, b) {
  return a + new Person().abc()
}

export function reduce(a, b) {
  return a - b
}
