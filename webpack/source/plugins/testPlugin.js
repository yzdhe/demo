/*
 * @Author: jack.lu
 * @Date: 2022-10-09 14:54:13
 * @LastEditTime: 2022-10-09 16:59:33
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/plugins/testPlugin.js
 */
class TestPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('testPlugin', () => {
      console.log('testPlugin被触发了')
    })
  }
}

module.exports = TestPlugin
