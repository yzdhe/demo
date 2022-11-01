const { Loader } = require('three')

/*
 * @Author: jack.lu
 * @Date: 2022-10-27 15:33:50
 * @LastEditTime: 2022-10-27 15:56:33
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/plugins/extractTextPlugin/webpack.config.js
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'abc.css'
    })
  ]
}
