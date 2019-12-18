/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime : 2019-12-18 15:05:43
 * @LastEditors  : Please set LastEditors
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
        ref: 'Category',
        required: false
    }
})

// 定义表虚拟字段children
schema.virtual('children', {
    // 外键
    localField: '_id',
    // 字段名
    foreignField: 'parent',
    justOne: false,
    // 关联表
    ref: 'Category'
})

// 定义表虚拟字段newsList
schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

// 省略第三个参数集合名：为第一个参数的小写复数
module.exports = mongoose.model('Category', schema)