/*
 * @Author: your name
 * @Date: 2019-12-06 19:35:43
 * @LastEditTime: 2019-12-09 23:42:21
 * @LastEditors: Please set LastEditors
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
