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
interface NewCatModel {
    name: string;
    newsList: ListModel[];
}
declare module 'vue-awesome-swiper' {
    const VueAwesomeSwiper: any;
    export default VueAwesomeSwiper
}
