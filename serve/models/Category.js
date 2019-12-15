/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime: 2019-12-09 12:45:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        // 定义parent关联字段,id类型必须是mongoose.SchemaTypes.ObjectId
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})
module.exports = mongoose.model('Category', schema)
