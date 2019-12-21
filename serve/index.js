/*
 * @Author: your name
 * @Date: 2019-12-05 23:46:11
 * @LastEditTime : 2019-12-18 15:39:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\index.js
 */
const express = require('express')
const app = express()

app.set('secret', 'safsdf')

app.use(express.json())
app.use(require('cors')())
// express托管静态文件
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/web', express.static(__dirname + '/web'))

require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
  console.log('start')
})