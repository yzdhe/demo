<!--
 * @Author: jack.lu
 * @Date: 2022-10-09 13:57:39
 * @LastEditTime: 2022-10-09 17:55:36
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/source/note.md
-->

## webpack 执行流程

1. 执行 compiler.run 就是执行 webpack 构建命令的过程

2. run 接收一个回调，有一个 stats 参数，表示输出的资源内容，stats 里面有对模块的所有记录

## 自建流程

1. 新建 webpack.js
   a. 引入参数配置，合并参数(合并用户配置和命令行配置)
   b. 引入 compiler，创建 compiler 实例
2. 新建 compiler.js
3. 插件挂载，在创建完 compiler 之后，挂载插件，此时插件不一定会执行，在不同的生命周期钩子中执行的，利用到了 tapable 钩子，于是可以在 webpack 编译的所有生命周期进行不同插件的调用，在插件的实现中，可以注册不同生命周期 hooks 调用时机
4. 处理入口，在 compiler 的 run 中处理
   a. 格式化格式

5. 新增属性

   > 整个打包结束后，会有一些输出，这些内容会存入一个文件 用 set 结构保存

6. 初始化编译
   a. 定位入口绝对路径
   b. 统一路径分隔符 (window 平台，统一为 unix 平台)，可以得到入口路径和入口名称
   c. 调用自己的方法实现编译
   d. 让 loader 参与工作, loader 就是一个函数，接收 source 模块元数据进行处理

7. 整理模块输出内容
   a. 获取模块 id 取相对路径
   b. 包装输出模块的结构
   c. 使用 babel 工具包进行编译操作，转换为语法树
   > @babel/parser 解析器，转为 ast
   > @babel/traverse 实现 ast 语法树遍历
   > @babel/generator 将 ast 转为源代码
   > babel-types 遍历过程中，操作树上节点
