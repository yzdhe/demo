<!--
 * @Author: jack.lu
 * @Date: 2022-10-28 11:51:23
 * @LastEditTime: 2022-10-28 13:50:59
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/hmr/readme.md
-->

## hmr

webpack-dev-server 默认情况在检测到文件有修改以后，会进行全量打包然后刷新页面，实现页面更新效果。如果项目不断增大，每次都进行全量打包，速度和体验就会变的很差。于是有了热模块替换 HMR（hot module replace），在 webpack-dev-server4.x 以后，就内置了热模块替换功能，此版本之前需要通过 wepack.HotModuleReplacementPlugin 实现， 在配置 devServer 中加入 hot 为 true 的配置

```javascript
{
  devServer: {
    hot: true
  }
}
```

加上了 hot 为 true，我们修改 css 文件, hmr 已经生效。但当我们修改 js 文件时却发现界面刷新了。原因是热模块替换默认对 js 没有效果，需要我们增加额外的代码

```javascript
if (module.hot) {
  module.hot.accept('引入变化的模块', () => {})
}
```

accept 接收两个参数，第一个是热替换的模块引用，第二个是回调，指定回调，每次变更模块的时候就会再去引用一次。如果你的文件引入的 js 模块比较多，我们需要一个一个的去写，这样就会很麻烦，日常的项目中，有一些 loader 已经给我做了这样一件事情，比如 vue-loader、react-hot-loader
