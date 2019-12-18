/*
 * @Author: your name
 * @Date: 2019-12-17 23:45:56
 * @LastEditTime : 2019-12-18 15:12:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\admin\src\declare\declare.d.ts
 */
interface UserModel {
  username: string;
  password: string;
}
interface UserItemModel {
  _id: string;
  username: string;
  _v: number;
}
interface AdsModel {
  name: string;
  items: object[];
}
interface AdsItemModel {
  _id: string;
  name: string;
  _v: number;
}
interface ArticlesModel {
  title: string;
  body: string;
  categories: object[];
}
interface ArticlesItemModel {
  _id: string;
  title: string;
  _v: number;
}
interface CategoriesModel {
  name: string;
  parent: object[] | string;
}
interface CategoriesItemModel {
  _id: string;
  name: string;
  _v: number;
}
interface HeroModel {
  name: string;
  title: string;
  categories: string[];
  avatar: string;
  scores: object;
  item1: object[];
  item2: object[];
  skills: object[];
  usageTips: string;
  battleTips: string;
  teamTips: string;
}
interface HeroItemModel {
  _id: string;
  name: string;
  _v: number;
}
interface GoodsModel {
  name: string;
  icon: string;
}
interface GoodsItemModel {
  _id: string;
  name: string;
  _v: number;
}