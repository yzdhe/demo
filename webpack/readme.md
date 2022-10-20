<!--
 * @Author: jack.lu
 * @Date: 2022-10-08 10:34:34
 * @LastEditTime: 2022-10-08 14:19:12
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/readme.md
-->

## webpack

webpack 做打包编译公众

webpack 分为开发模式和生产模式
开发模式： 只会编译 js、json
生产模式： 在开发模式的基础上增加了压缩

1. webpack 文件 返回了 webpack 函数
2. webpack 函数得到一个 compiler
3. compiler 是通过 闭包的 create 创建的
4. create 里面 通过 createCompiler 创建
5. createCompiler 通过 new Compiler 创建 compiler 实例
   a. 构造器中添加 hooks 属性
   b. compiler 有几个重要的方法 watch、run、compile、colse、emitAssets、newCompilation
   c. run 在外部会被实例调用
   d. run 被调用后，会执行 compiler 实例的 compile 方法
   e. 在 compile 中 有很多生命周期 hooks，beforeCompile、compile、make、finishMake、
   f. 在 beforeCompile 中会生成一个 compilation，通过 compiler 实例的 newCompilation 创建
   g. 在 newCompilation 通过 createCompilation 创建 compilation，最终通过 new Compilation 创建
   h. make 生命周期就是将入口文件引入再写入文件，make 生命周期钩子的埋点是在 处理入口位置
6. createCompiler 中还会挂载插件，实际上是使用内置的插件，对配置项进行处理转换
