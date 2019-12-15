/*
 * @Author: your name
 * @Date: 2019-12-13 15:22:55
 * @LastEditTime: 2019-12-13 15:41:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\middleware\auth.js
 */
module.exports = options => async (req, res, next) => {
  const assert = require('http-assert')
  const AdminModel = require('../models/AdminUser')
  const jwt = require('jsonwebtoken')
  // 接口校验用户是否登录.统一约束错误码为401
  const token = String(req.headers.authorization || '').split(' ').pop()
  assert(token, 401, 'token不存在')
  const { id } = jwt.verify(token, req.app.get('secret'))
  assert(token, 401, '无效的token')
  // 挂载在req上next()的回调也可以用
  req.user = await AdminModel.findById(id)
  assert(req.user, 401, '请先登录')
  next()
}