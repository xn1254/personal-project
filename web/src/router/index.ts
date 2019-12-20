/*
 * @Author: your name
 * @Date: 2019-12-16 00:11:08
 * @LastEditTime : 2019-12-19 19:12:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue';
import Hero from '../views/Hero.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/article/:id',
        name: 'article',
        component: Article,
        props: true,
      },
    ],
  },
  {
    path: '/hero/:id',
    name: 'hero',
    component: Hero,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
