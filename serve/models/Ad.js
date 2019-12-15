/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime: 2019-12-11 00:10:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    items: [
        {
            image: { type: String },
            url: { type: String }
        }
    ]
})
module.exports = mongoose.model('Ad', schema)
