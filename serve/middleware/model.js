/*
 * @Author: your name
 * @Date: 2019-12-13 15:24:47
 * @LastEditTime: 2019-12-13 15:36:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\middleware\model.js
 */
module.exports = options => async (req, res, next) => {
  const modelName = require('inflection').classify(req.params.resource)
  req.Model = require(`../models/${modelName}`)
  next()
}