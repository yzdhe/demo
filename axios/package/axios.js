/*
 * @Author: jack.lu
 * @Date: 2022-10-25 11:10:38
 * @LastEditTime: 2022-10-25 11:54:32
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/axios/package/axios.js
 */
function Axios(config) {
  this.defaults = config
  this.intercepters = {
    request: {},
    response: {}
  }
}

Axios.prototype.request = function (config) {
  console.log('request')
}

Axios.prototype.get = function (config) {
  console.log('get')
}

Axios.prototype.post = function (config) {
  console.log('post')
}

function createInstance(config) {
  let context = new Axios(config)

  // 让instance变为一个可以调用的函数
  let instance = Axios.prototype.request.bind(context) // instance 没有 get等方法
  // 往instance添加 Axios。prototype的方法
  Object.keys(Axios.prototype).forEach(key => {
    instance[key] = Axios.prototype[key].bind(context)
  })
  // 添加defaults 和 config
  return instance
}
