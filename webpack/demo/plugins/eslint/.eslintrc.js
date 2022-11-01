/*
 * @Author: jack.lu
 * @Date: 2022-10-27 17:16:29
 * @LastEditTime: 2022-10-27 17:19:07
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/webpack/demo/plugins/eslint/.eslintrc.js
 */
module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-var': 'error',
    'no-console': 'error'
  }
}
