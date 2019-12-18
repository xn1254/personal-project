/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime : 2019-12-18 16:43:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    // 关联类型表字段,关联多个分类
    categories: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Category'
        }
    ],
    body: {
        type: String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Article', schema)
