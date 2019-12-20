/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime : 2019-12-20 23:03:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\serve\models\Category.js
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
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
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number }
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        delay: { type: String },
        cost: { type: Number },
        description: { type: String },
        tips: { type: String }
    }],
    item1: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    item2: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    usageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    teamTips: {
        type: String
    },
    partners: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: {
            type: String
        }
    }]
})
module.exports = mongoose.model('Hero', schema)
