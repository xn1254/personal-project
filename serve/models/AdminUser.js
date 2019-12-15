/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime: 2019-12-11 15:02:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        // 对密码只进行一次加密
        select: false,
        // 密码加密
        set (val) {
            return require('bcryptjs').hashSync(val, 10)
        }
    }
})
module.exports = mongoose.model('AdminUser', schema)
