/*
 * @Author: your name
 * @Date: 2019-12-16 00:11:08
 * @LastEditTime: 2019-12-17 00:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github项目\web\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
