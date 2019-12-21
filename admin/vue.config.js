/*
 * @Author: your name
 * @Date: 2019-12-22 00:44:44
 * @LastEditTime : 2019-12-22 00:53:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin\vue.config.js
 */
module.exports = {
    outputDir: __dirname + '/../serve/admin',
    publicPath: process.env.NODE_ENV === 'production'
      ? '.'
      : '/'
  }