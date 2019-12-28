/*
 * @Author: your name
 * @Date: 2019-12-22 00:41:13
 * @LastEditTime : 2019-12-28 15:49:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\vue.config.js
 */
module.exports = {
    outputDir: __dirname + '/../serve/web',
    publicPath: process.env.NODE_ENV === 'production'
      ? '.'
      : '/',
}