/*
 * @Author: your name
 * @Date: 2019-12-18 15:27:27
 * @LastEditTime : 2019-12-18 15:39:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\serve\routes\web\index.js
 */
module.exports = app => {
    const router = require('express').Router()
    const Category = require('../../models/Category')
    const Article = require('../../models/Article')
    // 手动插入文章数据
    router.get('/news/init', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where(
            {
                parent
            }
        ).lean()
        const newsTitles = ["夏日新版本“稷下星之队”即将6月上线", "王者荣耀携手两大博物馆 走进稷下学宫", "王者大陆第一学院【稷下】档案", "跨界合作丨控油神装登场，唤醒无限护肤力量！", 
        "像素游戏时代“老四强”重聚《魂斗罗：归来》，新版本、新英雄燃爆两周年庆", "6月11日全服不停机更新公告", "【已修复】王者大陆的端午宝藏活动页面异常问题说明", 
        "6月7日体验服停机更新公告", "6月4日全服不停机更新公告", "关于2019年KPL春季赛总决赛 RNG.M vs eStarPro 补赛、赛果及世界冠军杯安排公告", 
        "活力夏日活动周 王者峡谷好礼多", "王者大陆的端午宝藏活动公告", "峡谷庆端午 惊喜礼不断", "【场里场外，一起开黑】感恩礼包放送", 
        "KPL总决赛来临之际 场里场外一起开黑/观赛活动开启！", "【6月15日 再战西安 · 2019年KPL春季赛总决赛重启公告】", 
        "王者荣耀世界冠军杯荣耀来袭，KPL赛区选拔赛谁能突围而出？", "【关于2019年KPL春季赛总决赛门票退换及异地用户现场观赛补贴公告】", 
        "KRKPL：还在用庄周打辅助？JY边路庄周带你越塔莽！", "世冠KPL赛区战队出征名单公布 王者，无惧挑战！"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                title,
                categories: randomCats.slice(0, 2)
            }
        })

        await Article.deleteMany({})
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })

        // populate查询弊端：根据分类的总数量查询，无法保证每个分类的数量是否均匀
        // .populate({
        //     path: 'children',
        //     populate: {
        //         path: 'newsList'
        //     }
        // }).lean()
        
        // 聚合查询，在一次查询中通过管道对数据进行过滤
        const cats = await Category.aggregate([
            {
              $match: {
                parent: parent._id
              }
            },
            {
              // 对articles表进行关联查询
              $lookup: {
                from: 'articles',
                localField: '_id',
                foreignField: 'categories',
                as: 'newsList'
              }
            },
            {
              // 对newsList做limit限制
              $addFields: {
                newsList: {
                  $slice: ['$newsList', 5]
                }
              }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
          name: '热门',
          newsList: await Article.find().where({
            categories: {
              $in: subCats
            }
          }).populate('categories').limit(5).lean()
        })
        cats.map(cat => {
          cat.newsList.map(news => {
            news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
            return news
          })
          return cat
        })
        res.send(cats)
    })
    app.use('/web/api', router)
}