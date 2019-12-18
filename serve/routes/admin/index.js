/*
 * @Author: your name
 * @Date: 2019-12-06 19:19:01
 * @LastEditTime : 2019-12-18 14:54:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\routes\admin\index.js
 */
module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  // 错误断言
  const assert = require('http-assert')
  const AdminModel = require('../../models/AdminUser')
  const router = express.Router({
    // 子路由继承父路由的参数
    mergeParams: true
  })
  // 通过路由参数构建通用curd接口
  router.post('/', async (req, res) => {
    const Model = req.Model
    const data = await Model.create(req.body)
    res.send(data)
  })

  router.put('/:id', async (req, res) => {
    const Model = req.Model
    const data = await Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(data)
  })

  router.get('/', async (req, res) => {
    const Model = req.Model
    const queryOptions = {}
    if (Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    // populate用于取出数据表的关联字段
    const items = await Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    const Model = req.Model
    const data = await Model.findById(req.params.id)
    res.send(data)
  })

  router.delete('/:id', async (req, res) => {
    const Model = req.Model
    await Model.findByIdAndDelete(req.params.id)
    res.send({
      msg: '已删除'
    })
  })

  // 用户中间件
  const authMiddleWare = require('../../middleware/auth')()

  // 获取接口对应表中间件
  const resourceMiddleWare = require('../../middleware/model')()

  // 通过路由中间件将参数名转类名并挂载在params上，类似于vue路由的导航守卫
  app.use('/admin/api/rest/:resource', authMiddleWare, resourceMiddleWare, router)

  // 单独定义文件上传路由
  // express用于获取上传文件的中间件
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload', authMiddleWare, upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 定义登录路由
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    // 2.校验密码
    // 3.返回token
    const user = await AdminModel.findOne({
      username,
    }).select('+password') // 因为建表时设置了select为false，默认取不出password字段，所以需要单独处理
    assert(user, 422, '用户不存在')
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 返回token
    const token = jwt.sign({ id: user._id }, app.set('secret'))
    res.send({
      token
    })
  })

  // 全局错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
    next()
  })
}