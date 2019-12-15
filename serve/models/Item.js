/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime: 2019-12-09 20:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    },
})
module.exports = mongoose.model('Item', schema)
