/*
 * @Author: jack.lu
 * @Date: 2022-10-08 10:50:25
 * @LastEditTime: 2022-10-09 14:03:43
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/run.js
 */
// 引入原生webpack
const webpack = require('./webpack')

// 配置文件引入
const config = require('./webpack.config')

// 创建compiler实例对象
const compiler = webpack(config)

// 调用run执行编译
compiler.run((err, stats) => {
  console.log(stats.toJson())
})
