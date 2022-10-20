/*
 * @Author: jack.lu
 * @Date: 2022-10-08 11:02:55
 * @LastEditTime: 2022-10-09 15:29:55
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/webpack.js
 */
const Compiler = require('./compiler')
const webpack = config => {
  // 合并命令行参数和用户配置参数

  const shellOptions = process.argv.slice(2).reduce((config, arg) => {
    let [key, value] = arg.split('=')
    config[key.slice(2)] = value
    return config
  }, {})

  const finalOptions = {
    ...config,
    ...shellOptions
  }

  // 实例化compiler 类
  let compiler = new Compiler(finalOptions)

  // 挂载插件
  const { plugins } = finalOptions
  plugins.forEach(plugin => {
    plugin.apply(compiler)
  })

  return compiler
}

module.exports = webpack
