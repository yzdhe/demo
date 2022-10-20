/*
 * @Author: jack.lu
 * @Date: 2022-10-09 14:01:45
 * @LastEditTime: 2022-10-09 17:58:34
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/compiler.js
 */

const { SyncHook } = require('tapable')
const path = require('path')
const toUnixPath = require('./utils/index')
const fs = require('fs')
const parser = require('@babel/parser')
const generator = require('@babel/generator')
const traverse = require('@babel/traverse')
const types = require('babel-types')

class Compiler {
  constructor(options) {
    this.options = options
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
      emit: new SyncHook()
    }
    // 保存入口信息
    this.entries = new Set()
    // 保存所有的module信息
    this.modules = new Set()
    // 保存代码块信息
    this.chunks = new Set()
    // 所有产出文件名称
    this.files = new Set()
    // 资源清单
    this.assets = new Set()

    this.context = this.options.context || process.cwd()
  }

  run() {
    this.hooks.run.call()
    // 确定入口
    let entry = {}
    if (typeof this.options.entry === 'string') {
      entry.main = this.options.entry
    } else {
      entry = this.options.entry
    }

    for (let entryName in entry) {
      // 获取绝对路径 - 格式化绝对路径 统一路径分隔符
      const entryPath = toUnixPath(path.join(this.context, entry[entryName]))
      // 调用自定义的方法来实现具体的编译过程 得到结果
      const entryModule = this.buildModule(entryName, entryPath)
    }
  }

  /**
   * module 返回一个打包之后的对象，包含了打包的信息
   * @param {*} moduleName 被打包的模块名称
   * @param {*} modulePath 被打包的模块路径
   */
  buildModule(moduleName, modulePath) {
    // 读取入口模块的源文件
    const originalSourceCode = fs.readFileSync(modulePath, 'utf-8')
    let targetSourceCode = originalSourceCode
    // 引入loader
    let loaders = []
    const rules = this.options.module.rules
    for (let i = 0; i < rules.length; i++) {
      // 找到当前处理对应文件文件的配置
      if (rules[i].test.test(modulePath)) {
        loaders = [...loaders, ...rules[i].use]
      }
    }

    // 调用loader
    for (let i = loaders.length - 1; i >= 0; i--) {
      targetSourceCode = require(loaders[i])(targetSourceCode)
    }

    // 获取模块id 获取相对路径
    const moduleId =
      '/' + path.posix.relative(toUnixPath(this.context), modulePath)

    // 构建模块信息
    const module = {
      id: moduleId,
      dependencies: [],
      name: moduleName
    }

    // 使用ast 语法树操作，然后将结果返回
    let ast = parser.parse()

    console.log(module)
    return module
  }
}

module.exports = Compiler
