/*
 * @Author: your name
 * @Date: 2019-12-06 19:27:44
 * @LastEditTime: 2019-12-10 17:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\plugins\db.js
 */
module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.set('useFindAndModify', false)
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}