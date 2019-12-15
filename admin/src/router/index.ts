/*
 * @Author: your name
 * @Date: 2019-12-05 23:45:34
 * @LastEditTime: 2019-12-13 15:59:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \express-project\admin\src\router\index.ts
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import CategoriesEdit from '../views/CategoriesEdit.vue';
import CategoriesList from '../views/CategoriesList.vue';
import ItemsEdit from '../views/ItemsEdit.vue';
import ItemsList from '../views/ItemsList.vue';
import HerosEdit from '../views/HerosEdit.vue';
import HerosList from '../views/HerosList.vue';
import ArticlesEdit from '../views/ArticlesEdit.vue';
import ArticlesList from '../views/ArticlesList.vue';
import AdsEdit from '../views/AdsEdit.vue';
import AdsList from '../views/AdsList.vue';
import AdminUserEdit from '../views/AdminUserEdit.vue';
import AdminUserList from '../views/AdminUserList.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoriesEdit,
      },
      {
        path: '/categories/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: CategoriesEdit,
      },
      {
        path: '/categories/list',
        component: CategoriesList,
      },
      {
        path: '/items/create',
        component: ItemsEdit,
      },
      {
        path: '/items/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: ItemsEdit,
      },
      {
        path: '/items/list',
        component: ItemsList,
      },
      {
        path: '/heros/create',
        component: HerosEdit,
      },
      {
        path: '/heros/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: HerosEdit,
      },
      {
        path: '/heros/list',
        component: HerosList,
      },
      {
        path: '/articles/create',
        component: ArticlesEdit,
      },
      {
        path: '/articles/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: ArticlesEdit,
      },
      {
        path: '/articles/list',
        component: ArticlesList,
      },
      {
        path: '/ads/create',
        component: AdsEdit,
      },
      {
        path: '/ads/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: AdsEdit,
      },
      {
        path: '/ads/list',
        component: AdsList,
      },
      {
        path: '/admin_users/create',
        component: AdminUserEdit,
      },
      {
        path: '/admin_users/edit/:id',
        // 直接将路由参数注入到组件内部 如果 props 被设置为 true，route.params 将会被设置为组件属性
        props: true,
        component: AdminUserEdit,
      },
      {
        path: '/admin_users/list',
        component: AdminUserList,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    next('/login');
  }
  next();
});

export default router;
