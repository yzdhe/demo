/*
 * @Author: jack.lu
 * @Date: 2022-10-31 13:39:31
 * @LastEditTime: 2022-11-01 10:31:17
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/plugins/customerize/plugins/TestPlugins.js
 */
class TestPlugin {
  constructor() {
    console.log('test constructor')
  }
  apply(compiler) {
    debugger
    console.log('test apply')
    compiler.hooks.environment.tap('testPlugin', compilation => {
      console.log('environment钩子')
    })

    compiler.hooks.emit.tapAsync('testPlugin', compilation => {
      console.log('emit钩子')
    })

    compiler.hooks.make.tapAsync('testPlugin', (compilation, callback) => {
      console.log('make hook')
      compilation.hooks.seal.tap('testPlugin', () => {
        console.log('compilation触发的seal hook')
      })
      setTimeout(() => {
        console.log('callback call')
      }, 1000)
    })
  }
}

module.exports = TestPlugin
