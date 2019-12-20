/*
 * @Author: your name
 * @Date: 2019-12-17 14:23:54
 * @LastEditTime : 2019-12-18 22:18:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\declare\declare.d.ts
 */
interface ListModel {
    categoryName: string;
    title: string;
    date: string;
}
interface HeroModel {
    name: string;
    avatar: string;
}
interface NewCatModel {
    name: string;
    newsList: ListModel[];
}
interface HeroCatModel {
    name: string;
    heroList: HeroModel[]
}
interface HeroDetailsModel {
  name: string;
  title: string;
  banner:string;
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
declare module 'vue-awesome-swiper' {
    const VueAwesomeSwiper: any;
    export default VueAwesomeSwiper
}
