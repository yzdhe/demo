/*
 * @Author: jack.lu
 * @Date: 2022-07-25 10:02:47
 * @LastEditTime: 2022-07-25 11:18:15
 * @LastEditors: jack.lu
 * @Description: your description
 * @FilePath: /demo/algorithm/trie/index.js
 */
export default class Trie {
  tree = {}
  insert(word) {
    let tree = this.tree
    for (const w of word) {
      if (tree[w] == undefined) {
        tree[w] = {}
      }
      tree = tree[w]
    }
    tree.isEnd = true
  }
  search(word) {
    let tree = this.tree
    for (const w of word) {
      if (tree[w] == undefined) {
        return false
      }
      tree = tree[w]
    }
    return !!tree.isEnd
  }
  startsWith(prefix) {
    let tree = this.tree
    for (const p of prefix) {
      if (tree[p] == undefined) {
        return false
      }
      tree = tree[p]
    }
    return true
  }
}
